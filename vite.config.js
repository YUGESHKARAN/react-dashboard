import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // Use './' if deploying to a subdirectory or custom base path
  build: {
    outDir: 'dist' // Ensure this matches the "distDir" in vercel.json
  }
})
