import Vue from 'vue'
import VueFloatLabel from 'vue-float-label'
// import VueCard from 'vue-credit-card'
import WebFont from 'webfontloader'
const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')

Vue.use(VueFloatLabel)
// Vue.component('Card', VueCard)

WebFont.load({
  google: {
    families: ['Kanit&subset=thai']
  }
})

Vue.use(VueAwesomeSwiper)
