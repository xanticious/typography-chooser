import { describe, it, expect } from "vitest";
import { filterCombinations } from "../../src/hooks/useFilters";
import { combinations } from "../../src/data/combinations";
import type { FilterState } from "../../src/hooks/useFilters";

const base: FilterState = { category: null, themes: [], moods: [], responsiveOnly: false, searchQuery: "" };

describe("filterCombinations", () => {
  it("returns all when no filters", () => {
    expect(filterCombinations(combinations, base)).toHaveLength(combinations.length);
  });

  it("filters by category", () => {
    const result = filterCombinations(combinations, { ...base, category: "Technical Blog" });
    expect(result.every((c) => c.category === "Technical Blog")).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it("filters by theme", () => {
    const result = filterCombinations(combinations, { ...base, themes: ["dark"] });
    expect(result.every((c) => c.theme === "dark")).toBe(true);
  });

  it("filters by mood", () => {
    const result = filterCombinations(combinations, { ...base, moods: ["minimal"] });
    expect(result.every((c) => c.mood.includes("minimal"))).toBe(true);
  });

  it("filters responsive only", () => {
    const result = filterCombinations(combinations, { ...base, responsiveOnly: true });
    expect(result.every((c) => c.responsive)).toBe(true);
  });

  it("filters by search query", () => {
    const result = filterCombinations(combinations, { ...base, searchQuery: "pyramidian" });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("pyramidian");
  });

  it("returns empty when no matches", () => {
    const result = filterCombinations(combinations, { ...base, searchQuery: "zzznomatch" });
    expect(result).toHaveLength(0);
  });
});
