import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base casa com o nome do repositório no GitHub Pages:
// https://<usuario>.github.io/mundomagico/
// Trocar para '/' se um dia entrar domínio próprio via CNAME.
export default defineConfig({
  base: '/mundomagico/',
  plugins: [react()],
  build: { target: 'es2020', assetsInlineLimit: 2048 },
})
