const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.pangram-world.com";
const ROOT_DIR = path.resolve(__dirname, "..");
const OUTPUT_FILE = path.join(ROOT_DIR, "sitemap.xml");

// Folders to ignore completely
const IGNORE_DIRS = new Set([
  ".git",
  ".github",
  "node_modules",
  "scripts",
  "styles",
  "css",
  "js",
  "images",
  "img",
  "fonts",
  "assets",
]);

// HTML files to ignore
const IGNORE_FILES = new Set(["404.html"]);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(ROOT_DIR, fullPath);

    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      files = files.concat(walk(fullPath));
      continue;
    }

    if (!entry.isFile()) continue;
    if (!entry.name.endsWith(".html")) continue;
    if (IGNORE_FILES.has(entry.name)) continue;

    files.push(relPath);
  }

  return files;
}

function toUrl(relFilePath) {
  let urlPath = relFilePath.replace(/\\/g, "/");

  // Turn index.html into folder URL
  if (urlPath === "index.html") {
    return `${SITE_URL}/`;
  }

  urlPath = urlPath.replace(/index\.html$/i, "");
  urlPath = urlPath.replace(/\.html$/i, "");

  return `${SITE_URL}/${urlPath}`;
}

function getLastMod(relFilePath) {
  const fullPath = path.join(ROOT_DIR, relFilePath);
  return fs.statSync(fullPath).mtime.toISOString().split("T")[0];
}

const htmlFiles = walk(ROOT_DIR).sort();

const urls = htmlFiles.map((file) => {
  const loc = toUrl(file);
  const lastmod = getLastMod(file);

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

fs.writeFileSync(OUTPUT_FILE, sitemap, "utf8");
console.log(`sitemap.xml generated with ${urls.length} URLs`);
