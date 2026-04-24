export type AppCategory =
  | "Technical Blog"
  | "Lifestyle / Personal Blog"
  | "E-Commerce / Retail"
  | "Enterprise CRUD / Dashboard"
  | "SaaS / Product Landing Page"
  | "Portfolio / Creative Agency"
  | "News / Magazine"
  | "Kid-Friendly Game / App"
  | "Teen / Young Adult Game"
  | "Documentation / Developer Docs"
  | "Healthcare / Medical"
  | "Restaurant / Food & Drink"
  | "Non-Profit / Charity"
  | "Finance / Banking"
  | "Education / EdTech"
  | "Accessibility / High-Contrast"
  | "Minimalist Personal Site"
  | "Gaming / Streaming";

export type Theme = "light" | "dark" | "high-contrast";

export type Mood = "clean" | "playful" | "serious" | "elegant" | "bold" | "warm" | "minimal";

export interface FontSpec {
  name: string;
  slug: string;
  weights: number[];
  googleFontsUrl: string;
}

export interface ColorPalette {
  background: string;
  text: string;
  accent: string;
}

export interface ExternalLibrary {
  library: string;
  url: string;
}

export interface ShowcaseCombination {
  id: string;
  name: string;
  category: AppCategory;
  theme: Theme;
  mood: Mood[];
  responsive: boolean;
  fonts: {
    heading: FontSpec;
    body: FontSpec;
    mono?: FontSpec;
  };
  colors: ColorPalette;
  icons?: ExternalLibrary;
  components?: ExternalLibrary;
  navbar: "top" | "left" | "bottom" | "hamburger";
}
