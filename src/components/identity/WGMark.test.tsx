import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WGMark } from "./WGMark";

describe("WGMark", () => {
  it("exposes an accessible name when used as an identity mark", () => {
    render(<WGMark />);

    expect(screen.getByRole("img", { name: "Webghost mark" })).toBeInTheDocument();
  });

  it("is hidden from assistive technology when decorative", () => {
    const { container } = render(<WGMark decorative />);

    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });
});
