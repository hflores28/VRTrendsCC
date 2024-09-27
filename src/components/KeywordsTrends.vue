<!-- src\components\KeywordsTrends.vue -->
<template>
  <div class="container">
    <header>
      <h1>{{ currentKeyword }}</h1>
    </header>
    <div class="trends-widget">
      <GoogleTrends :keyword="currentKeyword"></GoogleTrends>
    </div>
    <KeywordsList @keyword-selected="updateKeyword"></KeywordsList>
  </div>
</template>

<script>
import GoogleTrends from './GoogleTrends.vue';
import KeywordsList from './KeywordsList.vue';

export default {
  components: {
    GoogleTrends,
    KeywordsList
  },
  data() {
    return {
      currentKeyword: "Grand Velas Riviera Nayarit", // Palabra clave inicial
    };
  },
  methods: {
    updateKeyword(keyword) {
      this.currentKeyword = keyword; // Actualizar la palabra clave seleccionada
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #a4957d !important; /* Cafe Claro Grand Velas Resorts */
  color: white;
  padding: 20px;
  min-height: 65vh;
}

header {
  background-color: #383634;
  padding: 20px;
  width: 100%;
  text-align: center;
  color: white;
}

.trends-widget {
  display: grid;
  grid-template-columns: repeat(1, 4fr);
  grid-gap: 35px;
  width: 100%;
  max-width: 1920px;
}

@media (max-width: 768px) {
  .trends-widget {
    grid-template-columns: 1fr;
  }
}
</style>
