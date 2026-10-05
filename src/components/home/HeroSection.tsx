import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="hero" id="top">
      <Container>
        <div aria-label="Location and role" className="hero__meta">
          <span>WEBGHOST</span>
          <span>PROTOCOL ENGINEER</span>
          <span>LAGOS NG</span>
        </div>

        <div className="hero__stage">
          <div aria-hidden="true" className="hero__portrait-wash" />
          <div className="hero__portrait">
            <Image
              alt="Blue-lit hooded figure representing Webghost"
              className="hero__image"
              height={400}
              priority
              sizes="(max-width: 420px) 67vw, (max-width: 768px) 66vw, (max-width: 1100px) 38vw, 400px"
              src="/images/webghost.jpg"
              width={400}
            />
          </div>
          <span aria-hidden="true" className="hero__watermark">WG/</span>

          <h1 aria-label="BUILDING SYSTEMS THAT PROVE BEFORE THEY TRUST." className="hero__title" id="hero-title">
            <span>BUILDING</span>
            <span>SYSTEMS THAT</span>
            <span>PROVE BEFORE</span>
            <span>THEY TRUST.</span>
          </h1>

          <p className="hero__support">
            Protocol engineering, privacy infrastructure and autonomous systems.
          </p>

          <a className="hero__action" href="#work">
            <span>EXPLORE SELECTED WORK</span>
            <span aria-hidden="true">↘</span>
          </a>
          <span aria-hidden="true" className="hero__index technical-label">01 / 04</span>
        </div>
      </Container>
    </section>
  );
}
