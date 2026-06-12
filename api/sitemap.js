const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/about/doctor", priority: "0.7", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/services/hearing", priority: "0.9", changefreq: "weekly" },
  { path: "/services/speech", priority: "0.9", changefreq: "weekly" },
  { path: "/services/implants", priority: "0.85", changefreq: "weekly" },
  { path: "/services/book", priority: "0.8", changefreq: "weekly" },
  { path: "/location", priority: "0.75", changefreq: "monthly" },
  { path: "/contact", priority: "0.75", changefreq: "monthly" },
];

function getOrigin(req) {
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  return `${proto}://${host}`;
}

export default function handler(req, res) {
  const origin = getOrigin(req).replace(/\/$/, "");
  const lastmod = "2026-06-12";
  const entries = routes
    .map(
      (route) => `  <url>
    <loc>${origin}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join("\n");

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`);
}
