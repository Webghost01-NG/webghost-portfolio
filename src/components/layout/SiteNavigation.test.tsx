import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SiteNavigation } from "./SiteNavigation";

vi.mock("next/link", () => ({
  default: ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props}>{children}</a>,
}));

describe("SiteNavigation", () => {
  beforeEach(() => {
    document.body.innerHTML = "<div id='root'></div><main data-page-content></main>";
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
      callback(0);
      return 1;
    });
  });

  it("renders the desktop destinations and GitHub", () => {
    render(<SiteNavigation />);

    expect(screen.getByRole("navigation", { name: "Main navigation" })).toHaveTextContent("WORK");
    expect(screen.getByRole("navigation", { name: "Main navigation" })).toHaveTextContent("ABOUT");
    expect(screen.getByRole("navigation", { name: "Main navigation" })).toHaveTextContent("WRITING");
    expect(screen.getByRole("link", { name: /GITHUB/ })).toHaveAttribute(
      "href",
      "https://github.com/Webghost01-NG",
    );
    expect(screen.getByRole("navigation", { name: "Main navigation" }).querySelector('a[href="https://medium.com/@webghost1702"]')).toBeInTheDocument();
  });

  it("opens an accessible full-screen menu, traps focus and closes on Escape", async () => {
    render(<SiteNavigation />);
    const trigger = screen.getByRole("button", { name: "Open navigation menu" });

    fireEvent.click(trigger);
    const dialog = screen.getByRole("dialog", { name: "NAVIGATE / WEBGHOST" });
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(document.querySelector("[data-page-content]")).toHaveProperty("inert", true);
    await waitFor(() => expect(dialog.querySelector("a")).toHaveFocus());

    const lastLink = dialog.querySelectorAll("a").item(3);
    const closeButton = screen.getByRole("button", { name: "CLOSE" });
    closeButton.focus();
    fireEvent.keyDown(dialog, { key: "Tab", shiftKey: true });
    expect(lastLink).toHaveFocus();
    fireEvent.keyDown(dialog, { key: "Tab" });
    expect(closeButton).toHaveFocus();

    fireEvent.keyDown(dialog, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await waitFor(() => expect(trigger).toHaveFocus());
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(document.querySelector("[data-page-content]")).toHaveProperty("inert", false);

    fireEvent.click(trigger);
    fireEvent.click(screen.getByRole("dialog").querySelector('a[href="#about"]')!);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.querySelector("[data-page-content]")).toHaveProperty("inert", false);
  });
});
