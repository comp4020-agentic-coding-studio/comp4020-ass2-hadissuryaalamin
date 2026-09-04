import { existsSync, readFileSync } from "node:fs";
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
    tutorial?: boolean;
    marking?: { mode: string; criteria?: MarkingCriterion[] };
    [key: string]: unknown;
  };
}

interface CourseApi {
  course: { startDate: string; endDate: string };
  nodes: ApiNode[];
}

interface ExternalLink {
  label: string;
  url: string;
}

// The aggregate dist/api/index.json deliberately omits `links` (see
// astro-course-university's IndexEntry vs ContentNode) — it only appears on
// each node's own dist/api/<id>.json. Tests 9-10 below read that per-node
// file to check for a citation.
interface FullApiNode extends ApiNode {
  links?: ExternalLink[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

function loadNode(id: string): FullApiNode {
  return JSON.parse(readFileSync(resolve("dist/api", `${id}.json`), "utf8")) as FullApiNode;
}

function hasCitationMatching(node: ApiNode, pattern: RegExp): boolean {
  const full = loadNode(node.id);
  return (full.links ?? []).some((link) => pattern.test(link.label) || pattern.test(link.url));
}

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

describe("course promises — round 2", () => {
  it("gives every one of the twelve weeks a lecture, numbered 1-12 with no gaps or duplicates", () => {
    const weeks = api.nodes
      .filter((node) => node.type === "lectures")
      .map((node) => node.meta?.week)
      .sort((a, b) => (a ?? 0) - (b ?? 0));

    expect(weeks).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("gives every lecture a slide deck that actually exists in the built output", () => {
    const lectures = api.nodes.filter((node) => node.type === "lectures");
    expect(lectures.length).toBe(12);

    for (const lecture of lectures) {
      const slides = lecture.meta?.slides;
      expect(typeof slides, `${lecture.id} has no slides field`).toBe("string");

      // meta.slides is a site path like "/decks/week-02/"; the deck itself
      // is a static route, so its build output is dist/decks/week-02/index.html.
      const deckDir = String(slides).replace(/^\/+|\/+$/g, "");
      const deckIndex = resolve("dist", deckDir, "index.html");
      expect(existsSync(deckIndex), `${lecture.id}'s deck (${slides}) has no built page at ${deckIndex}`).toBe(
        true,
      );
    }
  });

  it("marks exactly seven sessions entries tutorial:true (weeks 2,3,4,5,8,9,10) and five tutorial:false (weeks 1,6,7,11,12)", () => {
    const sessions = api.nodes.filter((node) => node.type === "sessions");
    expect(sessions.length).toBe(12);

    const tutorialWeeks = sessions
      .filter((node) => node.meta?.tutorial === true)
      .map((node) => node.meta?.week)
      .sort((a, b) => (a ?? 0) - (b ?? 0));
    const noTutorialWeeks = sessions
      .filter((node) => node.meta?.tutorial === false)
      .map((node) => node.meta?.week)
      .sort((a, b) => (a ?? 0) - (b ?? 0));

    expect(tutorialWeeks, "tutorial:true weeks").toEqual([2, 3, 4, 5, 8, 9, 10]);
    expect(noTutorialWeeks, "tutorial:false weeks").toEqual([1, 6, 7, 11, 12]);
  });

  it("cites a USDA FoodData Central source for each week that carries macro figures (weeks 2, 3, 4, 9)", () => {
    const FOOD_DATA_CENTRAL_PATTERN = /FoodData Central/i;
    const nutritionWeeks = [2, 3, 4, 9];

    for (const week of nutritionWeeks) {
      const lecture = api.nodes.find((node) => node.type === "lectures" && node.meta?.week === week);
      expect(lecture, `no lecture found for week ${week}`).toBeDefined();
      expect(
        hasCitationMatching(lecture as ApiNode, FOOD_DATA_CENTRAL_PATTERN),
        `week ${week} lecture (${lecture?.id}) has no FoodData Central citation in its links`,
      ).toBe(true);
    }
  });

  it("cites a USDA/FSIS storage-safety source for each week whose tutorial exercises safe duration (weeks 5, 8, 10)", () => {
    // The citation lives wherever the built content actually carries it —
    // for weeks 5, 8 and 10 that's the tutorial (sessions) page, not the
    // lecture, so check both and require at least one to cite the source.
    const STORAGE_SAFETY_PATTERN = /USDA|FSIS|FoodSafety\.gov/i;
    const storageWeeks = [5, 8, 10];

    for (const week of storageWeeks) {
      const candidates = api.nodes.filter(
        (node) => (node.type === "lectures" || node.type === "sessions") && node.meta?.week === week,
      );
      expect(candidates.length, `no lecture or session found for week ${week}`).toBeGreaterThan(0);

      const cited = candidates.some((node) => hasCitationMatching(node, STORAGE_SAFETY_PATTERN));
      expect(
        cited,
        `week ${week} has no USDA/FSIS storage-safety citation in its lecture or session links (checked ${candidates
          .map((c) => c.id)
          .join(", ")})`,
      ).toBe(true);
    }
  });
});
