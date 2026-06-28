## Goal

Premium dark-themed personal portfolio for Rahul Patnaik Potnuru — Full Stack Developer who ships production-quality websites. Single long-scroll page with sticky nav and section anchors, built to leave a strong impression on recruiters and clients.

## Assets (uploaded via Lovable Assets CDN, no binaries in repo)

- `bannetr.jpeg` → hero background (dark gradient overlay for legibility)
- `pic.jpeg` → professional photo in a soft-glow framed card with dark vignette so the outdoor background blends into the theme
- `Rahul_Patnaik_Resume (1).pdf` → opened in a new tab from nav "Resume", hero "View My Resume" CTA, and contact "Download Resume"
- 4 attached project screenshots → real case-study images for the Projects section (no placeholders)

Email pulled from banner: **[potnururahul477@gmail.com](mailto:potnururahul477@gmail.com)**.

## Project links (final)


| Project            | Live                                                              | GitHub                                  |
| ------------------ | ----------------------------------------------------------------- | --------------------------------------- |
| TruthLens+         | truthlens-verified-48z2y0k9r-24981a0556-progs-projects.vercel.app | 24981a0556-prog/truthlens-verified      |
| Hanuman Petroleums | hanumanpetroleums.com                                             | 24981a0556-prog/hanuman-petrol-hub      |
| Rudhra Clicks      | rudhra-clicks-studio.vercel.app                                   | 24981a0556-prog/rudhra-clicks-studio    |
| Wedding Whispers   | tanstack-start-app.potnuru.workers.dev                            | 24981a0556-prog/wedding-whispers-scroll |


Each card has both Live Demo (primary, mint→blue gradient) and GitHub (ghost) buttons, opened in new tab with `rel="noopener noreferrer"`.

## Design system (src/styles.css)

- Background `#0B0B0B`, surface `#111111`, border `rgba(255,255,255,0.08)`
- Foreground white, muted `rgba(255,255,255,0.62)`
- Accent mint `#6EE7B7`, secondary blue `#60A5FA`
- Tokens: `--gradient-accent` (mint→blue), `--shadow-elegant`, `--shadow-glow`, radius 14px
- Fonts via `<link>` in `__root.tsx`: **Space Grotesk** display + **Inter** body, registered in `@theme` as `--font-display` / `--font-sans`
- Section padding ~120px desktop / 72px mobile, max content width ~1200px

## Sections

1. **Sticky nav** — name mark, anchor links (About, skills, Projects, Contact), small "Resume" ghost button. Blurred translucent bg on scroll. Mobile sheet menu.
2. **Hero** — banner as full-bleed background with dark gradient overlay; two-column (text left, framed photo right). H1 name, "Full Stack Developer & Freelance webdeveloper" role, tagline, 3 CTAs (View Projects, View My Resume, Contact Me), availability dot. Subtle motion: animated radial blobs, slow light sweep across banner, 2–3 floating glass tech badges (React, Node, Tailwind), mouse parallax on photo + badges. No Three.js.
3. **Impact strip** — 4 stat cards (4+ Projects, 4 Live Sites, 100% Responsive, 2028 Grad) with count-up on view.
4. **About** — "Turning Ideas Into Digital Experiences": CS engineering student, real client work, Java + DSA + Full Stack focus. Side rail of credibility chips.
5. **Tech Stack** — 5 grouped cards (Programming, Frontend, Backend, Database, Tools) with hover glow + lift; each skill a pill with a lucide icon.Add proficiency indicators instead of just listing skills.
6. **Featured Projects** — 4 alternating two-column case-study rows. Each row: real screenshot in a tilted browser-chrome frame, category badge, title, tech chips, problem, solution, key features bullets, Live Demo + GitHub buttons.
7. **Contact** — split layout: left = headline + email/LinkedIn/Download Resume buttons + socials; right = form (Name, Email, Message) validated with zod + react-hook-form. Submit opens prefilled `mailto:potnururahul477@gmail.com`. Toast confirms.
8. **Footer** — short statement, Quick Links (Resume, GitHub, LinkedIn), © 2026 Rahul Patnaik Potnuru.

## Motion

`framer-motion` for: section reveal-on-scroll (fade + 16px rise), magnetic primary CTAs, card hover lift, hero parallax, light sweep, count-up stats. Respects `prefers-reduced-motion`.

## Routing & SEO

- Single `src/routes/index.tsx` with hash anchors for in-page nav (one continuous narrative).
- `head()`: title "Rahul Patnaik Potnuru — Full Stack Developer", meta description, og:title/description, og:image (banner CDN URL), twitter card.
- Semantic HTML, single H1, `loading="lazy"` on non-LCP images, banner preloaded.

## Technical notes

- New deps: `framer-motion`, `zod`, `react-hook-form`, `@hookform/resolvers`
- Files: `src/styles.css`, `src/routes/__root.tsx` (font links + og defaults), `src/routes/index.tsx`, `src/components/portfolio/*` (Nav, Hero, Impact, About, TechStack, Projects, Learning, Contact, Footer, MagneticButton, RevealOnScroll, BrowserFrame), `src/data/portfolio.ts`, `src/assets/*.asset.json` (CDN pointers).
- No backend, no Lovable Cloud. No security memory updates.

## Out of scope

- Storing contact submissions in a DB (mailto ships today; upgrade later if you want messages saved + emailed).