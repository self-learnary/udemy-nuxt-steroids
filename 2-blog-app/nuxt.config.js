export default {
  // loading: {
  //   color: 'blue',
  //   height: '10px',
  //   duration: 5000,
  // },
  // only work in ssr false
  // loadingIndicator: {
  //   name: 'chasing-dots',
  //   color: 'blue',
  // },
  head: {
    title: 'blog-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },
  css: ['~/assets/css/main.css'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'http://localhost:5000',
  },
  build: {},
  router: {
    linkExactActiveClass: 'text-primary',
  },
  pageTransition: 'fade',
  env: {
    fbAPIKey: 'AIzaSyBnR8mTtCkBxZgPFXn9-szd0WBIm-vVL18',
  },
}
