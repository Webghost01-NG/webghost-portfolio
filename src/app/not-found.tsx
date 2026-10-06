import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export default function NotFound() {
  return <PageShell><section className="not-found"><span className="technical-label">404 / NO ROUTE</span><h1>NOT FOUND.</h1><Link className="text-action" href="/work">RETURN TO WORK INDEX <span aria-hidden="true">↗</span></Link></section></PageShell>;
}
