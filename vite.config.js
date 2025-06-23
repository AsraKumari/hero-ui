// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-index-to-404',
      closeBundle() {
        const indexPath = path.resolve(__dirname, 'dist/index.html');
        const notFoundPath = path.resolve(__dirname, 'dist/404.html');

        try {
          fs.copyFileSync(indexPath, notFoundPath);
          console.log('✅ 404.html created successfully in dist/');
        } catch (err) {
          console.error('❌ Error copying index.html to 404.html:', err);
        }
      },
    },
  ],
  base: '/hero-ui/', 
});
