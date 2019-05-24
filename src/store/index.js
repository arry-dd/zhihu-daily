import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        topStories: [],
        night: false,
        latestStories: []
    },
    actions: {

    },
    mutations: {
        changeTopStories(state,data) {
            state.topStories = data
        },
        changeNight(state) {
            state.night = !state.night
        },
        changelatest(state,data) {
            state.latestStories = data
        }
    }

})
