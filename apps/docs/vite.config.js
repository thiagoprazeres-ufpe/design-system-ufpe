import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// Base path: '/' em dev (localhost) e '/design-system-ufpe/' em produção (GH Pages).
// Sobrescreva via env BASE=/foo/ em CI customizado.
const base = process.env.BASE ?? (process.env.NODE_ENV === 'production' ? '/design-system-ufpe/' : '/');

export default defineConfig({
  root: '.',
  base,
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
