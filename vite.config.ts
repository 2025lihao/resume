import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Critical for GitHub Pages: 
  // Sets the base path to relative './' instead of absolute '/'.
  // This ensures assets (js, css) are found even when deployed in a subdirectory (e.g. username.github.io/repo/).
  base: '/resume/', 
})