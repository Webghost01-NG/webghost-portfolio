import { HeroSection } from "@/components/home/HeroSection";
import { IdentityProof } from "@/components/home/IdentityProof";
import { NivyrShowcase } from "@/components/home/NivyrShowcase";
import { ArchiveSection, EngineeringLab, HackathonResults, HiveKernelShowcase, Journey, PhysicsStatement, SazumeShowcase, SelectedSystems, VeyrinShowcase, WritingPreview } from "@/components/home/EditorialBlocks";
import { SiteNavigation } from "@/components/layout/SiteNavigation";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteNavigation />
      <div data-page-content><main id="main-content">
        <HeroSection />
        <IdentityProof />
        <NivyrShowcase />
        <VeyrinShowcase />
        <HiveKernelShowcase />
        <SazumeShowcase />
        <SelectedSystems />
        <HackathonResults />
        <EngineeringLab />
        <PhysicsStatement />
        <Journey />
        <WritingPreview />
        <ArchiveSection />
      </main><SiteFooter /></div>
    </>
  );
}
