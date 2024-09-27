import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  define: {
    '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false),
  },
  server: {
    host: '192.168.14.9', // Tu IP estática
    port: 8080,           // Puerto donde se ejecutará el servidor
    open: true,           // Abre el navegador al iniciar el servidor
  },
  build: {
    outDir: 'dist',
  },
});
