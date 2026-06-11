"use client";

import { useState, useCallback } from "react";
import { socials, profile } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/effects/reveal";
import { Mail, ExternalLink, Globe, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Email: Mail,
  LinkedIn: Globe,
  GitHub: ExternalLink,
};

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API may fail on insecure contexts; fallback to mailto
    }
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container-portfolio">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <div className="glass glow-primary rounded-2xl p-8 text-center md:p-12">
              <h2 className="font-sans text-2xl font-semibold tracking-tight text-on-surface md:text-3xl">
                Let's build something calm, fast, and durable.
              </h2>
              <p className="mt-3 text-base text-on-surface-variant">
                I'm always open to new opportunities, collaborations, and conversations.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                {/* Primary CTA */}
                <Button size="lg" asChild>
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="h-4 w-4" />
                    Send an Email
                  </a>
                </Button>
                {/* Copy email button */}
                <Button variant="secondary" size="lg" onClick={handleCopyEmail}>
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-green-600" />
                      Copied!
                    </>
                  ) : (
                    "Copy Email"
                  )}
                </Button>
                {/* Download resume */}
                <Button variant="secondary" size="lg" asChild>
                  <a
                    href="/Umit_Vice_Senior_FullStack_AI_Engineer_Resume.pdf"
                    download
                  >
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Social tiles */}
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {socials.map((social) => {
                  const Icon = iconMap[social.name as keyof typeof iconMap];
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.name === "Email" ? undefined : "_blank"}
                      rel={social.name === "Email" ? undefined : "noopener noreferrer"}
                      className="glass-strong flex items-center gap-3 rounded-xl p-4 text-left transition-all duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {Icon && <Icon className="h-5 w-5 shrink-0 text-primary" />}
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-on-surface">{social.name}</p>
                        <p className="truncate text-xs text-on-surface-variant">{social.display}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}