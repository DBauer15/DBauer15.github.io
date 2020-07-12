<template>
  <div class="navigation-container">
      <div style="grid-area: edu" class="text-secondary text-h2 desktop-only">
          <router-link to="/education">Education</router-link>
      </div>
      <div style="grid-area: res" class="text-secondary text-h2 desktop-only">
          Research
      </div>
      <div style="grid-area: tea" class="text-secondary text-h2 desktop-only">
          Teaching
      </div>
      <div style="grid-area: ind" class="text-secondary text-h2 desktop-only">
          Industry
      </div>
      <div style="grid-area: burger" class="mobile-only" v-on:click="toggleMenu">
          <img src="/img/burger.svg" width="36px" />
      </div>
  </div>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            menuVisible: false,
        }
    },
    methods: {
        toggleMenu() {
            //document.getElementById('navigation-menu').style.top = this.menuVisible ? '-100vh' : '0'
            if (!this.menuVisible)
                document.getElementById('navigation-menu').style.display = 'block'
            document.getElementById('navigation-menu').style.opacity = this.menuVisible ? '0' : '1'
            let scrollYw = window.scrollY
            let scrollYt = document.body.style.top;
            document.body.style.position = this.menuVisible ? '' : 'fixed'
            document.body.style.top = this.menuVisible ? '' : `-${scrollYw}px`
            
            if (this.menuVisible)
                window.scrollTo(0, parseInt(scrollYt || '0') * -1)
                document.getElementById('navigation-menu').style.display = 'none'

            this.menuVisible = !this.menuVisible
        }
    }
}
</script>

<style>
.navigation-container {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-areas: "edu res tea ind";

    grid-gap: 0 20px;

    text-align: center;
}

.navigation-container > div {
    padding: 5px 0;
}

@media (max-width: 850px) {
    .navigation-container {
        grid-template-columns: 1fr;
        grid-template-areas: "burger";

        grid-gap: 0 0;

        text-align: right;
    }

    .navigation-container > div {
        padding: 7px 0;
    }

    #navigation-menu {
        display: none; /* TODO: Enable again */
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--background-translucent);
        backdrop-filter: blur(8px);
        opacity: 0;
        transition: all .2s;
    }
}
</style>