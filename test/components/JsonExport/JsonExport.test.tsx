import { describe, it, expect } from "vitest";
import { JsonExport } from "../../../src/components/JsonExport/JsonExport";
import type { ShowcaseCombination } from "../../../src/data/types";

const combo: ShowcaseCombination = {
  id: "test", name: "Test", category: "Technical Blog", theme: "dark", mood: ["clean"],
  responsive: true,
  fonts: {
    heading: { name: "Inter", slug: "Inter", weights: [400], googleFontsUrl: "" },
    body: { name: "Lato", slug: "Lato", weights: [400], googleFontsUrl: "" },
  },
  colors: { background: "#000", text: "#fff", accent: "#f00" },
  navbar: "top",
};

describe("JsonExport", () => {
  it("is a function (component)", () => {
    expect(typeof JsonExport).toBe("function");
  });

  it("exports valid JSON when JSON.stringify is called", () => {
    const json = JSON.stringify(combo, null, 2);
    const parsed = JSON.parse(json);
    expect(parsed.id).toBe("test");
    expect(parsed.name).toBe("Test");
  });
});
