<template>
  <div id="app">
    <Title/>
    <Home class="home"/>
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

@media (prefers-color-scheme: light) {
  :root {
    --background: rgb(245, 245, 245);
    --background-translucent: rgba(245, 245, 245, 0.85);
    --text-on-bg: rgb(15, 14, 18);
    --text-on-accent: rgb(15, 14, 18);
    --accent: rgb(236, 167, 76);
    --accent: rgb(238, 156, 49);
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --background: rgb(15, 14, 18);
    --background-translucent: rgba(15, 14, 18, 0.85);
    --text-on-bg: rgb(245, 245, 245);
    --text-on-accent: rgb(15, 14, 18);
    --accent: rgb(236, 167, 76);
    --accent: rgb(238, 156, 49);
  }
}

@media (max-width: 700px) {
  .desktop-only {
    display: none;
  }
  .mobile-only {
    display: block;
  }
  .home {
    margin-top: 120px;
  }
}

@media (min-width: 701px) {
  .desktop-only {
    display: block;
  }
  .mobile-only {
    display: none;
  }
  .home {
    margin-top: 200px;
  }
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
    color: var(--text-on-bg);
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
