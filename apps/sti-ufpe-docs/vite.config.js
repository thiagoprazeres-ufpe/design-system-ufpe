import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const base = process.env.BASE ?? (process.env.NODE_ENV === 'production' ? '/design-system-ufpe/submarcas/sti-ufpe/' : '/');

export default defineConfig({
  root: '.',
  base,
  publicDir: resolve(__dirname, 'public'),
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
    },
  },
  build: { outDir: 'dist', sourcemap: true },
  server: { port: 5175, open: true },
});
