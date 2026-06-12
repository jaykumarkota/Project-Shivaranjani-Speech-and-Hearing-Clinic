function getOrigin(req) {
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  return `${proto}://${host}`.replace(/\/$/, "");
}

export default function handler(req, res) {
  const origin = getOrigin(req);

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");
  res.status(200).send(`User-agent: *
Allow: /

Disallow: /api/
Disallow: /sanity/

Sitemap: ${origin}/sitemap.xml
`);
}
