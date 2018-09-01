import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default async function ({ app: { router } }) {
  const moduleOptions = {"id":"UA-124204914-1","autoTracking":{"pageviewOnLoad":false,"exception":true}}
  Vue.use(VueAnalytics, Object.assign({ router }, moduleOptions))
}
