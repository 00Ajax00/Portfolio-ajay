import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
        },
      },
    },
    assetsInlineLimit: 4096,
    minify: 'esbuild',
    sourcemap: false,
  },
  optimizeDeps: {
    include: ['three'],
  },
});