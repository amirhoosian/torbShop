import { defineConfig } from "@fullstacksjs/eslint-config";

export default defineConfig({
  typescript: {
    tsconfigRootDir: import.meta.dirname,
  },
  next: true,
  react: true,
  tailwind: {
    entryPoint: "./src/styles/globals.css",
  },
  prettier: true,

  ignores: [
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "eslint.config.mjs",
    "postcss.config.mjs",
  ],
});
