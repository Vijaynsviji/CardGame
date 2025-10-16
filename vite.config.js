import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  base: '/CardGame/', 
  server: {
    proxy: {
      // any request starting with /api will be proxied
      '/api': {
        target: 'https://api.nekosapi.com',
        changeOrigin: true,
        // remove /api prefix when forwarding
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

})
