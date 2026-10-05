import { HeroSection } from "@/components/home/HeroSection";
import { IdentityProof } from "@/components/home/IdentityProof";
import { NivyrShowcase } from "@/components/home/NivyrShowcase";
import { SiteNavigation } from "@/components/layout/SiteNavigation";

export default function HomePage() {
  return (
    <>
      <SiteNavigation />
      <main data-page-content id="main-content">
        <HeroSection />
        <IdentityProof />
        <NivyrShowcase />
      </main>
    </>
  );
}
