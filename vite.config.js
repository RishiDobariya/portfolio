import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Serve the existing template images (../assets/img) as static files at the
  // site root. e.g. ../assets/img/hero-bg.jpg -> /hero-bg.jpg
  publicDir: path.resolve(__dirname, '../assets/img'),
  server: {
    open: true,
    fs: {
      // Allow Vite to read files from the parent folder (the assets live there).
      allow: [path.resolve(__dirname, '..')],
    },
  },
})
