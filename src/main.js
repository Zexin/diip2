import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFullPage from 'vue-fullpage.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueFullPage);
Vue.use(VueAwesomeSwiper, {})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')