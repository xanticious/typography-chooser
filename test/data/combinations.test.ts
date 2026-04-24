import { describe, it, expect } from "vitest";
import { combinations } from "../../src/data/combinations";
import type { ShowcaseCombination } from "../../src/data/types";

describe("combinations data", () => {
  it("exports exactly 18 combinations", () => {
    expect(combinations).toHaveLength(18);
  });

  it("every combination has a unique id", () => {
    const ids = combinations.map((c) => c.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it("every combination has a unique name", () => {
    const names = combinations.map((c) => c.name);
    const unique = new Set(names);
    expect(unique.size).toBe(names.length);
  });

  it("every combination satisfies the ShowcaseCombination shape", () => {
    for (const combo of combinations) {
      const c = combo as ShowcaseCombination;
      expect(typeof c.id).toBe("string");
      expect(typeof c.name).toBe("string");
      expect(typeof c.category).toBe("string");
      expect(["light", "dark", "high-contrast"]).toContain(c.theme);
      expect(Array.isArray(c.mood)).toBe(true);
      expect(c.mood.length).toBeGreaterThan(0);
      expect(typeof c.responsive).toBe("boolean");
      expect(typeof c.fonts.heading.name).toBe("string");
      expect(typeof c.fonts.body.name).toBe("string");
      expect(typeof c.colors.background).toBe("string");
      expect(typeof c.colors.text).toBe("string");
      expect(typeof c.colors.accent).toBe("string");
      expect(["top", "left", "bottom", "hamburger"]).toContain(c.navbar);
    }
  });

  it("combination ids are URL-safe slugs", () => {
    const slugPattern = /^[a-z0-9-]+$/;
    for (const combo of combinations) {
      expect(combo.id).toMatch(slugPattern);
    }
  });

  it("all hex color values are valid", () => {
    const hexPattern = /^#[0-9a-fA-F]{6}$/;
    for (const combo of combinations) {
      expect(combo.colors.background).toMatch(hexPattern);
      expect(combo.colors.text).toMatch(hexPattern);
      expect(combo.colors.accent).toMatch(hexPattern);
    }
  });

  it("all font weight arrays are non-empty", () => {
    for (const combo of combinations) {
      expect(combo.fonts.heading.weights.length).toBeGreaterThan(0);
      expect(combo.fonts.body.weights.length).toBeGreaterThan(0);
      if (combo.fonts.mono) {
        expect(combo.fonts.mono.weights.length).toBeGreaterThan(0);
      }
    }
  });
});
