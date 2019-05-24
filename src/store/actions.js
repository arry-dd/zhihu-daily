export default {
    changeTopStories(ctx, data) {
        ctx.commit('changeTopStories', data)
    },
    changelatest(ctx, data) {
        ctx.commit('changelatest', data)
    },
    changeDate(ctx, data) {
        ctx.commit('changeDate', data)
    }
}
