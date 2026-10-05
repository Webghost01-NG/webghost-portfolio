import { HeroSection } from "@/components/home/HeroSection";
import { IdentityProof } from "@/components/home/IdentityProof";
import { SiteNavigation } from "@/components/layout/SiteNavigation";

export default function HomePage() {
  return (
    <>
      <SiteNavigation />
      <main data-page-content id="main-content">
        <HeroSection />
        <IdentityProof />
        <div aria-hidden="true" className="work-boundary" id="work" />
      </main>
    </>
  );
}
