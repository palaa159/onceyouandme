import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {"position":"top-right"})

export default function (ctx, inject) {
  inject('toast', Vue.toasted)
}