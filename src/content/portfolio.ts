export type CaseStudySection = {
  label: string;
  heading: string;
  body: string;
  details?: readonly string[];
};

export type Project = {
  slug: string;
  name: string;
  classification: string;
  category: string;
  thesis: string;
  summary: string;
  role: string;
  provenance: string;
  year: string;
  stack: readonly string[];
  accent: "gold" | "blue" | "orange" | "mint" | "violet";
  repository?: string;
  live?: string;
  package?: string;
  feature: "flagship" | "selected" | "lab";
  destinationLabel?: string;
  evidence: readonly string[];
  limitations: string;
  caseStudy?: readonly CaseStudySection[];
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Webghost01-NG" },
  { label: "X", href: "https://x.com/web_ghost01" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdurrahman-adesanya-53aaa823a/" },
  { label: "Medium", href: "https://medium.com/@webghost1702" },
] as const;

export const projects: readonly Project[] = [
  {
    slug: "nivyr", name: "Nivyr", classification: "01 / FEATURED ENGINEERING", category: "Zcash payment test infrastructure",
    thesis: "A transaction being mined doesn't mean your application has observed it.",
    summary: "A TypeScript API and CLI that coordinates reproducible local Zcash payment tests across node, indexer, wallet and application observations.",
    role: "Author and maintainer", provenance: "Independent project", year: "2026", stack: ["TypeScript", "Vitest", "Docker", "Zebra", "Zaino", "Zcash"], accent: "gold",
    repository: "https://github.com/Webghost01-NG/nivyr", live: "https://nivyr-docs.vercel.app", package: "https://www.npmjs.com/package/@webghost01/nivyr", feature: "flagship",
    evidence: ["Public npm release @webghost01/nivyr 0.1.0", "End-to-end package acceptance recorded on Fedora Linux 44 x86_64", "Local Docker/regtest workflow documented"],
    limitations: "Local regtest infrastructure, not a production wallet. End-to-end package verification is documented on Fedora Linux 44 x86_64; other platforms are unverified.",
    caseStudy: [
      { label: "PROBLEM", heading: "Mining is only one observer's signal.", body: "A node can report a mined transaction while an indexer has not caught up, a recipient wallet has not scanned, and an application has not extracted the memo it needs." },
      { label: "WHY IT MATTERS", heading: "Chain state and application state are different observations.", body: "Tests that stop at transaction inclusion can miss the lag and explicit wallet operations that determine what a payment application can actually use." },
      { label: "SYSTEM", heading: "Broadcast → mined → indexed → synced → enhanced.", body: "Nivyr coordinates Zebra, Zaino and a Zcash wallet in Docker regtest, exposing each boundary through a TypeScript API and test-friendly waits." },
      { label: "ENGINEERING", heading: "Make the observer explicit.", body: "The API separates transaction lookup, active-chain confirmation, indexer height, wallet sync and wallet enhancement. The memo is parsed from wallet output; Nivyr does not pretend the indexer performs that work." },
      { label: "EVIDENCE", heading: "Released package and reproducible test workflow.", body: "Version 0.1.0 is published on npm. The repository documents test, doctor, service lifecycle and package acceptance workflows alongside source and tests." },
      { label: "LIMITATIONS", heading: "A local test harness with a bounded verification matrix.", body: "The release is not a production wallet or independent merchant integration. Platform coverage is currently documented for Fedora Linux 44 x86_64." },
    ],
  },
  {
    slug: "veyrin", name: "Veyrin", classification: "02 / TRANSACTION SAFETY", category: "Zcash intent inspection",
    thesis: "See the transaction intent before anyone signs it.",
    summary: "A read-only PCZT inspector that decodes creator-recorded intent, fingerprints envelopes and surfaces semantic mutations for review.",
    role: "Primary engineer and repository maintainer", provenance: "Independent project", year: "2026", stack: ["TypeScript", "Next.js", "Zcash RPC", "Zallet", "SHA-256"], accent: "blue",
    repository: "https://github.com/Webghost01-NG/veyrin", live: "https://veyrin.vercel.app", feature: "flagship",
    evidence: ["Production site documented with live node observations and Zallet PCZT inspection", "Test coverage for decoding, type-preserving differences and PCZT input validation", "Recipient mutation fixture and source provenance documented"],
    limitations: "Review aid for creator-recorded intent. It does not sign, provide wallet functionality, perform final consensus validation or claim an independent security audit.",
    caseStudy: [
      { label: "PROBLEM", heading: "A signer needs to see what changed.", body: "A PCZT can pass between components before signing. A small change to recipient, fee, memo or other fields can alter the intent that a person expects to approve." },
      { label: "SYSTEM", heading: "Decode, fingerprint, compare.", body: "A server-side allowlisted gateway sends PCZTs to Zallet's read-only inspection RPC. The browser fingerprints the exact envelopes and a type-preserving structural diff exposes added, removed and changed fields." },
      { label: "ENGINEERING", heading: "Preserve the trust boundary.", body: "The network witness and intent lab are separate. QuickNode supplies allowlisted Zcash observations; Zallet decodes envelopes. Creator-recorded fields are presented as intent metadata, not consensus truth." },
      { label: "EVIDENCE", heading: "A controlled recipient change remains decodable.", body: "The repository documents a public PCZT test vector and a still-decodable mutation whose transparent recipient metadata changes. The comparison exposes those field paths rather than hardcoding a verdict." },
      { label: "LIMITATIONS", heading: "Inspection is not signing or verification.", body: "Veyrin has no signing authority and is not a wallet. `pczt_inspect` reports decoded envelope metadata; final cryptographic and consensus checks happen elsewhere in the transaction lifecycle." },
    ],
  },
  {
    slug: "hivekernel", name: "HiveKernel", classification: "03 / AUTONOMOUS SYSTEMS", category: "P2P agent subcontracting and settlement",
    thesis: "Machines hiring machines requires verifiable work and bounded settlement.",
    summary: "A Rust workspace for discovering agents, subcontracting tasks, verifying receipts and settling escrow through an EVM contract.",
    role: "Author and maintainer", provenance: "Independent project", year: "2026", stack: ["Rust", "Tokio", "libp2p", "Solidity", "Foundry"], accent: "orange",
    repository: "https://github.com/Webghost01-NG/HiveKernel", live: "https://hive-kernel.vercel.app", feature: "flagship",
    evidence: ["Rust workspace split into core, P2P, escrow and CLI crates", "P2P and TCP integration tests in repository", "HiveEscrow Solidity contract with Foundry tests"],
    limitations: "An engineering prototype and testable system model. Repository evidence does not establish production-scale agent activity, deployed autonomous operation or independent security review.",
    caseStudy: [
      { label: "PROBLEM", heading: "Delegated work needs an auditable completion boundary.", body: "A coordinator that asks another agent to perform work needs more than a message exchange: it needs task state, a receipt to inspect and a settlement rule." },
      { label: "SYSTEM", heading: "Discover → subcontract → execute → verify → settle.", body: "The workspace models agent and task records in hive-core, P2P transport in hive-p2p, receipt and verification paths in hive-escrow, a CLI surface, and a Solidity escrow contract." },
      { label: "ARCHITECTURE", heading: "Rust crates with an EVM settlement edge.", body: "Core types and registry logic are separated from network protocol code and settlement orchestration. The contract provides an onchain escrow component; it does not imply an autonomous production marketplace." },
      { label: "EVIDENCE", heading: "Integration tests exercise the boundaries.", body: "The repository includes Rust tests for core behavior, auditors, escrow, P2P and TCP integration, plus Foundry tests for HiveEscrow." },
      { label: "LIMITATIONS", heading: "Prototype evidence, not production scale.", body: "The implementation shows architectural components and tests. It does not establish real-world agent adoption, production settlement volume or an external audit." },
    ],
  },
  {
    slug: "sazume", name: "Sazume", classification: "04 / ECONOMIC RELIABILITY", category: "Programmable-money testing",
    thesis: "Your transaction succeeded. Did the money?",
    summary: "A scenario runner and adapter model for checking whether settlement intent survives retries, timeouts and duplicate execution.",
    role: "Author and maintainer", provenance: "Independent project", year: "2026", stack: ["TypeScript", "Vitest", "Solidity", "Foundry", "Arc Foundry", "viem"], accent: "mint",
    feature: "flagship",
    evidence: ["Unsafe and idempotent adapter scenarios tested offchain and against Solidity fixtures", "Arc Foundry local simulation reproduces the settlement matrix", "Arc Testnet qualification records include receipts, events and recipient balance deltas"],
    limitations: "Arc Testnet qualification uses test fixtures and test USDC; no mainnet deployment or real payment has occurred. Testnet demonstration is not an audit or production guarantee.",
    caseStudy: [
      { label: "PROBLEM", heading: "A successful receipt does not prove exactly-once economics.", body: "Retries after timeouts can repeat a settlement when a caller cannot tell whether an earlier request took effect. Sazume makes the resulting economic outcome the thing under test." },
      { label: "SYSTEM", heading: "Run the same failure scenarios across adapters.", body: "A TypeScript scenario runner drives normal, timeout-before, timeout-after and duplicate-callback cases through unsafe and fixed adapters, checking settlement counts, fulfillment and amount consistency." },
      { label: "ARCHITECTURE", heading: "One invariant model, offchain and contract-backed adapters.", body: "The core defines intent, outcomes, scenarios, traces and adapter boundaries. An Arc adapter observes receipts and settlement events; Solidity fixtures encode unsafe and idempotent settlement behavior." },
      { label: "ENGINEERING", heading: "Settle idempotently before crossing the token boundary.", body: "The fixed contract marks an intent settled before the external token transfer. EVM atomicity rolls that mark back if transfer fails, while a second call for the same intent reverts." },
      { label: "EVIDENCE", heading: "Testnet evidence records what was observed.", body: "The repository includes an Arc Testnet qualification matrix and per-run receipts, matching events and recipient balance deltas. Separate Arc Foundry local runs are clearly identified as simulation." },
      { label: "LIMITATIONS", heading: "Testnet does not establish production safety.", body: "No mainnet deployment or payment occurred. The evidence is a test harness and disposable testnet qualification, not a security audit or production guarantee." },
    ],
  },
  {
    slug: "reserverail", name: "ReserveRail", classification: "SELECTED SYSTEM / STABLECOIN RAILS", category: "USDC.e issuance and redemption on HSK Chain",
    thesis: "Reserve movement should be observable across issuance and redemption.",
    summary: "A collaborative stablecoin prototype with issuance, reserve operations and redemption paths for HSK Chain.",
    role: "Product, testing and demo contributor", provenance: "Team project; Alike001 owns the repository and is its sole merger", year: "2026", stack: ["Solidity", "Foundry", "Next.js", "TypeScript"], accent: "blue",
    feature: "selected",
    evidence: ["Contract and application tests", "Focused issue/branch/PR workflow documented", "Team attribution documented in repository"],
    limitations: "Unaudited prototype. Repository documents bridged USDC.e and privileged operator/admin roles; production readiness is not claimed.",
    caseStudy: [
      { label: "PROBLEM", heading: "Stablecoin movement needs explicit reserve and redemption operations.", body: "The prototype explores the full lifecycle around issuance, reserve accounting and redemption rather than presenting only a token contract." },
      { label: "ROLE", heading: "Product, tests and demonstration within a team.", body: "The repository identifies Webghost's work as product, testing and demo. Contract implementation and repository merge authority are attributed to other named contributors." },
      { label: "SYSTEM", heading: "An HSK Chain USDC.e-backed rail prototype.", body: "The collaborative codebase includes Solidity contracts, a web application and verification workflows for issuance and redemption paths." },
      { label: "LIMITATIONS", heading: "Unaudited and intentionally bounded.", body: "The project README warns about bridged asset risk, privileged roles and the absence of an audit. It is a prototype, not a live stablecoin service." },
    ],
  },
  {
    slug: "resyvr", name: "Resyvr", classification: "SELECTED SYSTEM / RWA", category: "Reserve-backed token workflows",
    thesis: "A bridge should prove the reserve-side event before minting or burning.",
    summary: "A team-built RWA prototype exploring cryptographic reserve proofs across Sepolia and Creditcoin CC3.",
    role: "Smart contract and application contributor", provenance: "Collaborative repository with multiple contributors", year: "2026", stack: ["Solidity", "Foundry", "TypeScript", "EVM"], accent: "gold",
    repository: "https://github.com/Webghost01-NG/resyvr", live: "https://webghost01-ng.github.io/resyvr/", feature: "selected",
    evidence: ["Foundry contracts and test suite in repository", "Testnet-oriented application and dashboard", "Commit history documents multi-contributor development"],
    limitations: "Prototype/testnet engineering. No legal claim about the underlying assets, production reserve guarantee or external audit is made here.",
    caseStudy: [
      { label: "PROBLEM", heading: "Cross-system issuance depends on a verifiable reserve event.", body: "The system explores how a source-chain proof can gate mint or burn actions in an EVM environment." },
      { label: "ROLE", heading: "Contribution in a shared codebase.", body: "The public commit history shows substantial work from multiple contributors. This portfolio describes Webghost as a contributor and does not claim sole authorship." },
      { label: "EVIDENCE", heading: "Contracts, tests and a public dashboard.", body: "The repository contains Solidity/Foundry implementation and a static dashboard endpoint. The linked interface is a demonstration surface, not proof of production issuance." },
    ],
  },
  {
    slug: "relaypay", name: "RelayPay", classification: "SELECTED SYSTEM / CROSS-CHAIN PAYMENTS", category: "XRPL payment proofs on Flare EVM",
    thesis: "A native XRP payment can drive EVM fulfillment through an attested proof.",
    summary: "A non-custodial merchant-checkout prototype combining XRPL payment evidence, Flare Data Connector verification and invoice state.",
    role: "Primary author with additional contributors", provenance: "Collaborative repository; several commit authors", year: "2026", stack: ["Solidity", "Foundry", "Flare FDC", "FTSO v2", "XRPL"], accent: "mint",
    repository: "https://github.com/Webghost01-NG/relaypay", feature: "selected",
    evidence: ["Foundry unit, fuzz and invariant suites in source", "Coston2 testnet deployment addresses documented in repository", "Receipt NFT and invoice state machine in contracts"],
    limitations: "The repository documents a testnet prototype. Audit status and live merchant adoption are not established; treat deployment evidence as testnet only.",
    caseStudy: [
      { label: "PROBLEM", heading: "XRPL payments do not call EVM contracts directly.", body: "A merchant workflow needs to bind an off-EVM payment to a quote and a fulfillment decision without taking custody of the payer's XRP." },
      { label: "SYSTEM", heading: "Invoice → native XRP → attestation → EVM fulfillment.", body: "The contracts model an expiring invoice, FTSO quote, FDC payment proof validation, replay protection and a receipt NFT/callback path." },
      { label: "ENGINEERING", heading: "State transitions are the payment boundary.", body: "Underpayment, overpayment, expiry, pre-existing payments and replay conditions are represented explicitly. The repository includes unit, fuzz and invariant tests." },
      { label: "LIMITATIONS", heading: "Testnet deployment is not production validation.", body: "The repository documents Coston2 addresses. No independent audit or production merchant usage is claimed." },
    ],
  },
  {
    slug: "kavling-ai", name: "Kavling AI", classification: "SELECTED SYSTEM / TESTNET PROTOTYPE", category: "Signed appraisal and fractional-vault workflow",
    thesis: "Make appraisal assumptions inspectable before attaching them to a testnet workflow.",
    summary: "A BNB Smart Chain Testnet prototype combining deterministic property estimates, EIP-712 appraisals and a fractional accounting vault.",
    role: "Repository author; team attribution not independently resolved", provenance: "Hackathon prototype; team composition requires confirmation", year: "2026", stack: ["Solidity", "Foundry", "Python", "FastAPI", "EIP-712", "BNB Chain Testnet"], accent: "orange",
    repository: "https://github.com/Webghost01-NG/kavling-ai", live: "https://kavling-ai.vercel.app", feature: "selected",
    evidence: ["Testnet contract addresses and transaction receipts documented", "Python tests and Foundry tests in repository", "Signed appraisal flow binds fields, signer, domain, expiry and nonce"],
    limitations: "Illustrative property, title, valuation and yield inputs. No live land/title/market integration, legal ownership, real investment or independent-user test is established; hosted signing is documented as pending.",
    caseStudy: [
      { label: "PROBLEM", heading: "Property data and ownership claims need provenance.", body: "The prototype models an appraisal-to-vault workflow while exposing that valuation inputs and title references are illustrative rather than verified records." },
      { label: "SYSTEM", heading: "Deterministic appraisal → EIP-712 signature → registry → vault.", body: "A Python service calculates estimates from curated assumptions; a registry verifies typed data and links a property vault for test-token fractional accounting." },
      { label: "EVIDENCE", heading: "Deployed BNB testnet contracts with receipts.", body: "The repository records testnet addresses, deployment transactions and smoke-test transactions alongside Foundry and Python tests." },
      { label: "LIMITATIONS", heading: "A testnet product experiment, not real estate investment.", body: "No title office or market-data integrations are present. Tokens and yield are illustrative, hosted signer provisioning remains pending, and the demo does not establish legal ownership or returns." },
    ],
  },
  {
    slug: "kumivyr", name: "Kumivyr", classification: "SELECTED SYSTEM / DEVELOPER TOOLING", category: "OpenServ BRAID graph workbench",
    thesis: "Agent graphs are easier to inspect when developers can step through their reasoning structure.",
    summary: "A TypeScript workbench with graph inspection, a static linter, step controls, evaluation views and SDK export for BRAID workflows.",
    role: "Author and maintainer", provenance: "Hackathon prototype; authored repository", year: "2026", stack: ["TypeScript", "React", "Vite", "Vitest", "OpenServ"], accent: "violet",
    repository: "https://github.com/Webghost01-NG/kumivyr", feature: "selected",
    evidence: ["AST parser and rule tests in repository", "Linter rules cover graph depth, terminal safety and shadow coverage", "SDK export generator and step debugger components"],
    limitations: "Hackathon-stage tooling. No hosted product demo or production adoption evidence is presented.",
    caseStudy: [
      { label: "PROBLEM", heading: "Reasoning graphs are hard to review as static diagrams.", body: "BRAID workflows combine branches, execution actions and terminal outcomes. A developer needs to spot ambiguous decisions, missing termination and unguarded actions before relying on the graph." },
      { label: "SYSTEM", heading: "Parse, lint, step and evaluate.", body: "Kumivyr parses Mermaid flowcharts into a graph representation, runs rule checks, supports step-through simulation and includes evaluation and SDK-export tooling." },
      { label: "ENGINEERING", heading: "Encode graph rules as testable checks.", body: "Source includes AST parsing and rules for binary decisions, graph depth, terminal safety and shadow-verification coverage. Tests exercise parser, linter rules and export generation." },
      { label: "LIMITATIONS", heading: "A hackathon workbench, not a runtime guarantee.", body: "Graph simulation and local checks do not prove a remote agent will follow a graph or that a safety rule is sufficient in production. No hosted product service is linked." },
    ],
  },
  {
    slug: "kairn", name: "Kairn", classification: "ENGINEERING LAB / AGENT SAFETY", category: "Policy firewall prototype",
    thesis: "Inspect proposed agent actions before forwarding them to a tool.",
    summary: "A small API prototype that normalizes an action, evaluates deterministic policy and returns allow, pause or reject with an audit record.",
    role: "Author and maintainer", provenance: "Independent MVP", year: "2026", stack: ["TypeScript", "Next.js", "Policy engine", "MCP integration planned"], accent: "violet",
    repository: "https://github.com/Webghost01-NG/kairn", feature: "lab",
    evidence: ["API routes for evaluation, intercept, approval and audit", "Deterministic policy test in repository"],
    limitations: "MVP explicitly describes MCP interception and persistent audit storage as roadmap items. SERV reasoning is optional and not required for local policy decisions.",
  },
  {
    slug: "zecspectra", name: "ZecSpectra", classification: "ENGINEERING LAB / ZCASH TOOLING", category: "Node observability interface",
    thesis: "Make node state and RPC behavior inspectable from one operational surface.",
    summary: "A Zcash dashboard prototype with RPC tools, node switching, telemetry views and a transaction stream interface.",
    role: "Author and maintainer", provenance: "Independent prototype", year: "2026", stack: ["TypeScript", "Next.js", "Zcash JSON-RPC"], accent: "blue",
    repository: "https://github.com/Webghost01-NG/zecspectra", live: "https://zecspectra.vercel.app", feature: "lab",
    evidence: ["API routes and RPC client source in repository", "Node-switcher and explorer components in source"],
    limitations: "Current local checkout contains uncommitted README and deleted compose/config files, excluded from this review. Only committed source is considered; no claims rely on those local changes.",
  },
  {
    slug: "zecceipt", name: "Zecceipt", classification: "COLLABORATION / ZCASH PAYMENTS", category: "Testnet payment observation",
    thesis: "Confirm a transparent testnet payment without taking custody of funds.",
    summary: "A team-built merchant request and receipt workflow that checks a matching transparent output through Zcash JSON-RPC.",
    role: "Contributor", provenance: "Team project; Alike001 repository and multi-contributor history", year: "2026", stack: ["TypeScript", "Next.js", "PostgreSQL", "Zcash JSON-RPC"], accent: "gold",
    repository: "https://github.com/Webghost01-NG/zecceipt", feature: "lab",
    evidence: ["MVP boundary and verification workflow documented", "Repository verify script includes format, lint, typecheck, tests, secret scan and build"],
    limitations: "Zcash Testnet and transparent recipient addresses only. The README explicitly excludes custody, signing, shielded payment inspection and disclosure of shielded transaction details.",
  },
  {
    slug: "strk20-workbench", name: "STRK20 Workbench", classification: "ENGINEERING LAB / PRIVACY TOOLING", category: "Starknet privacy workflow tooling",
    thesis: "Give developers a workbench for building and inspecting STRK20 flows.",
    summary: "A TypeScript workbench repository with a developer guide and hackathon-style product surface for STRK20 privacy workflows.",
    role: "Contributor", provenance: "Forked repository; contribution scope should be reviewed before making stronger authorship claims", year: "2026", stack: ["TypeScript", "Starknet", "React"], accent: "violet",
    repository: "https://github.com/Webghost01-NG/strk20-workbench", feature: "lab",
    evidence: ["Public fork and documentation available", "Fork status visible in GitHub repository metadata"],
    limitations: "Fork provenance; not presented as a sole-authored product. Source contribution boundary is not promoted beyond the public fork until separately reviewed.",
  },
  {
    slug: "chronograph", name: "ChronoGraph", classification: "ENGINEERING LAB / AGENT MEMORY", category: "Temporal graph research prototype",
    thesis: "Agent memory needs to distinguish current facts from superseded facts.",
    summary: "A graph-oriented memory experiment exploring temporal truth resolution with HydraDB.",
    role: "Author and maintainer", provenance: "Independent experiment", year: "2026", stack: ["Python", "HydraDB", "Graph data"], accent: "violet",
    repository: "https://github.com/Webghost01-NG/chronograph", live: "https://hackhydra.hydradb.com", feature: "lab",
    evidence: ["Repository source and demo link available"],
    limitations: "Research/hackathon-stage project. The homepage and case study make no claims about production memory quality or deployment ownership of the hosted HydraDB service.",
  },
  {
    slug: "executix-ai", name: "Executix AI", classification: "ENGINEERING LAB / AGENT EXECUTION", category: "Onchain execution prototype",
    thesis: "Connect an agent's proposed action to an explicit execution and observation path.",
    summary: "A full-stack execution prototype integrating KeeperHub and MCP-oriented workflow code.",
    role: "Author with repository changes from multiple work phases", provenance: "Independent prototype; local checkout is dirty and excluded from source claims", year: "2026", stack: ["TypeScript", "Next.js", "MCP", "KeeperHub"], accent: "orange",
    repository: "https://github.com/Webghost01-NG/executix-ai", feature: "lab",
    evidence: ["Committed app and integration source in repository"],
    limitations: "The local checkout contains uncommitted frontend changes; those are excluded. Do not treat README claims as deployment or production evidence.",
  },
  {
    slug: "aetherx-intent-engine", name: "AetherX Intent Engine", classification: "ENGINEERING LAB / AGENT SYSTEMS", category: "Intent execution experiment",
    thesis: "Translate an agent's intent into a bounded protocol action.",
    summary: "A small TypeScript intent-engine repository associated with an X Layer protocol experiment.",
    role: "Author and maintainer", provenance: "Independent experiment", year: "2026", stack: ["TypeScript", "X Layer", "KeeperHub"], accent: "orange",
    repository: "https://github.com/Webghost01-NG/aetherx-intent-engine", feature: "lab",
    evidence: ["Source repository available"],
    limitations: "Experiment-stage repository; no current production deployment or adoption evidence included.",
  },
  {
    slug: "erc4626-yield-vault", name: "ERC-4626 Yield Vault", classification: "ENGINEERING LAB / DEFI PRIMITIVE", category: "Tokenized vault accounting",
    thesis: "Test the share-price boundary before the first depositor can exploit it.",
    summary: "A Foundry vault implementation exploring virtual assets/shares and fee accounting against ERC-4626 edge cases.",
    role: "Author and maintainer", provenance: "Independent smart-contract project", year: "2026", stack: ["Solidity", "Foundry", "ERC-4626"], accent: "mint",
    repository: "https://github.com/Webghost01-NG/erc4626-yield-vault", feature: "lab",
    evidence: ["Foundry source and tests in repository"],
    limitations: "Learning/research contract implementation. No audit or production deployment is claimed.",
  },
  {
    slug: "eip712-multisig-payroll", name: "EIP-712 Multisig Payroll", classification: "ENGINEERING LAB / AUTHORIZATION", category: "Typed-data treasury execution",
    thesis: "Separate signature collection from the transaction that executes payroll.",
    summary: "A Solidity experiment in M-of-N typed-data approvals and relayed execution.",
    role: "Author and maintainer", provenance: "Independent smart-contract project", year: "2026", stack: ["Solidity", "Foundry", "EIP-712"], accent: "gold",
    repository: "https://github.com/Webghost01-NG/eip712-multisig-payroll", feature: "lab",
    evidence: ["Foundry source and tests in repository"],
    limitations: "Learning/research contract implementation. No audit or production deployment is claimed.",
  },
  {
    slug: "erc7943-urwa-token", name: "ERC-7943 uRWA Token", classification: "ENGINEERING LAB / TOKEN COMPLIANCE", category: "Fungible RWA interface exercise",
    thesis: "Compliance checks and token accounting are separate state boundaries.",
    summary: "A Web3Bridge Cohort XV assignment implementing the fungible ERC-7943 path with an allow-list, amount-based freezing and forced recovery.",
    role: "Author and maintainer", provenance: "Web3Bridge Cohort XV learning assignment", year: "2026", stack: ["Solidity", "Foundry", "ERC-7943", "ERC-165"], accent: "blue",
    repository: "https://github.com/Webghost01-NG/erc-7943-urwa-token", feature: "lab", evidence: ["Foundry tests cover transfer gates, freeze/recovery and fuzz cases", "Design note documents standards scope and exclusions"],
    limitations: "Scoped course implementation, not a full ERC-7943 suite, KYC/AML integration, legal compliance solution, deployed contract or audited asset token.",
  },
  {
    slug: "aetherx", name: "AetherX", classification: "ENGINEERING LAB / AGENT-DRIVEN VAULT", category: "X Layer testnet prototype",
    thesis: "Model vault allocation and risk response as explicit contract transitions.",
    summary: "An X Layer hackathon prototype pairing a small Solidity vault and mock strategies with a JavaScript credit-engine service.",
    role: "Author and maintainer", provenance: "Hackathon prototype; source claims are limited to committed code", year: "2026", stack: ["Solidity", "Foundry", "JavaScript", "X Layer"], accent: "orange",
    repository: "https://github.com/Webghost01-NG/aetherx-protocol", feature: "lab", evidence: ["AetherVault, mock strategy and Foundry tests in committed source", "Agent credit engine source in repository"],
    limitations: "The repository's contracts use mock assets/strategies and simple 1:1 shares. README describes autonomous RWA features that exceed what the reviewed contract fixtures establish; no production operation is claimed.",
  },
  {
    slug: "datahub-nexus", name: "DataHub Nexus AI", classification: "ENGINEERING LAB / METADATA GOVERNANCE", category: "AI context and PII prototype",
    thesis: "An agent's schema context should carry explicit privacy and lineage signals.",
    summary: "A small Next.js prototype with metadata exploration, PII scanning and lineage views for an AI-agent governance concept.",
    role: "Author and maintainer", provenance: "Hackathon prototype", year: "2026", stack: ["JavaScript", "Next.js", "React", "DataHub concepts"], accent: "blue",
    repository: "https://github.com/Webghost01-NG/datahub-nexus", live: "https://datahub-nexus-webghost01-ngs-projects.vercel.app", feature: "lab",
    evidence: ["Three API routes and interactive interface components in source", "Source includes query scanning and masking logic"],
    limitations: "The reviewed schema and lineage endpoints return hard-coded fixture data; a live DataHub GMS integration was not established. Marketing claims about production AI governance are not repeated.",
  },
  {
    slug: "cleanagent", name: "CleanAgent Protocol", classification: "ENGINEERING LAB / COMPLIANT EXECUTION", category: "Mandated DeFi execution prototype",
    thesis: "Execution policy can be expressed as contract checks before a vault transfer.",
    summary: "A hackathon prototype combining a mandate-controlled Solidity vault, identity and audit contracts, and a web client.",
    role: "Author and maintainer", provenance: "Hackathon prototype", year: "2026", stack: ["Solidity", "Hardhat", "React", "Ethers.js"], accent: "mint",
    repository: "https://github.com/Webghost01-NG/cleanagent", live: "https://next-app-coral-zeta.vercel.app", feature: "lab",
    evidence: ["CleanAgentVault, identity registry and audit wrapper contracts in source", "Hardhat contract tests present", "Repository README links a deployed demo"],
    limitations: "Hackathon prototype. The README's AUM, compliance and autonomous-yield claims are not independently established; no audit or production use is claimed.",
  },
  {
    slug: "promiseguard", name: "PromiseGuard", classification: "SELECTED SYSTEM / AGENT SAFETY", category: "Commitment reconciliation and verified repair",
    thesis: "An approved external change should be verified against the record it was meant to repair.",
    summary: "A multi-workspace application that gathers linked evidence, proposes a repair for review and verifies approved changes across provider systems.",
    role: "Author and maintainer", provenance: "Independent product prototype with production audit documented in repository", year: "2026", stack: ["TypeScript", "React", "Node.js", "SQLite/Turso", "OAuth", "Gemini"], accent: "violet",
    repository: "https://github.com/Webghost01-NG/promiseguard-demo", feature: "selected",
    evidence: ["Domain and account tests documented; credential-gated Turso test is separate", "Credential encryption, provider-scoped tokens and OAuth boundary documented", "Production probes and real-model assessment results recorded in repository"],
    limitations: "Provider credentials and model access are required for complete external workflows. The published demo account uses synthetic data; no public product URL is currently linked from the repository metadata.",
    caseStudy: [
      { label: "PROBLEM", heading: "A proposed repair must be reviewed, then checked where it lands.", body: "Commitments across project and communication systems can drift. A tool that edits linked records needs to show its evidence and verify the exact external outcome." },
      { label: "SYSTEM", heading: "Gather evidence → propose → approve → verify.", body: "PromiseGuard connects separate user workspaces to Gemini, GitHub, Notion and Slack, prepares a specific repair for human approval, executes only approved changes and records provider evidence." },
      { label: "ENGINEERING", heading: "Keep provider authority per user and per action.", body: "The repository documents encrypted account-scoped credentials, separate login and integration permissions, OAuth flows, rate limits, audit records and provider-specific verification." },
      { label: "EVIDENCE", heading: "Tests and live probes bound the claims.", body: "The production audit records 48 passing tests plus one credential-gated test skipped, a real model evaluation with ambiguous cases handled conservatively, and authenticated production health/provider probes." },
      { label: "LIMITATIONS", heading: "External provider actions still require scoped grants.", body: "Full workflows depend on each user's configured provider credentials and model access. The public demo is synthetic; no product URL is published in the current repository metadata." },
    ],
  },
  {
    slug: "mssn-lasu-portal", name: "MSSN LASU Portal", classification: "COLLABORATION / CAMPUS PLATFORM", category: "Student society digital portal",
    thesis: "One campus service surface can connect academic resources, membership and community workflows.",
    summary: "A team-built web portal for the Muslim Students' Society of Nigeria at Lagos State University.",
    role: "Team lead and architect; design system, CI/CD, code review and Cloudflare security", provenance: "Collaborative society platform; named team roles in repository README", year: "2026", stack: ["Next.js", "TypeScript", "Supabase", "Paystack", "Tailwind CSS"], accent: "mint",
    repository: "https://github.com/Webghost01-NG/mssn-lasu-portal", feature: "selected", evidence: ["Team roles, CI policy and product feature boundaries documented in repository"],
    limitations: "Team platform. The README's service population figure is not repeated as a verified operational metric here; individual subsystem implementation belongs to named contributors.",
  },
  {
    slug: "emby", name: "Emby", classification: "COLLABORATION / LEARNING PLATFORM", category: "Clinical study workflows",
    thesis: "Preclinical study tools benefit from focused review and spaced repetition workflows.",
    summary: "A collaborative study platform for medical students, with quiz and review features in an active shared repository.",
    role: "Contributor; individual subsystem boundaries are not enumerated in the current public README", provenance: "Team project with multiple contributors", year: "2026", stack: ["TypeScript", "Next.js", "React", "PostgreSQL ecosystem"], accent: "blue",
    repository: "https://github.com/Webghost01-NG/emby", live: "https://emby-sigma.vercel.app", feature: "selected", evidence: ["Multi-contributor commit history and application source in repository"],
    limitations: "Collaborative application; avoid attributing the entire codebase or all product features to one contributor.",
  },
  {
    slug: "merkle-nft-minter", name: "Merkle NFT Minter", classification: "ENGINEERING LAB / CRYPTOGRAPHY", category: "Allowlist verification",
    thesis: "A compact Merkle proof can gate an allowlisted mint without storing the full list.",
    summary: "A Foundry contract exercise in root-based membership proofs and mint constraints.",
    role: "Author and maintainer", provenance: "Independent smart-contract project", year: "2026", stack: ["Solidity", "Foundry", "Merkle proofs"], accent: "violet",
    repository: "https://github.com/Webghost01-NG/merkle-nft-minter", feature: "lab", evidence: ["Public Foundry source repository"], limitations: "Learning/research contract implementation. No audit or production deployment is claimed.",
  },
  {
    slug: "token-vesting-vault", name: "Token Vesting Vault", classification: "ENGINEERING LAB / TOKEN SAFETY", category: "Time-based release schedule",
    thesis: "Vesting logic is a state machine with explicit cliff and revocation boundaries.",
    summary: "A Solidity/Foundry token vesting implementation exploring release schedules and owner-controlled revocation.",
    role: "Author and maintainer", provenance: "Independent smart-contract project", year: "2026", stack: ["Solidity", "Foundry"], accent: "gold",
    repository: "https://github.com/Webghost01-NG/token-vesting-vault", feature: "lab", evidence: ["Public Foundry source repository"], limitations: "Learning/research contract implementation. No audit or production deployment is claimed.",
  },
  {
    slug: "onchain-svg-nft", name: "Onchain SVG NFT", classification: "ENGINEERING LAB / ONCHAIN MEDIA", category: "Contract-generated SVG",
    thesis: "Store and render the artwork from contract state rather than an external image host.",
    summary: "A Foundry experiment in dynamic SVG and metadata generation from EVM contract code.",
    role: "Author and maintainer", provenance: "Independent smart-contract project; public repo is a forked lineage", year: "2026", stack: ["Solidity", "Foundry", "SVG"], accent: "violet",
    repository: "https://github.com/Webghost01-NG/onchain-svg-nft-foundry", feature: "lab", evidence: ["Public Foundry source repository"], limitations: "Experimental implementation and fork lineage; no audit or production deployment is claimed.",
  },
  {
    slug: "kwala-mcp", name: "Kwala AI / MCP", classification: "COLLABORATION / MCP INFRASTRUCTURE", category: "Natural-language blockchain workflow tools",
    thesis: "Expose workflow authoring and operations through an MCP interface.",
    summary: "A collaborative MCP product for creating, validating and managing Kwalang automation workflows from AI clients.",
    role: "Hackathon build contributor; exact continuing code ownership not publicly established", provenance: "Collaboration; public profile identifies a SchullTech × Kwala build", year: "2026", stack: ["MCP", "TypeScript", "Kwalang", "Multi-chain"], accent: "violet",
    repository: "https://kwala-ai.xyz", live: "https://kwala-ai.xyz", destinationLabel: "PRODUCT", feature: "selected", evidence: ["Live product documents MCP tools and supported workflows", "Profile README identifies the hackathon build and first-place result"], limitations: "The first-party project repository and individual contribution boundary were not confirmed through the current public profile repo list; attributed as a collaboration, not sole ownership.",
  },
];

export const writing = [
  { title: "From Wallet to Smart Contract: Understanding the Web3 Frontend Integration Flow with Ethers.js", category: "WALLET INTEGRATION", date: "2026-10-05", href: "https://medium.com/@webghost1702/from-wallet-to-smart-contract-understanding-the-web3-frontend-integration-flow-with-ethers-js-9c20afde4bd2" },
  { title: "Behind the Seed: How Wallets, Private Keys, and Seed Phrases Are Actually Created", category: "KEY MANAGEMENT", date: "2026-08-05", href: "https://medium.com/@webghost1702/behind-the-seed-how-wallets-private-keys-and-seed-phrases-are-actually-created-49e1b556d41f" },
  { title: "WHAT IS MULTI-CHAIN?!", category: "INTEROPERABILITY", date: "2026-07-22", href: "https://medium.com/@webghost1702/multi-chain-and-its-examples-285162ea56cd" },
] as const;

export const archive = [
  { name: "Digital Business Card", href: "https://github.com/Webghost01-NG/digital-business-card", live: "https://card34.vercel.app", stack: "HTML / CSS / JavaScript" },
  { name: "Tesla Clone", href: "https://github.com/Webghost01-NG/tesla-clone", live: "https://tesla-clone-six-mu.vercel.app", stack: "Frontend study" },
  { name: "IP Tracker", href: "https://github.com/Webghost01-NG/IP_TRACKER", live: "https://ip-tracker-roan.vercel.app", stack: "HTML / CSS / JavaScript" },
  { name: "Multi-step Form", href: "https://github.com/Webghost01-NG/multi_form", stack: "Frontend study" },
  { name: "Movie Box", href: "https://github.com/Webghost01-NG/movie_box", stack: "JavaScript" },
] as const;

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
export const flagshipProjects = projects.filter((project) => project.feature === "flagship");
export const selectedProjects = projects.filter((project) => project.feature === "selected");
export const labProjects = projects.filter((project) => project.feature === "lab");
export const caseStudyProjects = projects.filter((project) => project.caseStudy);

export function assertProjectData() {
  const slugs = new Set<string>();
  for (const project of projects) {
    if (slugs.has(project.slug)) throw new Error(`Duplicate project slug: ${project.slug}`);
    slugs.add(project.slug);
    if (!project.name || !project.provenance || project.stack.length === 0) {
      throw new Error(`Incomplete portfolio project: ${project.slug}`);
    }
    for (const url of [project.repository, project.live, project.package].filter(Boolean)) {
      if (!url || !/^https:\/\//.test(url)) throw new Error(`Invalid external project URL: ${project.slug}`);
    }
  }
}
