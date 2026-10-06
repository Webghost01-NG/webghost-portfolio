# Webghost Portfolio

An editorial engineering portfolio for Abdurrahman Opeyemi Adesanya (Webghost), focused on protocol engineering, Zcash and privacy tooling, developer infrastructure, DeFi primitives, and autonomous systems.

## Architecture

- **Next.js App Router** renders the portfolio and statically generates project case studies.
- **TypeScript** keeps project records and route generation checked at build time.
- **Custom CSS** implements the Ghost Protocol token system and route-specific editorial compositions.
- **Structured content** lives in `src/content/portfolio.ts` and `src/content/nivyr.ts`; components render those records and verified lifecycle diagrams.
- **Server components by default.** Client JavaScript is limited to the interactive site navigation.
- **Vitest and Testing Library** cover content integrity, critical sections, and navigation behavior. **Playwright and axe-core** cover route flows, responsive overflow, and accessibility checks.

## Local development

Requires Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

The local site runs at `http://localhost:3000`.

## Verification

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Playwright's browser can be installed with `npx playwright install chromium` when needed. The E2E command starts a local Next.js development server on port 3002.

## Content and routes

- `/` — editorial portfolio, flagship engineering, selected systems, engineering lab, background, writing and archive.
- `/work` — complete indexed work catalogue with role and provenance.
- `/work/[slug]` — evidence-led case studies generated for substantial projects with enough source detail.
- `/about` — physics background, engineering progression and selected credentials.
- `/writing` — dated articles from the public Medium RSS listing.
- `/contact` — verified contact and social destinations.

Project records include source, provenance, technology, evidence and limitation fields. Keep these fields factual when adding work. A fork or team repository must identify the contribution boundary, and an unverified deployment or result must remain explicitly unverified.

## Design system

Ghost Protocol uses a near-monochrome canvas, restrained project accents, Space Grotesk display typography, Inter body text, and JetBrains Mono for compact technical labels. SVG/HTML diagrams and semantic lists explain system state; no external animation or icon library is used.

## SEO and deployment

Route metadata, Open Graph images, canonical URLs, `sitemap.xml`, `robots.txt`, and the WG SVG icon are generated through the App Router. `NEXT_PUBLIC_SITE_URL` may override the default `https://webghost-portfolio.vercel.app` origin when a final Vercel production URL is known.

The release gate is recorded in [ARCHITECTURE.md](./ARCHITECTURE.md): publish the complete verified repository, deploy the finished production branch to Vercel, then check the live URL and important routes. No intermediate checkpoint is a production deployment.
