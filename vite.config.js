import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/sass/resource.scss';"
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [react(), svgr()],
  preview: {
    port: 6005
  },
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    lib: {
      name: 'index.js',
      entry: path.resolve(__dirname, 'src/my-ui-core.ts'),
      formats: ['umd'],
      fileName: () => 'index.js'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        intro: `const process = {env: ${JSON.stringify(process.env)}}`
      }
    }
  }
});
