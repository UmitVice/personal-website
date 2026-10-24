// Serves the static export from Workers static assets and keeps the apex
// domain redirecting to the canonical www origin, as it did on Vercel.
const CANONICAL_HOST = "www.umitvice.com";
const APEX_HOST = "umitvice.com";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === APEX_HOST) {
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 308);
    }
    return env.ASSETS.fetch(request);
  },
};
