const pkg = require('./package')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    script: [{
      src: '/js/shake.js',
      body: true
    }, {
      src: '/js/offline.min.js',
      body: true
    }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070'
  },

  /*
   ** Global CSS
   */
  css: [{
    src: 'assets/styles/main.scss',
    lang: 'scss'
  }],
  router: {
    middleware: ['router']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/ssr.js',
    '~/plugins/axios.js',
    {
      src: '~/plugins/no-ssr.js',
      ssr: false
    }
  ],
  render: {
    resourceHints: false
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/toast',
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
    // ['@nuxtjs/google-analytics', {
    //   id: '',
    // autoTracking: {
    //   pageviewOnLoad: false,
    //   exception: true
    // }
    // }],
  ],
  toast: {
    position: 'top-right'
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    credentials: true,
    debug: false,
    https: true,
    port: 443,
    host: pkg.apiUrl
    // prefix: '/wp-json/api/v1', moved to apiUrl.js
  },
  /*
   ** Build configuration
   */
  buildDir: 'nuxt',
  build: {
    publicPath: '/',
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: ['en', 'th']
      })
    ],
    babel: {
      presets: [
        [
          'env',
          {
            targets: {
              chrome: 52,
              browsers: ['safari 7', 'ie 11']
            }
          }
        ],
        'stage-0',
        'stage-1',
        'stage-2',
        'stage-3'
      ],
      plugins: ['transform-runtime']
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (!ctx.isDev) {
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            whitelist: ['html', 'body']
          })
        )
      }
    }
  }
}
