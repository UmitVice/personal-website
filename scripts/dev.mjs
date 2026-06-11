#!/usr/bin/env node
/**
 * Cross-platform dev launcher.
 *
 * Scans the dev port for any zombie next-server process from a previous run,
 * force-kills it, waits for the OS to release the port, and then starts a
 * fresh `next dev` (Webpack). This means you can always just run `yarn dev`
 * without manually hunting down `PID 21344` style errors, and without the
 * Turbopack HMR panics that crash the dev server on some Windows setups.
 *
 * - Windows: uses `netstat` + `taskkill`
 * - macOS / Linux: uses `lsof` + `SIGKILL`
 * - Webpack is used in dev mode for stability. Pass USE_TURBOPACK=1 to opt
 *   back into Turbopack if you want to experiment.
 */
import { execSync, spawn } from "node:child_process";
import process from "node:process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const isWindows = process.platform === "win32";
const PORT = process.env.PORT || "3000";
const useTurbopack = process.env.USE_TURBOPACK === "1";
const devArgs = useTurbopack ? ["next", "dev", "--turbopack"] : ["next", "dev", "--webpack"];

const log = (msg) => process.stdout.write(`[dev] ${msg}\n`);

/** Return PIDs currently holding the given TCP port in LISTENING state. */
function findPidsOnPort(port) {
  try {
    if (isWindows) {
      const out = execSync(`netstat -ano | findstr :${port}`, { encoding: "utf8" });
      const pids = new Set();
      for (const line of out.split(/\r?\n/)) {
        const t = line.trim();
        if (!t) continue;
        // Format: TCP    0.0.0.0:3000    0.0.0.0:0    LISTENING    12345
        const parts = t.split(/\s+/);
        if (parts.length >= 5 && parts[3] === "LISTENING" && /^\d+$/.test(parts[4])) {
          pids.add(parts[4]);
        }
      }
      return [...pids].filter((p) => p !== "0");
    }
    const out = execSync(`lsof -ti :${port} -sTCP:LISTEN 2>/dev/null || true`, {
      encoding: "utf8",
    });
    return out.split(/\s+/).map((s) => s.trim()).filter(Boolean);
  } catch {
    return [];
  }
}

function killPid(pid) {
  try {
    if (isWindows) {
      execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
    } else {
      process.kill(Number(pid), "SIGKILL");
    }
    log(`Killed existing process on port ${PORT} (PID ${pid})`);
    return true;
  } catch {
    return false;
  }
}

function sleep(ms) {
  try {
    if (isWindows) {
      // ping is the most portable cross-Windows sleep
      execSync(`ping -n ${Math.ceil(ms / 1000) + 1} 127.0.0.1 -w ${ms} > nul 2>&1`);
    } else {
      execSync(`sleep ${(ms / 1000).toFixed(1)}`);
    }
  } catch {
    /* ignore */
  }
}

// ── Step 1: free the port ────────────────────────────────────────────
log(`Scanning port ${PORT} for any leftover dev server...`);
const pids = findPidsOnPort(PORT).filter((p) => Number(p) !== process.pid);

if (pids.length > 0) {
  log(`Found ${pids.length} process(es) on port ${PORT}: ${pids.join(", ")}`);
  for (const pid of pids) {
    killPid(pid);
  }
  sleep(1500);
  log("Port released.");
} else {
  log(`Port ${PORT} is free.`);
}

// ── Step 2: start a fresh dev server ────────────────────────────────
log("Starting Next.js dev server...");
log(`Bundler: ${useTurbopack ? "Turbopack" : "Webpack"} (set USE_TURBOPACK=1 to switch)`);

const child = spawn("yarn", devArgs, {
  stdio: "inherit",
  cwd: projectRoot,
  env: process.env,
  shell: true,
});

const forward = (sig) =>
  process.on(sig, () => {
    try {
      child.kill(sig);
    } catch {
      /* child already gone */
    }
    setTimeout(() => process.exit(0), 200);
  });
forward("SIGINT");
forward("SIGTERM");

child.on("exit", (code) => process.exit(code ?? 0));
