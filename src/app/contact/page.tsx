import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { socialLinks } from "@/content/portfolio";

export const metadata: Metadata = { title:"Contact", description:"Contact Webghost about protocol engineering, privacy infrastructure, developer tooling and collaborations.", alternates:{canonical:"/contact"}, openGraph:{title:"Contact — Webghost",description:"Have a hard engineering problem? Let's build.",url:"/contact",images:["/opengraph-image"]},twitter:{card:"summary_large_image",title:"Contact — Webghost",description:"Have a hard engineering problem? Let's build."} };

export default function ContactPage() {
  return <PageShell><section className="route-hero"><Container><span className="technical-label">AVAILABLE FOR SELECT ENGINEERING WORK &amp; COLLABORATIONS</span><h1>HAVE A HARD<br /><span>PROBLEM?</span><br />LET&apos;S BUILD.</h1><p>For protocol engineering, transaction safety, privacy infrastructure and focused collaborations.</p></Container></section><Container><nav aria-label="Contact and social links" className="contact-links"><a href="mailto:webghost1702@gmail.com"><span>Email</span><span>webghost1702@gmail.com ↗</span></a>{socialLinks.map(({label,href})=><a href={href} key={label} rel="noreferrer" target="_blank"><span>{label}</span><span aria-hidden="true">↗</span></a>)}</nav></Container></PageShell>;
}
