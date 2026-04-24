import { describe, it, expect } from "vitest";
import { CombinationTile } from "../../../src/components/CombinationTile/CombinationTile";
import type { ShowcaseCombination } from "../../../src/data/types";

describe("CombinationTile", () => {
  it("is a function (component)", () => {
    expect(typeof CombinationTile).toBe("function");
  });

  it("accepts correct props shape", () => {
    const combo: ShowcaseCombination = {
      id: "test",
      name: "Test Combo",
      category: "Technical Blog",
      theme: "dark",
      mood: ["clean"],
      responsive: true,
      fonts: {
        heading: { name: "Inter", slug: "Inter", weights: [400], googleFontsUrl: "" },
        body: { name: "Lato", slug: "Lato", weights: [400], googleFontsUrl: "" },
      },
      colors: { background: "#000", text: "#fff", accent: "#f00" },
      navbar: "top",
    };
    expect(() => CombinationTile({ combination: combo })).not.toThrow();
  });
});
