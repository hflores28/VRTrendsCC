<!-- src\App.vue -->
<template>
  <div id="app">
    <header>
      <h1>Google Trends - Velas Resorts</h1>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

header {
  background-color: #86725B; /* Cafe Oscuro Grand Velas Resorts */
  padding: 10px;
  color: white;
  font-size: 1rem;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f3f3;
  padding: 10px;
}
</style>