import { createContext, useContext, useState, useEffect, type ReactNode, createElement } from "react";

type ThemeValue = "light" | "dark";
interface ThemeContextType { theme: ThemeValue; toggleTheme: () => void; }

export const ThemeContext = createContext<ThemeContextType>({ theme: "dark", toggleTheme: () => {} });

interface ThemeProviderProps { children: ReactNode; }

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeValue>("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return createElement(ThemeContext.Provider, { value: { theme, toggleTheme } }, children);
}

export function useTheme(): ThemeContextType {
  return useContext(ThemeContext);
}
