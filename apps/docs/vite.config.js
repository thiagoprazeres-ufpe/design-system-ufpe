import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  root: '.',
  publicDir: resolve(__dirname, '../../public'),
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
    },
  },
  build: { outDir: 'dist', sourcemap: true },
  server: { port: 5173, open: true },
});
