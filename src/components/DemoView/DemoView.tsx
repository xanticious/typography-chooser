import type { ShowcaseCombination, AppCategory } from "../../data/types";
import { JsonExport } from "../JsonExport/JsonExport";
import { TechnicalBlogDemo } from "../DemoContent/TechnicalBlogDemo";
import { LifestyleBlogDemo } from "../DemoContent/LifestyleBlogDemo";
import { ECommerceDemo } from "../DemoContent/ECommerceDemo";
import { EnterpriseDashboardDemo } from "../DemoContent/EnterpriseDashboardDemo";
import { SaasLandingDemo } from "../DemoContent/SaasLandingDemo";
import { PortfolioDemo } from "../DemoContent/PortfolioDemo";
import { NewsMagazineDemo } from "../DemoContent/NewsMagazineDemo";
import { KidGameDemo } from "../DemoContent/KidGameDemo";
import { TeenGameDemo } from "../DemoContent/TeenGameDemo";
import { DevDocsDemo } from "../DemoContent/DevDocsDemo";
import { HealthcareDemo } from "../DemoContent/HealthcareDemo";
import { RestaurantDemo } from "../DemoContent/RestaurantDemo";
import { NonProfitDemo } from "../DemoContent/NonProfitDemo";
import { FinanceDemo } from "../DemoContent/FinanceDemo";
import { EducationDemo } from "../DemoContent/EducationDemo";
import { AccessibilityDemo } from "../DemoContent/AccessibilityDemo";
import { MinimalistDemo } from "../DemoContent/MinimalistDemo";
import { GamingStreamingDemo } from "../DemoContent/GamingStreamingDemo";
import styles from "./DemoView.module.css";

type DemoComponentFn = () => React.ReactElement;

const DEMO_MAP: Record<AppCategory, DemoComponentFn> = {
  "Technical Blog": TechnicalBlogDemo,
  "Lifestyle / Personal Blog": LifestyleBlogDemo,
  "E-Commerce / Retail": ECommerceDemo,
  "Enterprise CRUD / Dashboard": EnterpriseDashboardDemo,
  "SaaS / Product Landing Page": SaasLandingDemo,
  "Portfolio / Creative Agency": PortfolioDemo,
  "News / Magazine": NewsMagazineDemo,
  "Kid-Friendly Game / App": KidGameDemo,
  "Teen / Young Adult Game": TeenGameDemo,
  "Documentation / Developer Docs": DevDocsDemo,
  "Healthcare / Medical": HealthcareDemo,
  "Restaurant / Food & Drink": RestaurantDemo,
  "Non-Profit / Charity": NonProfitDemo,
  "Finance / Banking": FinanceDemo,
  "Education / EdTech": EducationDemo,
  "Accessibility / High-Contrast": AccessibilityDemo,
  "Minimalist Personal Site": MinimalistDemo,
  "Gaming / Streaming": GamingStreamingDemo,
};

interface DemoViewProps {
  combination: ShowcaseCombination;
  onBack: () => void;
}

export function DemoView({ combination, onBack }: DemoViewProps) {
  const DemoComponent = DEMO_MAP[combination.category];

  const cssVars = {
    "--demo-font-heading": `"${combination.fonts.heading.name}", serif`,
    "--demo-font-body": `"${combination.fonts.body.name}", sans-serif`,
    "--demo-font-mono": combination.fonts.mono
      ? `"${combination.fonts.mono.name}", monospace`
      : "monospace",
    "--demo-bg": combination.colors.background,
    "--demo-text": combination.colors.text,
    "--demo-accent": combination.colors.accent,
  } as React.CSSProperties;

  return (
    <div className={styles.overlay}>
      <div className={styles.toolbar}>
        <button className={styles.backBtn} onClick={onBack}>
          ← Back to Gallery
        </button>
        <span className={styles.demoTitle}>{combination.name}</span>
        <JsonExport combination={combination} />
      </div>
      <div className={styles.demoWrapper} style={cssVars}>
        <DemoComponent />
      </div>
    </div>
  );
}
