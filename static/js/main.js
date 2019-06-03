window.onload = () => {

    const routes = [
        { path: '/', component: Vue.component('home') },
        { path: '/home', component: Vue.component('home') },
    ]
    
    const router = new VueRouter({
        routes
    })

    const app = new Vue({
        router,
        el: '#app',
    })
}