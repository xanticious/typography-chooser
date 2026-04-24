import { describe, it, expect, beforeEach } from "vitest";
import { createElement, useContext, act } from "react";
import { createRoot } from "react-dom/client";
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

describe("ThemeProvider behavior", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    // Reset data-theme to a known state before each test
    document.documentElement.removeAttribute("data-theme");
  });

  it("sets data-theme to 'dark' by default", async () => {
    await act(async () => {
      const root = createRoot(container);
      root.render(createElement(ThemeProvider, null, null));
    });
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    container.remove();
  });

  it("toggles data-theme from dark to light when toggleTheme is called", async () => {
    let capturedToggle: (() => void) | null = null;

    function TestConsumer() {
      const { toggleTheme } = useContext(ThemeContext);
      capturedToggle = toggleTheme;
      return null;
    }

    await act(async () => {
      const root = createRoot(container);
      root.render(createElement(ThemeProvider, null, createElement(TestConsumer)));
    });

    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");

    await act(async () => {
      capturedToggle?.();
    });

    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    container.remove();
  });
});
