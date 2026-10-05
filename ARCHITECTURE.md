# Architecture decision

Use Next.js App Router with React and TypeScript. The portfolio needs route-specific metadata, server-rendered editorial pages, image optimization, and durable project case-study routes. App Router provides those capabilities directly and allows most page content to remain server rendered. Interactive diagrams and navigation can be isolated as client components.

Use custom CSS with semantic custom properties instead of a UI framework. This keeps the visual system authored for Ghost Protocol and avoids adding a component library whose defaults would shape the design. Store portfolio content as typed data modules, separate from page presentation.

Use Next Image for responsive portrait delivery. Keep the copied JPEG as the single source asset; let the image optimizer generate requested WebP/AVIF variants at delivery time instead of checking in duplicate image files.

Use Oxlint with React, TypeScript, and accessibility rules, TypeScript strict mode, and Vitest with Testing Library for focused component and content checks. Add browser-level coverage when navigation and case-study interactions are implemented.
