export default  {
    changeTopStories(state,data) {
        state.topStories = data
    },
    changeNight(state) {
        state.night = !state.night
    },
    changelatest(state,data) {
        state.latestStories = data
    },
    changeDate(state,data) {
        state.date = data
    }
}
