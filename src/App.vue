<template>
  <div id="app">
    <header>
      <h1>VR Trends CC</h1>
    </header>
    <main>
      <KeywordsList @keyword-selected="setKeyword" />
      <div class="content">
        <GoogleTrends v-if="selectedKeyword" :keyword="selectedKeyword" />
      </div>
    </main>
  </div>
</template>

<script>
import GoogleTrends from './components/GoogleTrends.vue';
import KeywordsList from './components/KeywordsList.vue';

export default {
  components: {
    GoogleTrends,
    KeywordsList,
  },
  data() {
    return {
      selectedKeyword: null,
    };
  },
  methods: {
    setKeyword(keyword) {
      this.selectedKeyword = keyword;
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

header {
  background-color: #004080; /* Azul Grand Velas Resorts */
  padding: 20px;
  color: white;
  font-size: 2rem;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f3f3;
  padding: 20px;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}
</style>
