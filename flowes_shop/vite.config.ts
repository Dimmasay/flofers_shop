import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/flowers_shop", //for deploy on github-pages
  // base: "./", //for deploy on netlify

  plugins: [react()],
})
