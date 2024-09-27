import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  define: {
    '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false),
  },
  server: {
    port: 5173, // Puerto que deseas usar
    host: '0.0.0.0', // Permite conexiones desde cualquier IP en la red
    open: true, // Abre el navegador automáticamente
    historyApiFallback: true, // Manejo de rutas en modo history
  },
  build: {
    outDir: 'dist', // Directorio de salida para la construcción
  },
  resolve: {
    alias: {
      '@': '/src', // Alias para facilitar las importaciones
    },
  },
});
