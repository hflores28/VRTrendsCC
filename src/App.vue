<template>
  <div id="app">
    <header>
      <h1>VR Trends CC</h1>
    </header>
    <main>
      <router-view></router-view> <!-- Aquí se renderizará el componente según la ruta -->
    </main>
  </div>
</template>

<script>
export default {
  // No es necesario importar los componentes aquí si usas router
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

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f3f3;
  padding: 20px;
}
</style>
