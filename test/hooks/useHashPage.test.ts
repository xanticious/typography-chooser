import { describe, it, expect } from "vitest";
import { useHashPage, getPageFromHash } from "../../src/hooks/useHashPage";

describe("useHashPage", () => {
  it("is a function (hook)", () => {
    expect(typeof useHashPage).toBe("function");
  });
});

describe("getPageFromHash", () => {
  it("returns the page id from a valid hash", () => {
    expect(getPageFromHash("#page=pyramidian")).toBe("pyramidian");
  });

  it("decodes URL-encoded page ids", () => {
    expect(getPageFromHash("#page=neon-rush")).toBe("neon-rush");
    expect(getPageFromHash("#page=pixel-forge")).toBe("pixel-forge");
    expect(getPageFromHash("#page=pixel%2Bforge")).toBe("pixel+forge");
  });

  it("returns null for an empty hash", () => {
    expect(getPageFromHash("")).toBeNull();
  });

  it("returns null for a hash without the page prefix", () => {
    expect(getPageFromHash("#about")).toBeNull();
    expect(getPageFromHash("#")).toBeNull();
  });

  it("returns null when page value is empty", () => {
    expect(getPageFromHash("#page=")).toBeNull();
  });
});
