<template>
  <div class="social-container">
      
      <div style="grid-area: github" class="text-secondary text-h3">
          <a href="https://github.com/DBauer15" target="_blank">GitHub</a>
      </div>
      <div style="grid-area: linkedin" class="text-secondary text-h3">
          <a href="" target="_blank">LinkedIn</a>
      </div>
      <div style="grid-area: mail" class="text-secondary text-h3">
          davbauer (at) ucdavis.edu
      </div>
  </div>
</template>

<script>
export default {
    name: 'Social'
}
</script>

<style>
.social-container {
    display: grid;
    grid-template-columns: repeat(3, auto) 1fr;
    grid-template-areas: "github linkedin mail .";

    grid-gap: 0 60px;
}

.social-container > div {
    padding: 5px 0;
}

.social-container > div > a {
    text-decoration: none;
    color: inherit;

}

@media (max-width: 1200px) {
    .social-container {
        grid-template-columns: repeat(3, auto);
        grid-template-areas: "github linkedin mail";
        text-align: center;
    }

}

@media (max-width: 850px) {
    .social-container {
        display: grid;
        grid-template-columns: 0.5fr repeat(2, 100px) 0.5fr;
        grid-template-areas: 
        ". github linkedin ."
        "mail mail mail mail";

        grid-gap: 0 0;

        text-align: center;
    }
}
</style>