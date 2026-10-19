import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // <-- 1. Isko copy karke yahan paste karein

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss() // <-- 2. Isko yahan plugins ke andar add karein
  ],
})
