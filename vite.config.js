import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';


const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  base: isVercel ? '/' : '/hero-ui/',
  plugins: [
    react(),
    {
      name: 'copy-index-to-404',
      closeBundle() {
        const indexPath = path.resolve(__dirname, 'dist/index.html');
        const notFoundPath = path.resolve(__dirname, 'dist/404.html');
        try {
          fs.copyFileSync(indexPath, notFoundPath);
          console.log('✅ 404.html created successfully.');
        } catch (err) {
          console.error('❌ Failed to create 404.html:', err);
        }
      },
    },
  ],
});
