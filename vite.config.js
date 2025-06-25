import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// ❗ Removed 'fs' and the plugin to fix Vercel build error

export default defineConfig({
  plugins: [
    react(),
    // Commenting out the custom plugin for 404.html creation
    // {
    //   name: 'copy-index-to-404',
    //   closeBundle() {
    //     const indexPath = path.resolve(__dirname, 'dist/index.html');
    //     const notFoundPath = path.resolve(__dirname, 'dist/404.html');

    //     try {
    //       fs.copyFileSync(indexPath, notFoundPath);
    //       console.log('404.html created successfully in dist/');
    //     } catch (err) {
    //       console.error('Error copying index.html to 404.html:', err);
    //     }
    //   },
    // },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
