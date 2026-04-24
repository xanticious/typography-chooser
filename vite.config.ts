import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? "/typography-chooser/" : "./",
  server: {
    port: parseInt("4143", 10) || 5173,
  },
});
