import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NivyrShowcase } from "./NivyrShowcase";

describe("Nivyr featured engineering showcase", () => {
  it("explains the distinct payment observations in an accessible ordered lifecycle", () => {
    render(<NivyrShowcase />);

    expect(screen.getByRole("heading", { name: "Nivyr" })).toBeInTheDocument();
    expect(screen.getByText("A transaction being mined doesn't mean your application has observed it.")).toBeInTheDocument();

    const lifecycle = screen.getByRole("list", { name: "LIFECYCLE / OBSERVED SIGNALS" });
    expect(within(lifecycle).getAllByRole("heading", { level: 4 }).map((heading) => heading.textContent)).toEqual([
      "BROADCAST",
      "MINED",
      "INDEXED",
      "WALLET SYNC",
      "MEMO AVAILABLE",
    ]);
    expect(within(lifecycle).getByText(/fresh recipient wallet has no record/i)).toBeInTheDocument();
    expect(within(lifecycle).getByText(/Enhancement is a separate wallet operation/i)).toBeInTheDocument();
  });

  it("links to the verified source, public npm package and documentation", () => {
    render(<NivyrShowcase />);

    const destinations = [
      ["SOURCE", "https://github.com/Webghost01-NG/nivyr"],
      ["NPM", "https://www.npmjs.com/package/@webghost01/nivyr"],
      ["DOCS", "https://nivyr-docs.vercel.app"],
    ];

    for (const [name, href] of destinations) {
      const link = screen.getByRole("link", { name });
      expect(link).toHaveAttribute("href", href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
    }

    const technologies = screen.getByRole("list", { name: "Nivyr technologies" });
    expect(technologies).toHaveTextContent("TYPESCRIPT");
    expect(technologies).toHaveTextContent("VITEST");
    expect(technologies).toHaveTextContent("DOCKER");
    expect(technologies).toHaveTextContent("ZEBRA");
    expect(technologies).toHaveTextContent("ZAINO");
    expect(technologies).toHaveTextContent("ZCASH");
  });
});
