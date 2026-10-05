import { Container } from "@/components/layout/Container";

export function IdentityProof() {
  return (
    <section aria-labelledby="identity-title" className="identity" id="about">
      <Container>
        <div className="identity__topline">
          <span className="technical-label">AB/01</span>
          <span aria-hidden="true" className="identity__rule" />
          <span className="technical-label">ENGINEER / LAGOS, NIGERIA</span>
        </div>
        <div className="identity__body editorial-grid">
          <div className="identity__intro">
            <h2 id="identity-title">Abdurrahman<br />Opeyemi Adesanya</h2>
            <p>Physics finalist turned protocol engineer.</p>
          </div>
          <ul aria-label="Verified background" className="identity__proof">
            <li><span>01</span><strong>WEB3BRIDGE ALUMNI</strong></li>
            <li><span>02</span><strong>PHYSICS @ LASU</strong></li>
            <li><span>03</span><strong>OPEN-SOURCE PROTOCOL WORK</strong></li>
          </ul>
        </div>
        <div aria-hidden="true" className="identity__next">
          <span className="technical-label">NEXT / SELECTED ENGINEERING</span>
          <span className="identity__next-arrow">↓</span>
        </div>
      </Container>
    </section>
  );
}
