// Prerenders every route to static HTML after `vite build` and the SSR build,
// so crawlers (including AI crawlers that don't run JavaScript) see real content.
import { promises as fs } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, getRouteMeta, indexablePaths, buildLlmsTxt } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const SITE_URL = "https://supereka-sg.com";
const template = await fs.readFile(path.join(dist, "index.html"), "utf8");

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const headTags = (meta) => {
  const canonical = `${SITE_URL}${meta.path}`;
  const tags = [
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    meta.noindex
      ? `<meta name="robots" content="noindex" />`
      : `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="SUPEREKA" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:locale" content="en_SG" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    ...meta.jsonLd.map(
      (d) =>
        `<script type="application/ld+json">${JSON.stringify(d).replace(/</g, "\\u003c")}</script>`
    ),
  ];
  return tags.join("\n    ");
};

const page = (routePath) => {
  const meta = getRouteMeta(routePath);
  const html = render(routePath);
  return template
    .replace(/<title>.*?<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace("<!--app-head-->", headTags(meta))
    .replace("<!--app-html-->", html);
};

const write = async (file, content) => {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, content);
};

for (const p of indexablePaths) {
  const file = p === "/" ? "index.html" : path.join(p, "index.html");
  await write(path.join(dist, file), page(p));
  console.log("prerendered", p);
}

// GitHub Pages serves 404.html (with a 404 status) for unknown URLs.
await write(path.join(dist, "404.html"), page("/does-not-exist/"));

const today = new Date().toISOString().slice(0, 10);
await write(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexablePaths
  .map(
    (p) =>
      `  <url><loc>${SITE_URL}${p}</loc><lastmod>${today}</lastmod></url>`
  )
  .join("\n")}
</urlset>
`
);

const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];
await write(
  path.join(dist, "robots.txt"),
  `User-agent: *
Allow: /

${aiBots.map((b) => `User-agent: ${b}\nAllow: /`).join("\n\n")}

Sitemap: ${SITE_URL}/sitemap.xml
`
);

await write(path.join(dist, "llms.txt"), buildLlmsTxt());

await fs.rm(ssrDir, { recursive: true, force: true });
console.log("done");
