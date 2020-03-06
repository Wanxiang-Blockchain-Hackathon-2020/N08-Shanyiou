
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '善益鸥',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: '艾鸥科技、王雁南、艾鸥区块链、Terry、区块链技术公司，区块链底层平台，区块链解决方案，区块链金融科技，区块链服务' },
      { hid: 'description', name: 'description', content: '艾鸥科技成立于2017年，专注于为客户提供专业区块链技术解决方案，公司核心团队均来自美国藤校及清北，并拥有丰富的区块链行业从业经验。团队成立初期便致力于深耕区块链行业，自主研发了高性能的区块链底层系统，在共识算法、经济模型、商业模式创造和推广等方面有重大突破，并已申请多项区块链技术专利。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'iview/dist/styles/iview.css',
    'swiper/dist/css/swiper.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview',
    '@/plugins/vant',
    '@/plugins/moment',
    { src: '@/plugins/polyfill' },
    { src: '@/plugins/tool', ssr: false },
    { src: '@/plugins/echarts', ssr: false },
    // { src: '@/plugins/vant', ssr: false },
    // { src: '@/plugins/moment', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  axios: {
    proxy: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   transpile: ['vue-echarts', 'resize-detector'],
    extend (config, ctx) {
    }
  },
  proxy: {
    '/jsonrpc': {
      target: 'http://35.160.6.17:8910',
      ws: false,
      changeOrigin: true,
      // pathRewrite: {
      //   '/aiou': ''
      // }
    }
  }
}

