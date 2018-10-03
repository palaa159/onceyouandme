import Vue from 'vue'
import Router from 'vue-router'

const _1dc72a66 = () => import('../pages/result.vue' /* webpackChunkName: "pages/result" */).then(m => m.default || m)
const _2afa63e6 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _008e3be7 = () => import('../pages/play/index.vue' /* webpackChunkName: "pages/play/index" */).then(m => m.default || m)
const _0250cac2 = () => import('../pages/play/_slug.vue' /* webpackChunkName: "pages/play/_slug" */).then(m => m.default || m)
const _0a3aa8d2 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

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
			path: "/result",
			component: _1dc72a66,
			name: "result"
		},
		{
			path: "/about",
			component: _2afa63e6,
			name: "about"
		},
		{
			path: "/play",
			component: _008e3be7,
			name: "play"
		},
		{
			path: "/play/:slug",
			component: _0250cac2,
			name: "play-slug"
		},
		{
			path: "/",
			component: _0a3aa8d2,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
