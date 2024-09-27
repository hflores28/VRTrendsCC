<!-- src\components\KeywordsList.vue -->
<template>
  <div>
    <h2>Keywords</h2>
    <ul>
      <li v-for="(keyword, index) in keywords" :key="index" @click="selectKeyword(keyword)">
        {{ keyword }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: [],
      currentIndex: 0,
      keywordInterval: null,
    };
  },
  async mounted() {
    try {
      const response = await fetch("/keywords.txt");
      if (!response.ok) {
        throw new Error("Error al cargar las palabras clave.");
      }
      const text = await response.text();
      this.keywords = text.split("\n").filter(Boolean);
      this.changeKeywordPeriodically();
    } catch (error) {
      console.error(error);
      this.keywords = ["Error al cargar palabras clave"];
    }
  },
  beforeDestroy() {
    clearInterval(this.keywordInterval);
  },
  methods: {
    selectKeyword(keyword) {
      this.$emit("keyword-selected", keyword); // Emitir el evento al seleccionar la palabra clave
    },
    changeKeywordPeriodically() {
      this.keywordInterval = setInterval(() => {
        const keyword = this.keywords[this.currentIndex];
        this.$emit("keyword-selected", keyword);
        this.currentIndex = (this.currentIndex + 1) % this.keywords.length;
      }, 60000); // Cambia cada minuto
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  color: white;
  font-size: 16px;
  cursor: pointer;
}

li:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Fondo claro al pasar el mouse */
  border-radius: 4px; /* Bordes redondeados */
}

</style>
