import swc from "unplugin-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
  },
  plugins: [
    // This is required to build the test files with SWC
    swc.vite(),
  ],
});
