import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        topStories: [],
        night: false
    },
    actions: {

    },
    mutations: {
        changeTopStories(state,data) {
            state.topStories = data
        },
        changeNight(state) {
            state.night = !state.night
        }
    }

})
