import type { ReactNode } from "react";
import { SiteNavigation } from "@/components/layout/SiteNavigation";
import { SiteFooter } from "@/components/layout/SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return <><SiteNavigation /><div data-page-content><main className="route-main" id="main-content">{children}</main><SiteFooter /></div></>;
}
