<template>
  <div id="app">
    <Title/>
    <Home style="margin-top: 200px"/>
  </div>
</template>

<script>
import Title from "./components/Title.vue"
import Home from "./components/Home.vue"

export default {
  name: 'App',
  components: {
    Title,
    Home
  }
}
</script>

<style>
:root {
  --background: rgb(245, 245, 245);
  --text-on-bg: rgb(15, 14, 18);
  --text-on-accent: rgb(15, 14, 18);
  --accent: rgb(236, 167, 76);
  --accent: rgb(238, 156, 49);
}

body {
  background-color: var(--background);
}

#app {
  font-family: 'Montserrat', sans-serif; 
  box-sizing: border-box;
  font-size: 14.4px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-on-bg);
  margin-top: 60px;
}

a {
    color: #000;
}

.accent {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-on-bg);
}

.body-font {
  font-family: 'Open Sans', sans-serif; 
  font-size: 0.9rem;
}

</style>
