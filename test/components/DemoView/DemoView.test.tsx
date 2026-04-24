import { describe, it, expect } from "vitest";
import { DemoView } from "../../../src/components/DemoView/DemoView";

describe("DemoView", () => {
  it("is a function (component)", () => {
    expect(typeof DemoView).toBe("function");
  });
});
