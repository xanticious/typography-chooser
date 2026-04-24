import { describe, it, expect } from "vitest";
import { ThemeContext, ThemeProvider, useTheme } from "../../src/hooks/useTheme";

describe("useTheme exports", () => {
  it("exports ThemeContext", () => {
    expect(ThemeContext).toBeDefined();
  });

  it("exports ThemeProvider as a function", () => {
    expect(typeof ThemeProvider).toBe("function");
  });

  it("exports useTheme as a function", () => {
    expect(typeof useTheme).toBe("function");
  });

  it("ThemeContext has Provider and Consumer", () => {
    expect(ThemeContext).toHaveProperty("Provider");
    expect(ThemeContext).toHaveProperty("Consumer");
  });
});
