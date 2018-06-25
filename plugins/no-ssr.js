import Vue from 'vue'
import VueFloatLabel from 'vue-float-label'
import VueCard from 'vue-credit-card'
import WebFont from 'webfontloader'

Vue.use(VueFloatLabel)
Vue.component('Card', VueCard)

WebFont.load({
  google: {
    families: ['Kanit']
  }
})
