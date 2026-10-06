import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { archive, labProjects, projects, selectedProjects, writing, type Project } from "@/content/portfolio";

export function VeyrinShowcase() {
  const project = projects.find(({ slug }) => slug === "veyrin")!;
  const steps = ["PCZT", "DECODE INTENT", "FINGERPRINT", "COMPARE", "MUTATION CHECK"];
  return <section aria-labelledby="veyrin-title" className="veyrin showcase-section" id="veyrin">
    <Container>
      <div className="project-index"><span className="technical-label">{project.classification}</span><span className="technical-label">ZCASH / READ-ONLY INSPECTION</span></div>
      <div className="veyrin__heading"><div><p className="technical-label">A TRANSACTION SAFETY BOUNDARY</p><h2 id="veyrin-title">SEE BEFORE<br /><span>YOU SIGN.</span></h2></div><p>{project.summary}</p></div>
      <div className="veyrin-flow" aria-label="PCZT intent review: decode the envelope, fingerprint it, compare expected and returned intent, then expose mutations for human review.">
        <div className="veyrin-flow__source"><span className="technical-label">INPUT / CREATOR-RECORDED INTENT</span><strong>PCZT</strong><span className="technical-label">NO SIGNING AUTHORITY</span></div>
        <ol>{steps.slice(1).map((step, index) => <li key={step}><span className="technical-label">0{index + 1}</span><strong>{step}</strong><i aria-hidden="true">{index < 3 ? "↓" : "⇄"}</i></li>)}</ol>
        <div className="veyrin-flow__outcomes"><span>CONTINUE REVIEW</span><span>FLAG CHANGES</span></div>
      </div>
      <div className="showcase-end"><p>Veyrin decodes and compares intent. It does not sign transactions, provide a wallet or claim final consensus verification.</p><Link className="text-action" href="/work/veyrin">VIEW CASE STUDY <span aria-hidden="true">↗</span></Link></div>
    </Container>
  </section>;
}

export function HiveKernelShowcase() {
  const project = projects.find(({ slug }) => slug === "hivekernel")!;
  const steps = ["DISCOVER", "SUBCONTRACT", "EXECUTE", "VERIFY", "SETTLE"];
  return <section aria-labelledby="hive-title" className="hive showcase-section" id="hivekernel">
    <Container>
      <div className="project-index"><span className="technical-label">{project.classification}</span><span className="technical-label">RUST WORKSPACE / EVM ESCROW EDGE</span></div>
      <div className="hive__heading"><p className="hive__editorial">MACHINES<br /><span>HIRING</span><br />MACHINES.</p><div><span className="technical-label">P2P AGENT COORDINATION</span><h2 id="hive-title">HIVEKERNEL</h2><p>{project.summary}</p></div></div>
      <div className="hive-map" aria-label="Agent work path: discover a peer, subcontract a task, execute the task, verify its receipt, and settle through escrow.">
        {steps.map((step, index) => <div className="hive-map__node" key={step}><span className="technical-label">0{index + 1}</span><strong>{step}</strong><i aria-hidden="true">{index < steps.length - 1 ? "→" : ""}</i></div>)}
      </div>
      <div className="showcase-end"><p>Core types, peer-to-peer transport, receipt verification and escrow are split across Rust crates, with Solidity and Foundry at the settlement edge.</p><Link className="text-action" href="/work/hivekernel">VIEW CASE STUDY <span aria-hidden="true">↗</span></Link></div>
    </Container>
  </section>;
}

export function SazumeShowcase() {
  const project = projects.find(({ slug }) => slug === "sazume")!;
  const rows = [
    ["NORMAL", "PASS", "PASS"],
    ["TIMEOUT BEFORE", "PASS", "PASS"],
    ["TIMEOUT AFTER", "FAIL", "PASS"],
    ["DUPLICATE CALLBACK", "FAIL", "PASS"],
  ];
  return <section aria-labelledby="sazume-title" className="sazume showcase-section" id="sazume">
    <Container>
      <div className="project-index"><span className="technical-label">{project.classification}</span><span className="technical-label">ARC TESTNET QUALIFICATION / TEST FIXTURES</span></div>
      <div className="sazume__heading"><div><span className="technical-label">SETTLEMENT CORRECTNESS UNDER RETRY</span><h2 id="sazume-title">SAZUME</h2></div><p className="sazume__thesis">YOUR TRANSACTION<br /><span>SUCCEEDED.</span><br />DID THE MONEY?</p></div>
      <p className="sazume__summary">Sazume drives the same failure scenarios through unsafe and idempotent adapters. The result is measured in settlement outcomes, not just a successful call.</p>
      <div className="sazume-matrix-wrap"><table className="sazume-matrix"><caption>Arc Testnet qualification · fixed and unsafe test fixtures · 2026</caption><thead><tr><th scope="col">SCENARIO</th><th scope="col">UNSAFE</th><th scope="col">IDEMPOTENT</th></tr></thead><tbody>{rows.map(([scenario, unsafe, fixed]) => <tr key={scenario}><th scope="row">{scenario}</th><td className={unsafe === "FAIL" ? "is-failure" : "is-pass"}>{unsafe}</td><td className="is-pass">{fixed}</td></tr>)}</tbody></table></div>
      <div className="sazume-footnote"><span className="technical-label">EVIDENCE / ARC TESTNET</span><p>Qualification records include receipts, `IntentSettled` events and recipient balance deltas. Arc Foundry local runs are separate simulations. No mainnet deployment or payment has occurred.</p><Link className="text-action" href="/work/sazume">VIEW CASE STUDY <span aria-hidden="true">↗</span></Link></div>
    </Container>
  </section>;
}

export function SelectedSystems() {
  const order = ["reserverail", "resyvr", "relaypay", "kavling-ai", "kumivyr", "kwala-mcp"];
  const items: Project[] = order.flatMap((slug) => { const project = selectedProjects.find((item) => item.slug === slug); return project ? [project] : []; });
  return <section aria-labelledby="selected-title" className="selected section-space" id="selected-systems"><Container>
    <div className="section-heading"><span className="technical-label">05 / COOPERATIVE SYSTEMS</span><h2 id="selected-title">SELECTED<br /><span>SYSTEMS.</span></h2><p>Different teams, different trust boundaries. Roles and project limits are stated alongside the work.</p></div>
    <div className="selected-list">{items.map((project, index) => <article className={`selected-item selected-item--${index + 1}`} data-accent={project.accent} key={project.slug}>
      <div className="selected-item__number technical-label">0{index + 1}</div><div className="selected-item__main"><span className="technical-label">{project.category}</span><h3>{project.name}</h3><p>{project.thesis}</p></div><div className="selected-item__provenance"><span className="technical-label">{project.provenance}</span><p>{project.role}</p><span className="technical-label">{project.stack.slice(0, 4).join(" / ")}</span></div><div className="selected-item__actions">{project.caseStudy ? <Link href={`/work/${project.slug}`} aria-label={`Read ${project.name} case study`}>CASE STUDY <span aria-hidden="true">↗</span></Link> : <Link href={`/work#${project.slug}`} aria-label={`Find ${project.name} in work index`}>WORK INDEX <span aria-hidden="true">↗</span></Link>}<a href={project.repository} rel="noreferrer" target="_blank">{project.destinationLabel ?? "SOURCE"} <span aria-hidden="true">↗</span></a></div>
    </article>)}</div>
    <Link className="text-action" href="/work">OPEN FULL WORK INDEX <span aria-hidden="true">↗</span></Link>
  </Container></section>;
}

export function HackathonResults() {
  return <section aria-labelledby="wins-title" className="wins"><Container><div className="wins__title"><span className="technical-label">SELECTED COMPETITIVE BUILDS</span><h2 id="wins-title">BUILT<br /><span>UNDER PRESSURE.</span></h2></div><ul>
    <li><span className="technical-label">EAG × HSK CHAIN</span><strong>ReserveRail · 3rd place, stablecoin track</strong><span>Organizer account named the project and team; Alike001 leads the repository.</span></li>
    <li><span className="technical-label">SCHULLTECH × KWALA</span><strong>Kwala MCP build</strong><span>Winning result is reported in the profile README; organizer result not independently located.</span></li>
    <li><span className="technical-label">ZCASH MINI BUILD</span><strong>Zecceipt</strong><span>Team hackathon project; award result not independently verified.</span></li>
  </ul><p className="technical-label">Organizer-published result is distinguished from profile-reported results and participation.</p></Container></section>;
}

export function EngineeringLab() {
  return <section aria-labelledby="lab-title" className="lab section-space" id="engineering-lab"><Container>
    <div className="lab__header"><span className="technical-label">06 / ~/ENGINEERING-LAB</span><h2 id="lab-title">RESEARCH<br />DIRECTORY</h2><p>Smaller protocol, tooling and contract explorations. Context stays visible without hover.</p></div>
    <div className="lab__rows">{labProjects.map((project, index) => <article className="lab-row" key={project.slug}><span className="lab-row__index technical-label">{String(index + 1).padStart(2, "0")}</span><div><h3>{project.name}</h3><p>{project.summary}</p></div><span className="technical-label">{project.stack.slice(0, 2).join(" / ")}</span><a href={project.repository} rel="noreferrer" target="_blank" aria-label={`Open ${project.name} source repository`}>↗</a></article>)}</div>
  </Container></section>;
}

export function PhysicsStatement() {
  return <section aria-labelledby="physics-title" className="physics section-space" id="physics"><Container><span className="technical-label">FIRST PRINCIPLES / 07</span><div className="physics__grid"><h2 id="physics-title">BEFORE CODE,<br />THERE ARE<br /><span>INVARIANTS.</span></h2><div><p className="physics__lead">A system can change state without breaking the rules that make it safe.</p><p>I am a Physics finalist at Lagos State University. Physics trained me to reason about systems through states, constraints, invariants and failure conditions. Protocol engineering asks for the same discipline: state what must remain true, then test what happens when the expected path fails.</p><Link className="text-action" href="/about">MORE ABOUT MY JOURNEY <span aria-hidden="true">↗</span></Link></div></div></Container></section>;
}

export function Journey() {
  const entries = [
    ["2023—24", "FRONTEND ENGINEERING", "EduBridge Consultant internship; awarded Overall Best Performer and won the software engineering track competition, according to the profile README."],
    ["2026", "WEB3BRIDGE AFRICA", "Web2 Advanced alumni; Solidity track and Web3Bridge Cohort XV are identified in the profile and cohort repository."],
    ["NOW", "PROTOCOLS / PRIVACY / AGENTS", "Building in Solidity, TypeScript and Rust across Zcash, EVM protocols, developer tooling and agent systems."],
  ];
  return <section aria-labelledby="journey-title" className="journey"><Container><div className="section-heading"><span className="technical-label">08 / ENGINEERING JOURNEY</span><h2 id="journey-title">A PATH THROUGH<br /><span>SYSTEMS.</span></h2></div><ol>{entries.map(([year, title, description]) => <li key={year + title}><span className="technical-label">{year}</span><h3>{title}</h3><p>{description}</p></li>)}</ol></Container></section>;
}

export function WritingPreview() {
  return <section aria-labelledby="writing-title" className="writing-preview" id="writing"><Container><div className="section-heading"><span className="technical-label">09 / FIELD NOTES</span><h2 id="writing-title">NOTES FROM<br /><span>THE MACHINE.</span></h2></div><div className="writing-rows">{writing.slice(0, 3).map((article, index) => <a className="writing-row" href={article.href} key={article.href} rel="noreferrer" target="_blank"><span className="technical-label">0{index + 1} / {article.category}</span><strong>{article.title}</strong><time dateTime={article.date}>{article.date}</time><span aria-hidden="true">↗</span></a>)}</div><Link className="text-action" href="/writing">ALL WRITING <span aria-hidden="true">↗</span></Link></Container></section>;
}

export function ArchiveSection() {
  return <section aria-labelledby="archive-title" className="archive"><Container><div><span className="technical-label">~/ARCHIVE/EARLY-BUILDS</span><h2 id="archive-title">BEFORE<br />PROTOCOLS,<br /><span>THERE WERE PIXELS.</span></h2></div><ul>{archive.map((project) => <li key={project.name}><a href={project.href}>{project.name}</a><span className="technical-label">{project.stack}</span>{"live" in project && <a href={project.live} rel="noreferrer" target="_blank" aria-label={`Open ${project.name} live demo`}>↗</a>}</li>)}</ul></Container></section>;
}
