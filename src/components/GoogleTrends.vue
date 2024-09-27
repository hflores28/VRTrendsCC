<!-- src\components\GoogleTrends.vue -->
<template>
  <div class="google-trends">
    <h2>Google Trends Data</h2>
    <div v-if="error">{{ error }}</div>
    <div v-if="loading">Cargando...</div>
    <div v-else class="trends-container">
      <iframe
        v-for="widget in widgets"
        :key="widget.id"
        :src="widget.url"
        class="trends-frame"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      widgets: [],
      error: null,
      loading: true,
    };
  },
  methods: {
    generateWidgetUrls() {
      const baseUrl = "trends/embed/explore/"; // Cambiado a usar el proxy
      const queryParams = (type) => {
        const url = `${baseUrl}${type}?q=${encodeURIComponent(this.keyword)}&geo=MX&date=now 1-d`;
        console.log(`Generated URL for ${type}: ${url}`);
        return url;
      };

      return [
        { id: "TIMESERIES", url: queryParams("TIMESERIES") },
        { id: "GEO_MAP", url: queryParams("GEO_MAP") },
        { id: "RELATED_TOPICS", url: queryParams("RELATED_TOPICS") },
        { id: "RELATED_QUERIES", url: queryParams("RELATED_QUERIES") },
      ];
    },
    loadTrendsData() {
      try {
          this.widgets = this.generateWidgetUrls();
          this.loading = false; // Cambia a false cuando se carguen los datos
          this.error = null; // Resetear el error
      } catch (err) {
          this.error = "Error al cargar los datos de Google Trends.";
          console.error(err); // Mostrar el error en la consola para depuración
          this.loading = false; // Asegurarse de que el estado de carga se actualice
      }
    },
  },
  watch: {
    keyword: 'loadTrendsData', // Llamar a loadTrendsData cuando la keyword cambia
  },
  mounted() {
    this.loadTrendsData();
  },
};
</script>

<style scoped>
.google-trends {
  text-align: center;
  padding: 20px;
  background-color: #EBEBEB; /* Blanco Grand Velas Resorts */
  color: black;
}

.trends-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centra los iframes en el contenedor */
  max-width: 1200px; /* Tamaño máximo del contenedor */
  margin: 0 auto; /* Centra el contenedor en el body */
}

.trends-frame {
  width: 45%; /* Cambia esto para ajustar el tamaño */
  height: 300px;
  margin: 10px; /* Espaciado entre los iframes */
  border: none;
  border-radius: 8px; /* Bordes redondeados para un diseño más suave */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Sombra para el efecto de elevación */
}

@media (max-width: 768px) {
  .trends-frame {
    width: 100%; /* Ancho completo en pantallas más pequeñas */
  }
}
</style>
