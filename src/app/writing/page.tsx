import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { writing } from "@/content/portfolio";

export const metadata: Metadata = { title:"Writing", description:"Technical notes by Abdurrahman Adesanya on wallet integration, key management and blockchain systems.", alternates:{canonical:"/writing"}, openGraph:{title:"Writing — Webghost",description:"Technical notes on wallets and blockchain systems.",url:"/writing",images:["/opengraph-image"]}, twitter:{card:"summary_large_image",title:"Writing — Webghost",description:"Technical notes on wallets and blockchain systems."} };

export default function WritingPage() {
  return <PageShell><section className="route-hero"><Container><span className="technical-label">WEBGHOST / WRITING INDEX</span><h1>NOTES FROM<br /><span>THE MACHINE.</span></h1><p>Technical writing and learning notes. Titles and publication dates are drawn from the public Medium feed.</p></Container></section><Container><section aria-label="Published articles" className="writing-rows writing-page">{writing.map((article,index)=><a className="writing-row" href={article.href} key={article.href} rel="noreferrer" target="_blank"><span className="technical-label">{String(index+1).padStart(2,"0")} / {article.category}</span><strong>{article.title}</strong><time dateTime={article.date}>{article.date}</time><span aria-hidden="true">↗</span></a>)}</section></Container></PageShell>;
}
