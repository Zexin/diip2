import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFullPage from 'vue-fullpage.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video


import 'swiper/css/swiper.css'
import './plugins/element.js'
import UUID from 'vue-uuid';
Vue.use(UUID);
Vue.use(VueFullPage);
Vue.use(VueAwesomeSwiper, {})

Vue.config.productionTip = false

router.afterEach(() => {
  if (document.getElementsByClassName("fp-scroller")[0]) {
    document.getElementsByClassName("fp-scroller")[0].style.transform = 'translate(0px, 0px) translateZ(0px)'
  }

})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')