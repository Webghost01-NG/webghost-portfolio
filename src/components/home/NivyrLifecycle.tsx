import { nivyr } from "@/content/nivyr";

export function NivyrLifecycle() {
  return (
    <div className="nivyr-path">
      <div className="nivyr-path__heading">
        <h3 id="nivyr-path-title">LIFECYCLE / OBSERVED SIGNALS</h3>
        <span className="technical-label">01—05 / LOCAL REGTEST</span>
      </div>
      <ol aria-labelledby="nivyr-path-title" className="nivyr-path__steps">
        {nivyr.stages.map((stage) => (
          <li className="nivyr-step" key={stage.id}>
            <span aria-hidden="true" className="nivyr-step__marker" />
            <span className="nivyr-step__id technical-label">{stage.id}</span>
            <h4>{stage.name}</h4>
            <p className="nivyr-step__observer">{stage.observer}</p>
            <p className="nivyr-step__detail">{stage.detail}</p>
          </li>
        ))}
      </ol>
      <p className="nivyr-path__equivalent">
        Chain inclusion, indexer height, wallet detection and memo availability are separate observations—not interchangeable proof.
      </p>
    </div>
  );
}
