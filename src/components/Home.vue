<template>
  <div class="container">

    <div style="grid-area:img;">
          <img src="/img/portrait.jpg" width="175px">
    </div>
    <div style="grid-area:title; text-align:left;">
      <div style="font-size:2.2rem; font-weight: 600;">David Bauer</div>
      <div style="font-size:1.8rem; color: var(--accent);">Researcher at VIDI, University of California at Davis</div>
    </div>
    <div class="body-font" style="grid-area:about; text-align:left;" v-html="CV.bio">
    </div>
    <div style="grid-area:cv" class="cv">
      <div v-for="section in CV.sections" :key="section.title" style="width: 100%;">
        <div class="cv-section">
          <div class="accent cv-section-title" style="grid-area:title">{{section.title}}</div>
        </div>
        <CvEntry v-for="entry in section.entries" :key="entry.title" :title="entry.title" :description="entry.description" :from="entry.from" :to="entry.to" />
      </div>
    </div>
  </div>
</template>

<script>
import CvEntry from './CvEntry'
import CV from '../assets/cv.json'

export default {
  components: {
    CvEntry
  },
  data() {
    return {
      CV
    }
  }
}
</script>

<style>
img {
  border-radius: 120px;
}

.container {
  text-align: center;
  display: grid;
  grid-template-columns: auto minmax(auto, 800px) auto;
  grid-template-rows: 1fr auto auto 0.2fr auto;
  grid-gap: 20px 50px;
  grid-template-areas: 
  ". img ."
  ". title ."
  ". about ."
  ". . ."
  ". cv ."
  ;
}

.cv {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cv-section {
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-template-areas: ". title";
}

.cv-section-title {
  font-size: 1.8rem !important;
  text-align: left;

  margin-bottom: 15px;
  margin-top: 35px;
  padding: 15px;
}
</style>