# Architecture decision

Use Next.js App Router with React and TypeScript. The portfolio needs route-specific metadata, server-rendered editorial pages, image optimization, and durable project case-study routes. App Router provides those capabilities directly and allows most page content to remain server rendered. Interactive diagrams and navigation can be isolated as client components.

Use custom CSS with semantic custom properties instead of a UI framework. This keeps the visual system authored for Ghost Protocol and avoids adding a component library whose defaults would shape the design. Store portfolio content as typed data modules, separate from page presentation.

Use Next Image for responsive portrait delivery. Keep the copied JPEG as the single source asset; let the image optimizer generate requested WebP/AVIF variants at delivery time instead of checking in duplicate image files.

Use Oxlint with React, TypeScript, and accessibility rules, TypeScript strict mode, and Vitest with Testing Library for focused component and content checks. Add browser-level coverage when navigation and case-study interactions are implemented.

## Final release and deployment gate

Vercel is the deployment target only after the entire portfolio is complete and final QA passes. Intermediate review checkpoints must remain local and must not be deployed.

Before release, run lint, typecheck, all automated tests, and the production build; complete responsive browser and accessibility checks; verify external links, route metadata, OpenGraph output, and that no secrets or local paths are exposed; and confirm a clean Git worktree. Push the completed repository to the intended GitHub repository, deploy that production build to Vercel, then verify the production URL and important routes in a browser. Report the verified URL and deployment status. If GitHub or Vercel authentication, repository permissions, or other external authorization is required, stop there and request it. Do not purchase or configure a custom domain without explicit approval.
