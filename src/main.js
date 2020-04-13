import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFullPage from 'vue-fullpage.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true

import 'swiper/css/swiper.css'
import './plugins/element.js'

Vue.use(VueFullPage);
Vue.use(VueAwesomeSwiper, {})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')