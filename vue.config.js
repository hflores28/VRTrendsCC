const { defineConfig } = require('@vue/cli-service');

// Elimina la importación de defineConfig
module.exports = {
  // Configuración de Vue CLI
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  devServer: {
    port: 8080,  // o el puerto que prefieras
    host: 'localhost'
  }
};
