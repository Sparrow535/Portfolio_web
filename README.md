# Rohan Rai — Portfolio (Next.js + Tailwind)

Built from the Figma file `portfolio` (Main page). Stack: Next.js 15 (App Router), TypeScript, Tailwind CSS 3, Fira Code.

## Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Design tokens (tailwind.config.ts)
| Token | Value |
|---|---|
| bg | #282C33 |
| primary | #C778DD |
| gray | #ABB2BF |
| font | Fira Code (via @fontsource-variable/fira-code) |

## Images to export from Figma into `public/images/`
Select the layer in Figma → Export (PNG @2x, or SVG for the logo).

| File | Figma layer |
|---|---|
| logo-outline.svg | "R.R — Main logo · Purple outline" (2071:2702) — currently a placeholder |
| hero-portrait.png | "Monochrome Manchester United Sketch Portrait 1" (2075:3320) |
| about-portrait.png | "Sketch Portrait and Soccer Figure 1" (2075:3322) |
| about-hero.png | "Hooded Glasses Portrait Sketch 1" (2075:3324) |
| project-bil-chatbot.png | "IMAGE SLOT / BIL Chatbot" |
| project-mindfulrealestate.png | "IMAGE SLOT / MindfulRealestate.bt" |
| project-mystique-realm.png | "IMAGE SLOT / Mystique Realm" |
| project-sea-travel.png | "IMAGE SLOT / SEA Travel" |
| certificate.png | Coursera certificate image |

## Structure
- `app/` — `/` (home), `/about`, `/projects`, `/projects/[slug]` (case-study stub), `/contacts`
- `components/` — Header, Footer, SocialSidebar, ProjectCard, TechCard, Button, ContactForm, …
- `data/` — projects, technologies, site info/nav (edit content here)

## TODO
- Add your X/Twitter URL in `data/site.ts`
- Fill the case-study pages from Figma sections 03–06
- Check mobile spacing against the "02 / Portfolio — Mobile" frames
