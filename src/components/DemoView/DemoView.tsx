import type { ShowcaseCombination } from "../../data/types";
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
import { TechnicalBlogDemo2 } from "../DemoContent/TechnicalBlogDemo2";
import { LifestyleBlogDemo2 } from "../DemoContent/LifestyleBlogDemo2";
import { ECommerceDemo2 } from "../DemoContent/ECommerceDemo2";
import { EnterpriseDashboardDemo2 } from "../DemoContent/EnterpriseDashboardDemo2";
import { SaasLandingDemo2 } from "../DemoContent/SaasLandingDemo2";
import { PortfolioDemo2 } from "../DemoContent/PortfolioDemo2";
import { NewsMagazineDemo2 } from "../DemoContent/NewsMagazineDemo2";
import { KidGameDemo2 } from "../DemoContent/KidGameDemo2";
import { TeenGameDemo2 } from "../DemoContent/TeenGameDemo2";
import { DevDocsDemo2 } from "../DemoContent/DevDocsDemo2";
import { HealthcareDemo2 } from "../DemoContent/HealthcareDemo2";
import { RestaurantDemo2 } from "../DemoContent/RestaurantDemo2";
import { NonProfitDemo2 } from "../DemoContent/NonProfitDemo2";
import { FinanceDemo2 } from "../DemoContent/FinanceDemo2";
import { EducationDemo2 } from "../DemoContent/EducationDemo2";
import { AccessibilityDemo2 } from "../DemoContent/AccessibilityDemo2";
import { MinimalistDemo2 } from "../DemoContent/MinimalistDemo2";
import { GamingStreamingDemo2 } from "../DemoContent/GamingStreamingDemo2";
import styles from "./DemoView.module.css";

type DemoComponentFn = () => React.ReactElement;

const DEMO_MAP: Record<string, DemoComponentFn> = {
  pyramidian: TechnicalBlogDemo,
  solstice: LifestyleBlogDemo,
  mercado: ECommerceDemo,
  meridian: EnterpriseDashboardDemo,
  launchpad: SaasLandingDemo,
  vivant: PortfolioDemo,
  chronicle: NewsMagazineDemo,
  sprout: KidGameDemo,
  cipher: TeenGameDemo,
  codex: DevDocsDemo,
  vitalis: HealthcareDemo,
  ember: RestaurantDemo,
  common: NonProfitDemo,
  sentinel: FinanceDemo,
  scholarly: EducationDemo,
  clarity: AccessibilityDemo,
  quietude: MinimalistDemo,
  "neon-rush": GamingStreamingDemo,
  bitshift: TechnicalBlogDemo2,
  vellichor: LifestyleBlogDemo2,
  lucent: ECommerceDemo2,
  prism: EnterpriseDashboardDemo2,
  gravity: SaasLandingDemo2,
  folio: PortfolioDemo2,
  dispatch: NewsMagazineDemo2,
  puffball: KidGameDemo2,
  echoes: TeenGameDemo2,
  axiom: DevDocsDemo2,
  meridiem: HealthcareDemo2,
  zest: RestaurantDemo2,
  kinship: NonProfitDemo2,
  vault: FinanceDemo2,
  quad: EducationDemo2,
  signal: AccessibilityDemo2,
  vanta: MinimalistDemo2,
  "pixel-forge": GamingStreamingDemo2,
};

interface DemoViewProps {
  combination: ShowcaseCombination;
  onBack: () => void;
}

export function DemoView({ combination, onBack }: DemoViewProps) {
  const DemoComponent = DEMO_MAP[combination.id];

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
