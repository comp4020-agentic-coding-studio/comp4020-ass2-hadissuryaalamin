import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface MarkingCriterion {
  name: string;
  weight: number;
}

interface ApiNode {
  id: string;
  type: string;
  title: string;
  description: string;
  related?: string[];
  spec?: string[];
  meta?: {
    week?: number;
    weight?: number;
    slides?: string;
    marking?: { mode: string; criteria?: MarkingCriterion[] };
    [key: string]: unknown;
  };
}

interface CourseApi {
  course: { startDate: string; endDate: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

// Nodes that participate in the course graph (see `graphCollections` in
// src/site-config.ts) — policies is deliberately excluded there, so it's
// excluded here too rather than re-deriving the list by hand.
const GRAPH_TYPES = ["sessions", "assessments", "lectures", "people"];

// Deliberately a list of cooking verbs/nouns, not one exact phrase, so this
// doesn't just pin today's wording — see spec test 3 below.
const COOKING_PATTERN =
  /\b(cook(?:ing|ed|s)?|sauté(?:ing|ed)?|saute(?:ing|ed)?|fry(?:ing)?|fried|boil(?:ing|ed|s)?|roast(?:ing|ed|s)?|grill(?:ing|ed|s)?|bak(?:e|ing|ed|es)|simmer(?:ing|ed|s)?|braise(?:d|ing|s)?|sear(?:ing|ed|s)?|poach(?:ing|ed|es)?)\b/i;

describe("course promises", () => {
  it("totals assessment weights to exactly 100, and each weighted marking scheme to 100", () => {
    const assessments = api.nodes.filter((node) => node.type === "assessments");
    expect(assessments.length).toBeGreaterThan(0);

    const totalWeight = assessments.reduce((sum, node) => sum + (node.meta?.weight ?? 0), 0);
    expect(totalWeight, "assessment weights must sum to 100").toBe(100);

    for (const node of assessments) {
      const marking = node.meta?.marking;
      if (marking?.mode === "weighted" && marking.criteria) {
        const criteriaTotal = marking.criteria.reduce((sum, c) => sum + c.weight, 0);
        expect(criteriaTotal, `${node.id} marking criteria must sum to 100`).toBe(100);
      }
    }
  });

  it("teaches exactly twelve weeks, numbered 1-12 with no gaps or duplicates", () => {
    const weeks = api.nodes
      .filter((node) => node.type === "sessions")
      .map((node) => node.meta?.week)
      .sort((a, b) => (a ?? 0) - (b ?? 0));

    expect(weeks).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("never claims cooking happens in weeks 1-10", () => {
    const early = api.nodes.filter(
      (node) =>
        (node.type === "sessions" || node.type === "lectures") &&
        (node.meta?.week ?? 0) >= 1 &&
        (node.meta?.week ?? 0) <= 10,
    );
    expect(early.length).toBeGreaterThan(0);

    for (const node of early) {
      const text = [node.title, node.description, ...(node.spec ?? [])].join("\n");
      const match = text.match(COOKING_PATTERN);
      expect(match, `${node.id} claims cooking ("${match?.[0]}") before week 11`).toBeNull();
    }
  });

  it("gives every graph node at least one related edge", () => {
    const graphNodes = api.nodes.filter((node) => GRAPH_TYPES.includes(node.type));
    expect(graphNodes.length).toBeGreaterThan(0);

    for (const node of graphNodes) {
      expect(node.related?.length ?? 0, `${node.id} has no related edge`).toBeGreaterThan(0);
    }
  });

  it("links at least one lecture to a slide deck", () => {
    const lecturesWithSlides = api.nodes.filter(
      (node) => node.type === "lectures" && typeof node.meta?.slides === "string" && node.meta.slides.length > 0,
    );
    expect(lecturesWithSlides.length).toBeGreaterThan(0);
  });
});
