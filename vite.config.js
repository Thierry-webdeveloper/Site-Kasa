import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Site-Kasa/", // le site est servi dans ce sous-dossier sur GitHub Pages
});
