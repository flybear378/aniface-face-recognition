import { defineConfig } from 'vite'
import { resolve } from 'path'

// Vite config for demo/development builds
export default defineConfig({
  root: 'demo',
  base: process.env.NODE_ENV === 'production' ? '/aniface/' : '/',
  build: {
    outDir: '../dist-demo',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      'aniface': resolve(process.cwd(), 'src/index.ts')
    }
  }
})
