import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        docs: path.resolve(__dirname, 'docs/index.html'),
      },
    },
  },
  server: {
    host: '127.0.0.1',
    port: 4174,
  },
})
