import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/layout/Container";
import { caseStudyProjects, flagshipProjects, labProjects, selectedProjects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Protocol, privacy, developer infrastructure and autonomous systems built by Abdurrahman Adesanya.",
  alternates: { canonical: "/work" },
  openGraph: { title: "Selected Work — Webghost", description: "Protocol, privacy, developer infrastructure and autonomous systems.", url: "/work", type: "website" },
  twitter: { card: "summary_large_image", title: "Selected Work — Webghost", description: "Protocol, privacy, developer infrastructure and autonomous systems." },
};

function CatalogueGroup({ title, items }: { title: string; items: typeof flagshipProjects }) {
  return <section className="catalogue-group"><h2>{title}</h2>{items.map((project,index) => <article className="catalogue-project" id={project.slug} key={project.slug}>
    <span className="catalogue-project__index">{String(index+1).padStart(2,"0")}</span><div><h3>{project.name}</h3><p>{project.thesis}</p></div><span className="catalogue-project__meta technical-label">{project.category} · {project.provenance} · {project.stack.slice(0,3).join(" / ")}</span>
    {project.caseStudy ? <Link href={`/work/${project.slug}`} aria-label={`Read ${project.name} case study`}>CASE STUDY ↗</Link> : project.repository && <a href={project.repository} rel="noreferrer" target="_blank" aria-label={`Open ${project.name} source`}>SOURCE ↗</a>}
  </article>)}</section>;
}

export default function WorkPage() {
  const featured = caseStudyProjects.filter((project) => project.feature === "flagship");
  const selected = caseStudyProjects.filter((project) => project.feature === "selected");
  return <PageShell><section className="route-hero"><Container><span className="technical-label">WEBGHOST / WORK INDEX</span><h1>SYSTEMS WITH<br /><span>DEFINED BOUNDARIES.</span></h1><p>Flagship protocol work first. Collaborative products and smaller engineering experiments follow with their role and evidence in view.</p></Container></section><Container>
    <CatalogueGroup title="FLAGSHIP ENGINEERING" items={featured} />
    <CatalogueGroup title="SELECTED SYSTEMS" items={selected} />
    <CatalogueGroup title="ENGINEERING LAB" items={labProjects} />
    <CatalogueGroup title="OTHER COLLABORATIONS & EXPERIMENTS" items={selectedProjects.filter((project) => !caseStudyProjects.includes(project))} />
  </Container></PageShell>;
}
