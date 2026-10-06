import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "About Abdurrahman Adesanya",
  description: "Physics finalist at Lagos State University building protocol, privacy and developer-infrastructure systems.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About — Webghost", description: "Physics finalist turned protocol engineer.", url: "/about", type: "profile", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title: "About — Webghost", description: "Physics finalist turned protocol engineer.", images: ["/opengraph-image"] },
};

const credentials = [
  ["PHYSICS / LASU", "Finalist in Physics at Lagos State University; a first-principles lens for systems, constraints and failure."],
  ["WEB3BRIDGE AFRICA", "Web2 Advanced alumni and Web3 Solidity track participant, as represented in the public profile and cohort work."],
  ["EDUBRIDGE CONSULTANT", "Frontend Developer Intern; the profile records an Overall Best Performer award and software-engineering track win."],
];

export default function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://webghost-portfolio.vercel.app";
  const person = { "@context":"https://schema.org", "@type":"Person", name:"Abdurrahman Opeyemi Adesanya", alternateName:"Webghost", jobTitle:"Protocol Engineer", url:`${siteUrl}/about`, sameAs:["https://github.com/Webghost01-NG","https://x.com/web_ghost01","https://www.linkedin.com/in/abdurrahman-adesanya-53aaa823a/","https://medium.com/@webghost1702"] };
  return <PageShell><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g,"\\u003c") }} /><section className="route-hero"><Container><span className="technical-label">AB/01 · ABOUT</span><h1>FIRST PRINCIPLES.<br /><span>REAL SYSTEMS.</span></h1><p>Abdurrahman Opeyemi Adesanya — Webghost. Protocol engineer working across smart contracts, Zcash infrastructure, developer tools and autonomous systems.</p></Container></section><Container>
    <section aria-labelledby="about-profile-heading" className="about-profile"><Image alt="Hooded illustration used as a personal visual motif" height={400} src="/images/webghost.jpg" width={400} priority /><div><span className="technical-label">PHYSICS × ENGINEERING</span><h2 id="about-profile-heading">A system is a set of states and rules.</h2><p>I am a Physics finalist at Lagos State University. Studying physical systems shaped how I approach software: define the state, understand the constraints, identify the invariants, then test the failure paths.</p><p>I started learning to code young, stepped away, and returned as a teenager. Work since then has moved from frontend engineering toward Solidity, Foundry, Zcash payment and transaction-safety infrastructure, Rust systems, and tools for AI agents.</p><p>I prefer a repository, test, receipt or explicit limitation to a claim that cannot be checked.</p></div></section>
    <section aria-labelledby="credentials-title" className="section-space"><div className="section-heading"><span className="technical-label">BACKGROUND / CREDENTIALS</span><h2 id="credentials-title">WHERE THE<br /><span>METHOD CAME FROM.</span></h2></div><div className="about-credentials">{credentials.map(([title,description])=><article key={title}><span className="technical-label">VERIFIED PROFILE DETAIL</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section aria-labelledby="about-focus" className="journey"><div className="section-heading"><span className="technical-label">CURRENT PRACTICE</span><h2 id="about-focus">WHAT I BUILD</h2></div><ol><li><span className="technical-label">01</span><h3>PROTOCOLS</h3><p>Smart-contract state machines, test infrastructure and transaction-safety boundaries.</p></li><li><span className="technical-label">02</span><h3>PRIVACY</h3><p>Zcash-facing tooling that treats intent, observation and wallet boundaries explicitly.</p></li><li><span className="technical-label">03</span><h3>AGENT SYSTEMS</h3><p>Developer infrastructure and autonomous-system prototypes with inspectable execution paths.</p></li></ol></section>
  </Container></PageShell>;
}
