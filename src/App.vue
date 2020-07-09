<template>
  <div id="app">
    <div id="navigation-menu" class="mobile-only">
    </div>
    <div class="app-container">
      <Title style="grid-area: title; position: sticky; top: 0;"/>
      <transition name="fade"
        mode="out-in">
        <router-view style="grid-area: content"/>
      </transition>
    </div>
  </div>
</template>

<script>
import Title from "./components/Title.vue"

export default {
  name: 'App',
  components: {
    Title,
  }
}
</script>

<style>
@media (prefers-color-scheme: light) {
  :root {
    --text-primary: #33271A;
    --text-secondary: #664D34;
    --background: #FFF6E6;
    --background-translucent: rgba(255, 246, 230, 0.95);
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #FFFFFF;
    --text-secondary: #CCCCCC;
    --background: #2E343C;
    --background-translucent: rgba(46, 52, 60, 0.85);
  }
}


body {
  margin: 0;
  background-color: var(--background);
}

#app {
  font-family: 'Futura', 'Lato', sans-serif; 
  font-size: 14.4px;
  font-weight: 400;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-on-bg);
}


.app-container {
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.2fr;
  grid-template-areas: 
  ". title ."
  ". content .";
}

a {
  text-decoration: none;
  color: inherit;
  transition: all .4s;
}
a:hover {
  opacity: 0.55;
}



.text-primary {
  color: var(--text-primary) !important;
}

.text-secondary {
  color: var(--text-secondary) !important;
}

.text-title {
  font-size: 2.75rem;
}
.text-h1 {
  font-size: 1.95rem;
}
.text-h2 {
  font-size: 1.55rem;
}
.text-h3 {
  font-size: 1.25rem;
}
.text-p {
  font-family: 'Open Sans', sans-serif; 
  font-weight: 300;
  font-size: 1.25rem;
}


@media (max-width: 850px) {
  .desktop-only {
    display: none;
  }
  .text-title {
    font-size: 2rem;
  }
  .text-h1 {
    font-size: 1.7rem;
  }
  .text-h2 {
    font-size: 1.2rem;
  }
  .text-h3 {
    font-size: 1rem;
  }
  .text-p {
    font-family: 'Open Sans', sans-serif; 
    font-size: 1.15rem;
  }
}

@media (min-width: 851px) {
  .mobile-only {
    display: none;
  }
}

@media (max-width: 1440px) {
  .app-container {
    display: grid;
    grid-template-columns: 0.1fr 1fr 0.1fr;
    grid-template-areas: 
    ". title ."
    ". content .";
  }
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
