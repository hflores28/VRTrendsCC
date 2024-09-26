<template>
    <div>
      <h2>Keywords</h2>
      <ul>
        <li v-for="(keyword, index) in keywords" :key="index">{{ keyword }}</li>
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
      const response = await fetch("/keywords.txt");
      const text = await response.text();
      this.keywords = text.split("\n").filter(Boolean);
      this.changeKeywordPeriodically();
    },
    beforeDestroy() {
      clearInterval(this.keywordInterval); // Limpia el intervalo
    },
    methods: {
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
    color: #004080;
    font-size: 16px;
  }
  </style>
  