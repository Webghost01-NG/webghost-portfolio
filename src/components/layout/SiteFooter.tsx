import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { socialLinks } from "@/content/portfolio";
import { WGMark } from "@/components/identity/WGMark";

export function SiteFooter() {
  return <footer className="site-footer">
    <Container>
      <div className="footer-callout">
        <p className="technical-label">AVAILABLE FOR SELECT ENGINEERING WORK &amp; COLLABORATIONS</p>
        <h2>HAVE A HARD<br />PROBLEM?<br /><span>LET&apos;S BUILD.</span></h2>
        <a className="text-action" href="mailto:webghost1702@gmail.com">EMAIL ME <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-bottom">
        <Link className="footer-mark" href="/" aria-label="Webghost home"><WGMark decorative size={32} /><span>WEBGHOST</span></Link>
        <nav aria-label="Social links" className="footer-socials">{socialLinks.map((social) => <a href={social.href} key={social.label} rel="noreferrer" target="_blank">{social.label}<span aria-hidden="true">↗</span></a>)}</nav>
        <span className="footer-ghost" aria-hidden="true">WEBGHOST</span>
        <span className="technical-label footer-location">LAGOS, NIGERIA · 2026</span>
      </div>
    </Container>
  </footer>;
}
