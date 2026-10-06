import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = ["/", "/work", "/work/nivyr", "/work/veyrin", "/work/hivekernel", "/work/sazume", "/work/reserverail", "/work/resyvr", "/work/relaypay", "/work/kavling-ai", "/work/kumivyr", "/work/promiseguard", "/work/veylott", "/work/call-your-shot", "/work/proofops", "/about", "/writing", "/contact"];

test("home leads from selected work into a real Nivyr case study", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "EXPLORE SELECTED WORK" }).click();
  await expect(page).toHaveURL(/#work$/);
  await page.getByRole("link", { name: "View Nivyr case study" }).click();
  await expect(page).toHaveURL(/\/work\/nivyr$/);
  await expect(page.getByRole("heading", { level: 1, name: "Nivyr" })).toBeVisible();
  await expect(page.getByText(/indexer has not caught up/)).toBeVisible();
  await expect(page.getByRole("link", { name: "SOURCE" })).toHaveAttribute("href", "https://github.com/Webghost01-NG/nivyr");
  await page.getByRole("link", { name: "ALL WORK" }).click();
  await expect(page).toHaveURL(/\/work$/);
  await page.getByRole("link", { name: "Read Nivyr case study" }).click();
  await expect(page).toHaveURL(/\/work\/nivyr$/);
});

test("mobile menu traps focus, closes with Escape and navigates to work", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const trigger = page.locator(".menu-toggle");
  await trigger.click();
  const menu = page.getByRole("dialog", { name: "NAVIGATE / WEBGHOST" });
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("[data-page-content]")).toHaveJSProperty("inert", true);
  await expect(menu.getByRole("link", { name: /01 WORK/ })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await menu.getByRole("link", { name: /01 WORK/ }).click();
  await expect(page).toHaveURL(/\/work$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("all production routes render at the requested responsive widths without document overflow", async ({ page }) => {
  for (const width of [375, 430, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status(), `${route} at ${width}px`).toBe(200);
      const dimensions = await page.evaluate(() => ({
        width: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
      }));
      expect(dimensions.scrollWidth, `${route} overflows at ${width}px`).toBeLessThanOrEqual(dimensions.width + 1);
      await expect(page.locator("main h1").first()).toBeVisible();
    }
  }
});

test("all rendered internal links resolve and routes have no client errors", async ({ page, request }) => {
  const clientErrors: string[] = [];
  page.on("pageerror", (error) => clientErrors.push(error.message));
  for (const route of routes) {
    await page.goto(route);
    const hrefs = await page.locator("a[href]").evaluateAll((links) => links.map((link) => (link as HTMLAnchorElement).href));
    const origin = new URL(page.url()).origin;
    const localPaths = [...new Set(hrefs.map((href) => { const url = new URL(href); return url.origin === origin ? `${url.pathname}${url.search}` : ""; }).filter(Boolean))];
    for (const path of localPaths) {
      const response = await request.get(path);
      expect(response.status(), `${route} links to ${path}`).toBe(200);
    }
  }
  expect(clientErrors).toEqual([]);
});

test("primary routes pass axe WCAG 2.2 A and AA automated checks", async ({ page }) => {
  for (const route of ["/", "/work", "/work/sazume", "/about", "/writing", "/contact"]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
    expect(results.violations, `${route}: ${results.violations.map((item) => item.id).join(", ")}`).toEqual([]);
  }
});
