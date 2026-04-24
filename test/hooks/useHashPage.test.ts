import { describe, it, expect } from "vitest";
import { useHashPage } from "../../src/hooks/useHashPage";

describe("useHashPage", () => {
  it("is a function (hook)", () => {
    expect(typeof useHashPage).toBe("function");
  });
});
