import { Container } from "@/components/layout/Container";
import { nivyr } from "@/content/nivyr";
import { NivyrLifecycle } from "./NivyrLifecycle";

export function NivyrShowcase() {
  return (
    <section aria-labelledby="nivyr-title" className="nivyr" id="work">
      <Container>
        <div className="nivyr__eyebrow">
          <span className="technical-label">{nivyr.classification}</span>
          <span className="technical-label">{nivyr.category}</span>
        </div>

        <div className="nivyr__intro editorial-grid">
          <div className="nivyr__identity">
            <h2 id="nivyr-title">{nivyr.name}</h2>
            <span className="technical-label">LOCAL REGTEST / TYPESCRIPT API</span>
          </div>
          <div className="nivyr__summary">
            <p className="nivyr__thesis">{nivyr.thesis}</p>
            <p className="nivyr__description">{nivyr.description}</p>
          </div>
        </div>

        <div className="nivyr__distinction">
          <p aria-label="Broadcast is not the same as mined; mined is not the same as indexed; indexed is not the same as wallet-observed.">
            {nivyr.distinction.map((state, index) => (
              <span className="nivyr__distinction-part" key={state}>
                {index > 0 && <span aria-hidden="true" className="nivyr__not-equal">≠</span>}
                <span>{state}</span>
              </span>
            ))}
          </p>
          <span className="technical-label">OBSERVATION ≠ SETTLEMENT</span>
        </div>

        <NivyrLifecycle />

        <div className="nivyr__evidence editorial-grid">
          <div className="nivyr__release">
            <span className="technical-label">PUBLIC PACKAGE / LATEST VERIFIED</span>
            <p><strong>{nivyr.package}</strong><span>@{nivyr.version}</span></p>
            <span className="nivyr__environment">{nivyr.verifiedEnvironment}</span>
          </div>
          <ul aria-label="Nivyr technologies" className="nivyr__technologies">
            {nivyr.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </div>

        <div className="nivyr__detail-row">
          <p className="nivyr__limitation">
            A local regtest harness—not a production wallet or proof of an independent merchant integration. End-to-end package verification is limited to Fedora Linux 44 x86_64.
          </p>
          <nav aria-label="Nivyr project links" className="nivyr__links">
            <a href={nivyr.links.source} rel="noreferrer" target="_blank">
              SOURCE <span aria-hidden="true">↗</span>
            </a>
            <a href={nivyr.links.npm} rel="noreferrer" target="_blank">
              NPM <span aria-hidden="true">↗</span>
            </a>
            <a href={nivyr.links.docs} rel="noreferrer" target="_blank">
              DOCS <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>

        <div aria-hidden="true" className="nivyr__next">
          <span className="technical-label">NEXT / TRANSACTION SAFETY</span>
          <span className="nivyr__next-line" />
          <span className="nivyr__next-arrow">↓</span>
        </div>
      </Container>
    </section>
  );
}
