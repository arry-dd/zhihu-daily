import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        topStories: []
    },
    actions: {

    },
    mutations: {
        changeTopStories(state,data) {
            state.topStories = data
        }
    }

})
