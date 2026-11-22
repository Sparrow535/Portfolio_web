// Downloads the images used by the site straight from your Figma file.
// Usage:  1) create a Figma personal access token (Figma → Settings → Security → Personal access tokens, scope: file content read)
//         2) put it in .env.local as  FIGMA_TOKEN=figd_xxx   (or set the env var)
//         3) npm run figma:images
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FILE_KEY = "RFMO1Aq0ORO1F380fy4Phw";
const OUT = join(process.cwd(), "public", "images");

// read FIGMA_TOKEN from env or .env.local
let token = process.env.FIGMA_TOKEN;
if (!token && existsSync(".env.local")) {
  const m = readFileSync(".env.local", "utf8").match(/^FIGMA_TOKEN\s*=\s*(.+)$/m);
  if (m) token = m[1].trim().replace(/^["']|["']$/g, "");
}
if (!token) {
  console.error("Missing FIGMA_TOKEN. Add it to .env.local (see .env.example).");
  process.exit(1);
}

// file name -> Figma node id, format
const PNG = {
  "hero-portrait.png": "2075:3320",
  "about-portrait.png": "2075:3322",
  "about-hero.png": "2075:3324",
  // "Live project capture" frames from the four case studies (used for cards + case-study pages)
  "project-bil-chatbot.png": "2098:1131",
  "project-mindfulrealestate.png": "2098:1144",
  "project-mystique-realm.png": "2098:1157",
  "project-sea-travel.png": "2098:1170",
};
const SVG = {
  "logo-outline.svg": "2071:2702", // R.R — Main logo · Purple outline
};

async function exportNodes(map, format, scale) {
  const ids = Object.values(map).join(",");
  const url = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=${format}${scale ? `&scale=${scale}` : ""}`;
  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  if (!res.ok) throw new Error(`Figma API ${res.status}: ${await res.text()}`);
  const { images, err } = await res.json();
  if (err) throw new Error(err);
  for (const [file, id] of Object.entries(map)) {
    const src = images[id];
    if (!src) { console.warn(`  ! no image returned for ${file} (${id})`); continue; }
    const buf = Buffer.from(await (await fetch(src)).arrayBuffer());
    writeFileSync(join(OUT, file), buf);
    console.log(`  ✓ ${file}  (${(buf.length / 1024).toFixed(0)} KB)`);
  }
}

mkdirSync(OUT, { recursive: true });
console.log("Exporting PNGs @2x…");
await exportNodes(PNG, "png", 2);
console.log("Exporting SVGs…");
await exportNodes(SVG, "svg");
console.log("Done. Restart `npm run dev` if it is running.");
