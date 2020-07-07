<template>
  <div class="navigation-container">
      <div style="grid-area: edu" class="text-secondary text-h2 desktop-only">
          Education
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
      <div style="grid-area: burger" class="mobile-only">
          <img src="/img/burger.svg" width="36px" />
      </div>
  </div>
</template>

<script>
export default {
    name: 'Navigation'
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
}
</style>