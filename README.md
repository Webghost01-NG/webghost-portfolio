# Webghost Portfolio

An editorial portfolio for Abdurrahman Opeyemi Adesanya (Webghost).

## Local development

Requires Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

## Verification

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

The app uses Next.js App Router, TypeScript, and custom CSS. See [ARCHITECTURE.md](./ARCHITECTURE.md) for the initial technology decision.

Final Vercel deployment is gated on completion of the entire portfolio and the release checks in [ARCHITECTURE.md](./ARCHITECTURE.md). Intermediate checkpoints are not deployed.
