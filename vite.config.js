import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative so the build can be deployed
// to any static host (root or sub-path) without extra config.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2019',
    chunkSizeWarningLimit: 1200,
  },
})
