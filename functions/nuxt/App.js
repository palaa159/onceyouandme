import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/styles/main.scss'


import _6f6c098b from '../layouts/default.vue'
import _7742cca3 from '../layouts/embed.vue'
import _2d282268 from '../layouts/ping.vue'

const layouts = { "_default": _6f6c098b,"_embed": _7742cca3,"_ping": _2d282268 }



export default {
  head: {"title":"BestInstagramWidget.com – Hashtag widget, user widget, instagram widget, multiple hashtags, hashtag search, instagram feed, best instagram widget","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"},{"hid":"description","name":"description","content":"Hashtag widget, user widget, instagram widget, multiple hashtags, hashtag search, instagram feed, best instagram widget"},{"hid":"fbapp","property":"fb:app_id","content":"1033390356799115"},{"hid":"og:site_name","property":"og:site_name","content":"https:\u002F\u002Fbestinstagramwidget.com"},{"hid":"og:locale","property":"og:locale","content":"th_TH"},{"hid":"og:title","property":"og:title","content":"BestInstagramWidget.com"},{"hid":"og:description","name":"og:description","content":"Hashtag widget, user widget, instagram widget, multiple hashtags, hashtag search, instagram feed, best instagram widget"},{"hid":"og:image:width","property":"og:image:width","content":"200"},{"hid":"og:image:height","property":"og:image:height","content":"200"},{"hid":"og:image","property":"og:image"},{"hid":"theme-color","name":"theme-color","content":"#2B2B2B"}],"script":[{"src":"\u002Fjs\u002FiframeResizer.contentWindow.min.js"},{"src":"\u002Fjs\u002Ffb.js","body":true},{"src":"\u002Fjs\u002Fperlin.js","body":true}],"link":[{"rel":"stylesheet","href":"https:\u002F\u002Fpro.fontawesome.com\u002Freleases\u002Fv5.2.0\u002Fcss\u002Fall.css","integrity":"sha384-TXfwrfuHVznxCssTxWoPZjhcss\u002Fhp38gEOH8UPZG\u002FJcXonvBQ6SlsIF49wUzsGno","crossorigin":"anonymous"}],"style":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      return Promise.resolve(layouts['_' + layout])
    }
    
  },
  components: {
    NuxtLoading
  }
}
