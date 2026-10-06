import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { caseStudyProjects, getProject } from "@/content/portfolio";

export function generateStaticParams() { return caseStudyProjects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) return { title: "Project not found" };
  const title = `${project.name} — ${project.category} | Webghost`;
  const description = project.summary;
  return {
    title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title, description, url: `/work/${project.slug}`, type: "article", images: [`/work/${project.slug}/opengraph-image`] },
    twitter: { card: "summary_large_image", title, description, images: [`/work/${project.slug}/opengraph-image`] },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) notFound();
  return <PageShell>
    <header className="case-study-hero" style={{ "--case-accent": `var(--accent-${project.accent})` } as React.CSSProperties}><Container><span className="technical-label">{project.classification} / CASE STUDY</span><h1>{project.name}</h1><p>{project.summary}</p><div className="case-study-meta"><span>{project.category}</span><span>{project.role}</span><span>{project.provenance}</span><span>{project.year}</span><span>{project.stack.join(" · ")}</span></div></Container></header>
    <Container><article className="case-study-body">{project.caseStudy.map((section) => <section className="case-study-block" key={section.label}><span className="technical-label">{section.label}</span><div><h2>{section.heading}</h2><p>{section.body}</p>{section.details && <ul>{section.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}</div></section>)}<nav aria-label={`${project.name} project links`} className="case-study-actions">{project.repository && <a className="text-action" href={project.repository} rel="noreferrer" target="_blank">SOURCE <span aria-hidden="true">↗</span></a>}{project.live && <a className="text-action" href={project.live} rel="noreferrer" target="_blank">LIVE / DOCS <span aria-hidden="true">↗</span></a>}{project.package && <a className="text-action" href={project.package} rel="noreferrer" target="_blank">PACKAGE <span aria-hidden="true">↗</span></a>}<Link className="text-action" href="/work">ALL WORK <span aria-hidden="true">↗</span></Link></nav></article></Container>
  </PageShell>;
}
