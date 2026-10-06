import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import HomePage from "./page";

vi.mock("next/image", () => ({
  default: ({ alt, src, width, height, className }: {
    alt: string;
    src: string;
    width: number;
    height: number;
    className?: string;
  }) => <img alt={alt} className={className} height={height} src={src} width={width} />,
}));
vi.mock("next/link", () => ({
  default: ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props}>{children}</a>,
}));

describe("home hero and identity", () => {
  it("presents the approved message and a work anchor", () => {
    const { container } = render(<HomePage />);
    expect(container.querySelector("#hero-title")?.getAttribute("aria-label")).toBe("BUILDING SYSTEMS THAT PROVE BEFORE THEY TRUST.");
    expect(container.querySelector(".hero__support")?.textContent).toContain("Protocol engineering, privacy infrastructure and autonomous systems.");
    expect(container.querySelector<HTMLAnchorElement>(".hero__action")?.getAttribute("href")).toBe("#work");
    expect(container.querySelector("#identity-title")?.textContent?.replace(/\s+/g, "")).toContain("AbdurrahmanOpeyemiAdesanya");
    const image = container.querySelector<HTMLImageElement>(".hero__image");
    expect(image?.alt).toBe("Blue-lit hooded illustration used as a personal visual motif");
    expect(image?.getAttribute("src")).toBe("/images/webghost.jpg");
  });
});
