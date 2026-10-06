import { describe, expect, it } from "vitest";
import { assertProjectData, caseStudyProjects, getProject, projects, writing } from "./portfolio";

describe("portfolio content model", () => {
  it("has unique, complete project records with valid external URLs", () => {
    expect(() => assertProjectData()).not.toThrow();
    expect(new Set(projects.map(({ slug }) => slug)).size).toBe(projects.length);
    expect(projects.every(({ repository, provenance, stack, slug }) => (repository?.startsWith("https://") || ["sazume", "reserverail"].includes(slug)) && provenance && stack.length)).toBe(true);
  });

  it("includes the recently qualified Sazume work as a flagship case study", () => {
    expect(getProject("sazume")?.feature).toBe("flagship");
    expect(getProject("sazume")?.caseStudy?.some(({ body }) => body.includes("Arc Testnet"))).toBe(true);
  });

  it("only generates case-study routes for projects with evidence-led case content", () => {
    expect(caseStudyProjects.map(({ slug }) => slug)).toEqual(expect.arrayContaining(["nivyr", "veyrin", "hivekernel", "sazume"]));
    expect(caseStudyProjects.every(({ caseStudy }) => Boolean(caseStudy?.length))).toBe(true);
  });

  it("uses real, dated Medium article destinations", () => {
    expect(writing.length).toBeGreaterThanOrEqual(3);
    expect(writing.every(({ href, date }) => href.startsWith("https://medium.com/@webghost1702/") && /^2026-\d\d-\d\d$/.test(date))).toBe(true);
  });
});
