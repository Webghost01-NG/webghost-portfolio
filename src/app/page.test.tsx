import { render, screen } from "@testing-library/react";
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
    render(<HomePage />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveAccessibleName(
      "BUILDING SYSTEMS THAT PROVE BEFORE THEY TRUST.",
    );
    expect(screen.getByText("Protocol engineering, privacy infrastructure and autonomous systems.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "EXPLORE SELECTED WORK" })).toHaveAttribute("href", "#work");
    expect(screen.getByRole("heading", { name: /Abdurrahman\s*Opeyemi Adesanya/ })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Blue-lit hooded figure representing Webghost" })).toHaveAttribute(
      "src",
      "/images/webghost.jpg",
    );
  });
});
