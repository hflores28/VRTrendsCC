<template>
    <div class="google-trends">
      <h2>Google Trends Data for {{ keyword }}</h2>
      <div v-if="error">{{ error }}</div>
      <div v-else>
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
      };
    },
    methods: {
      generateWidgetUrls() {
        const baseUrl = "https://trends.google.com/trends/embed/explore/";
        const queryParams = (type) =>
          `${baseUrl}${type}?q=${encodeURIComponent(this.keyword)}&geo=MX&date=now 1-d`;
  
        return [
          { id: "TIMESERIES", url: queryParams("TIMESERIES") },
          { id: "GEO_MAP", url: queryParams("GEO_MAP") },
          { id: "RELATED_TOPICS", url: queryParams("RELATED_TOPICS") },
          { id: "RELATED_QUERIES", url: queryParams("RELATED_QUERIES") },
        ];
      },
      async loadTrendsData() {
        this.widgets = this.generateWidgetUrls();
        console.log(this.widgets); // Verificar las URLs generadas
        try {
          const responses = await Promise.all(
            this.widgets.map(async (widget) => {
              const response = await fetch(widget.url);
              if (!response.ok) {
                throw new Error(`Failed to fetch ${widget.url}: ${response.status}`);
              }
              return response.ok;
            })
          );
  
          const hasValidData = responses.every((res) => res);
          this.error = hasValidData ? null : "No hay suficientes datos para mostrar.";
        } catch (error) {
          console.error(error); // Log el error completo
          this.error = error.message; // Muestra el mensaje de error
        }
      },
    },
    mounted() {
      this.loadTrendsData();
    },
    watch: {
      keyword: function() {
        this.loadTrendsData(); // Actualiza cuando cambie la palabra clave
      },
    },
  };
  </script>
  
  <style scoped>
  .google-trends {
    text-align: center;
    padding: 20px;
    background-color: #004080; /* Azul Grand Velas Resorts */
    color: white;
  }
  
  .trends-frame {
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
    border: none; /* Eliminar borde para una apariencia más limpia */
  }
  </style>
  