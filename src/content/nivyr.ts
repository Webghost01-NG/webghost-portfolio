export type NivyrLifecycleStage = {
  readonly id: string;
  readonly name: string;
  readonly observer: string;
  readonly detail: string;
};

export const nivyr = {
  name: "Nivyr",
  slug: "nivyr",
  classification: "01 / FEATURED ENGINEERING",
  category: "ZCASH / PAYMENT TEST INFRASTRUCTURE",
  thesis: "A transaction being mined doesn't mean your application has observed it.",
  description:
    "Nivyr gives TypeScript payment tests a reproducible local Zcash lifecycle, exposing what the chain, indexer, recipient wallet and application know at each step.",
  distinction: ["BROADCAST", "MINED", "INDEXED", "WALLET-OBSERVED"],
  lifecycleNote:
    "A new recipient wallet can remain unaware after the chain and indexer advance. Explicit sync detects the payment; a separate wallet enhancement makes its memo available.",
  technologies: ["TYPESCRIPT", "VITEST", "DOCKER", "ZEBRA", "ZAINO", "ZCASH"],
  package: "@webghost01/nivyr",
  version: "0.1.0",
  verifiedEnvironment: "PUBLIC PACKAGE / FEDORA LINUX 44 / X86_64",
  links: {
    source: "https://github.com/Webghost01-NG/nivyr",
    npm: "https://www.npmjs.com/package/@webghost01/nivyr",
    docs: "https://nivyr-docs.vercel.app",
  },
  stages: [
    {
      id: "01",
      name: "BROADCAST",
      observer: "ZEBRA / TRANSACTION VIEW",
      detail: "The txid is visible to the node, with no mined height or confirmations yet.",
    },
    {
      id: "02",
      name: "MINED",
      observer: "ZEBRA / ACTIVE CHAIN",
      detail: "The node reports an active-chain block height and confirmation count.",
    },
    {
      id: "03",
      name: "INDEXED",
      observer: "ZAINO / INDEXER TIP",
      detail: "The indexer height has reached the mined block. That alone does not mean a wallet has scanned it.",
    },
    {
      id: "04",
      name: "WALLET SYNC",
      observer: "EXPLICIT SYNC / TX DETECTED",
      detail: "Before sync, a fresh recipient wallet has no record. After sync, its transaction list contains the txid.",
    },
    {
      id: "05",
      name: "MEMO AVAILABLE",
      observer: "WALLET ENHANCE / PARSED RESULT",
      detail: "Enhancement is a separate wallet operation; Nivyr then exposes the memo parsed from wallet output.",
    },
  ] satisfies readonly NivyrLifecycleStage[],
} as const;
