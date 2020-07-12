<template>
  <div class="home-container">

    <div class="portrait" style="grid-area: img; position: relative">
          <img v-if="birthday" src="/img/hat.png" class="birthday-hat">
          <img src="/img/portrait.jpg" width="100%">
          <div v-if="birthday" class="text-h2 text-secondary" style="text-align: center; margin-top: 20px;">It's my birthday!</div>
    </div>
    <div style="grid-area: title" class="text-title text-primary" id="home-title">Hi, I'm David!</div>
    <div style="grid-area: subtitle" class="text-h2 text-secondary" id="home-subtitle">Researcher at VIDI, UC Davis</div>
    <div style="grid-area: bio" class="text-p text-primary" v-html="CV.bio">
    </div>
    <div style="grid-area: septop" class="home-seperator mobile-only"><hr></div>
    <Social style="grid-area: social" />
    <div style="grid-area: sepbot" class="home-seperator mobile-only"><hr></div>
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
  },
  computed: {
    birthday() {
      return (new Date()).getMonth()+1 == 6 && (new Date()).getDate() == 7
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

.birthday-hat {
  z-index: 100;
  width: 150px;
  position: absolute; 
  top: -175px; 
  left: 45%; 
  transform: rotate(20deg);
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
    grid-template-rows: 35px auto 3vh auto auto 30px auto 30px auto 20px;
    grid-gap: 10px 0;
    grid-template-areas: 
    "."
    "img"
    "."
    "title"
    "subtitle"
    "septop"
    "social"
    "sepbot"
    "bio"
    "."
    ;
  }

  .home-seperator {
    padding: 15px 0;
    text-align: center;
  }

  .home-seperator > hr {
    max-width: 85px;
    width: 80%;
    height: 0;
    border: none;
    border-top: 1px solid var(--text-secondary);
    margin: 0 auto;
    opacity: 0.3;
  }

  .portrait > img {
    max-width: 200px;
  }

  .birthday-hat {
    width: 100px;
    top: -100px;
  }

}
</style>