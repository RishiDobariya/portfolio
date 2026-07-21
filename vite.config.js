import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Serve local static images from the project public folder.
  publicDir: path.resolve(__dirname, "public"),
  server: {
    open: true,
    fs: {
      // Allow Vite to read files from the project root.
      allow: [path.resolve(__dirname)],
    },
  },
});
