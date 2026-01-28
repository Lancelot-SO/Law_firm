import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      './cjs/react.production.min.js': path.resolve(__dirname, 'node_modules/react/cjs/react.production.min.js'),
      './cjs/react-dom.production.min.js': path.resolve(__dirname, 'node_modules/react-dom/cjs/react-dom.production.min.js'),
    }
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
