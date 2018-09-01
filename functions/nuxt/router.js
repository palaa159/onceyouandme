import Vue from 'vue'
import Router from 'vue-router'

const _78d2c312 = () => import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */).then(m => m.default || m)
const _0f918413 = () => import('../pages/preview.vue' /* webpackChunkName: "pages/preview" */).then(m => m.default || m)
const _2a603ae7 = () => import('../pages/embed/index.vue' /* webpackChunkName: "pages/embed/index" */).then(m => m.default || m)
const _2871ae37 = () => import('../pages/ping.vue' /* webpackChunkName: "pages/ping" */).then(m => m.default || m)
const _93b8385a = () => import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */).then(m => m.default || m)
const _9a8469e2 = () => import('../pages/embed/_id.vue' /* webpackChunkName: "pages/embed/_id" */).then(m => m.default || m)
const _6255f646 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/terms",
			component: _78d2c312,
			name: "terms"
		},
		{
			path: "/preview",
			component: _0f918413,
			name: "preview"
		},
		{
			path: "/embed",
			component: _2a603ae7,
			name: "embed"
		},
		{
			path: "/ping",
			component: _2871ae37,
			name: "ping"
		},
		{
			path: "/privacy",
			component: _93b8385a,
			name: "privacy"
		},
		{
			path: "/embed/:id",
			component: _9a8469e2,
			name: "embed-id"
		},
		{
			path: "/",
			component: _6255f646,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
