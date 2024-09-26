import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  define: {
    '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false), // Ajuste para el mensaje de advertencia
  },
  server: {
    // Opciones del servidor de desarrollo
    port: 5173, // Puerto donde se ejecutará el servidor
    open: true, // Abre el navegador al iniciar el servidor
  },
  build: {
    outDir: 'dist', // Carpeta de salida para la construcción
  },
});
