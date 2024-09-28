<template>
  <div class="google-trends">
    <h2>Google Trends Data for {{ keyword }}</h2>
    <div v-if="error">{{ error }}</div>
    <div v-if="loading">Cargando...</div>
    <div v-else>
      <div v-if="trendsData">
        <!-- Aquí puedes agregar visualizaciones personalizadas con los datos de trendsData -->
        <ul>
          <li v-for="(point, index) in trendsData.timelineData" :key="index">
            {{ point.formattedTime }}: {{ point.value[0] }}%
          </li>
        </ul>
        <!-- Ejemplo de gráficos usando Chart.js o cualquier otra librería -->
      </div>
    </div>
  </div>
</template>

<script>
import googleTrends from 'google-trends-api';

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
    async loadTrendsData() {
      try {
        const response = await fetch(`/trends?keyword=${encodeURIComponent(this.keyword)}`);
        if (!response.ok) {
          throw new Error('Error fetching Google Trends data');
        }
        const trendsData = await response.json();
        console.log(trendsData); // Para depurar los datos de la API
        this.widgets = this.generateWidgetUrls(); // O usa los datos según lo necesites
        this.loading = false;
        this.error = null;
      } catch (err) {
        this.error = "Error al cargar los datos de Google Trends.";
        console.error(err);
        this.loading = false;
      }
    },
    generateWidgetUrls() {
      // Aquí puedes crear las URLs de los widgets basadas en los datos que recibes
      return [
        { id: "TIMESERIES", url: `trends/embed/explore/TIMESERIES?q=${encodeURIComponent(this.keyword)}&geo=MX&date=now 1-d` },
      ];
    },
  },
  watch: {
    keyword: 'loadTrendsData', // Llamar a loadTrendsData cuando la keyword cambie
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
</style>
