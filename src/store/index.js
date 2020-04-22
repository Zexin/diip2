import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        indexNum: {
            index: 1,
            uuid: ''
        },
        indexNums: {
            index: 0,
            uuid: ''
        },
        hideTip: {
            show: '',
            uuid: ''
        }
    },
    mutations: {
        setIndex(keyword, value) {
            this.state.indexNum = value
        },
        setIndexs(keyword, value) {
            this.state.indexNums = value
        },
        setShowTip(keyword, value) {
            this.state.hideTip = value
        }
    },
    actions: {

    }
})