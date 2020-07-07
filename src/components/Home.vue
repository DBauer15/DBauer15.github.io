<template>
  <div class="home-container">

    <div class="portrait" style="grid-area: img;">
          <img src="/img/portrait.jpg" width="100%">
    </div>
    <div style="grid-area: title" class="text-title text-primary" id="home-title">Hi, I'm David!</div>
    <div style="grid-area: subtitle" class="text-h2 text-secondary" id="home-subtitle">Researcher at VIDI, UC Davis</div>
    <div style="grid-area: bio" class="text-p text-primary" v-html="CV.bio">
    </div>
    <Social style="grid-area: social" />
  </div>
</template>

<script>
import Social from './Social'
import CV from '../assets/cv.json'

export default {
  components: {
    Social
  },
  data() {
    return {
      CV
    }
  }
}
</script>

<style>
.home-container {
  display: grid;
  grid-template-columns: 6fr 320px 100px minmax(570px, 35fr) 20fr;
  grid-template-rows: 10vh auto auto auto 35px auto;
  grid-gap: 20px 0;
  grid-template-areas: 
  ". . . . ."
  ". img . title ."
  ". img . subtitle ."
  ". img . bio ."
  ". . . . ."
  ". . . social ."
  ;
}

.portrait {
  text-align: right;
}

.portrait > img {
  border-radius: 320px;
  max-width: 320px;
}

@media (max-width: 1200px) {
  .home-container {
    grid-template-columns: 0.2fr 1fr 0.2fr;
    grid-template-rows: 0vh auto 3vh auto auto 35px auto 35px auto 35px;
    grid-template-areas: 
    ". . ."
    ". img ."
    ". . ."
    ". title ."
    ". subtitle ."
    ". . ."
    ". social ."
    ". . ."
    ". bio ."
    ". . ."
    ;
  }

  .portrait {
    text-align: center;
  }

  .portrait > img {
    max-width: 280px;
  }


  #home-title, #home-subtitle {
    text-align: center;
  }
}

@media (max-width: 850px) {
  .home-container {
    grid-template-columns: 1fr ;
    grid-template-rows: 35px auto 3vh auto auto 20px auto 20px auto 20px;
    grid-gap: 10px 0;
    grid-template-areas: 
    "."
    "img"
    "."
    "title"
    "subtitle"
    "."
    "social"
    "."
    "bio"
    "."
    ;
  }

  .portrait > img {
    max-width: 200px;
  }

}
</style>