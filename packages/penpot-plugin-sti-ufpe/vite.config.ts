import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        ui: resolve(__dirname, 'index.html'),
        plugin: resolve(__dirname, 'src/plugin.ts'),
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  server: { port: 5174, cors: true },
});
