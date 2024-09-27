import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  define: {
    '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false),
  },
  server: {
    port: 8080,
    host: '192.168.14.9'|'localhost',
    open: true,
  },
  build: {
    outDir: 'dist',
  },
  // Esto es para manejar rutas en modo history
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Opciones para servir el index en cada ruta
  server: {
    port: 8080,
    host: '192.168.14.9',
    open: true,
    historyApiFallback: true,
  },
});
