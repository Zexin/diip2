import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        indexNum: 1
    },
    mutations: {
        setIndex(keyword, value) {
            this.state.indexNum = value
        }
    },
    actions: {

    }
})