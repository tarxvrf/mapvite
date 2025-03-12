import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({

  plugins: [
    react(),
    tailwindcss()

  ],
  build: {
    outDir: 'dist', // Ensure output directory is correctly set
    sourcemap: true, // Optional: enables sourcemaps for debugging
    commonjsOptions: {
      exclude: ['some-problematic-package'], // Optional: exclude problematic packages
    },
  },
})
