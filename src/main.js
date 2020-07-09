import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false


// Route configuration
import Home from './components/Home.vue'
import Education from './components/Education.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/education', component: Education },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
