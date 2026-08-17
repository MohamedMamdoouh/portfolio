import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
});
