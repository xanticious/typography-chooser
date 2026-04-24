import { chromium } from "@playwright/test";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { mkdirSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "..", "public", "screenshots");
mkdirSync(outputDir, { recursive: true });

const ids = [
  "pyramidian",
  "solstice",
  "mercado",
  "meridian",
  "launchpad",
  "vivant",
  "chronicle",
  "sprout",
  "cipher",
  "codex",
  "vitalis",
  "ember",
  "common",
  "sentinel",
  "scholarly",
  "clarity",
  "quietude",
  "neon-rush",
  "bitshift",
  "vellichor",
  "lucent",
  "prism",
  "gravity",
  "folio",
  "dispatch",
  "puffball",
  "echoes",
  "axiom",
  "meridiem",
  "zest",
  "kinship",
  "vault",
  "quad",
  "signal",
  "vanta",
  "pixel-forge",
];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();

for (const id of ids) {
  const url = `https://xanticious.github.io/typography-chooser/#page=${encodeURIComponent(id)}`;
  process.stdout.write(`Screenshotting ${id}... `);
  await page.goto(url, { waitUntil: "networkidle" });
  // Wait for fonts and demo to render
  await page.waitForTimeout(3000);

  // Screenshot just the demo wrapper (below the toolbar)
  const wrapper = page.locator('[class*="demoWrapper"]');
  await wrapper.waitFor({ state: "visible", timeout: 10000 });

  await wrapper.screenshot({
    path: join(outputDir, `${id}.jpg`),
    type: "jpeg",
    quality: 85,
  });
  console.log("done");
}

await browser.close();
console.log(`\nAll ${ids.length} screenshots saved to public/screenshots/`);
