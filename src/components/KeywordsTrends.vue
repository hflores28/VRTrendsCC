<!-- src\components\KeywordsTrends.vue -->
<template>
    <div class="container">
      <header>
        <h1>Google Trends - VR Trends CC</h1>
      </header>
      <div class="trends-widget">
        <GoogleTrends v-if="currentKeyword" :keyword="currentKeyword" />
      </div>
    </div>
  </template>
  
  <script>
  import GoogleTrends from './GoogleTrends.vue';
  
  export default {
    components: {
      GoogleTrends,
    },
    data() {
      return {
        currentKeyword: null,
      };
    },
    methods: {
      updateKeyword(keyword) {
        this.currentKeyword = keyword;
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
    background-color: #004080; /* Azul Grand Velas Resorts */
    color: white;
    padding: 20px;
    min-height: 100vh;
  }
  
  header {
    background-color: #002050;
    padding: 15px;
    width: 100%;
    text-align: center;
    color: white;
  }
  
  .trends-widget {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    width: 100%;
    max-width: 1920px;
  }
  
  .trends-frame {
    width: 100%;
    height: 400px;
    border: none;
  }
  
  @media (max-width: 768px) {
    .trends-widget {
      grid-template-columns: 1fr;
    }
  }
  </style>
  