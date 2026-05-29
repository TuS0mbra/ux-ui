import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// base: './' keeps asset paths relative; viteSingleFile inlines all JS/CSS into
// a single index.html so the build is one portable file — double-click to open,
// or drop it on any static host (tiiny.site, Netlify, Vercel, etc.).
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: {
    target: 'es2019',
    chunkSizeWarningLimit: 2000,
  },
})
