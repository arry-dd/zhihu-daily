export default {
    // 轮播图的信息
    changeTopStories(ctx, data) {
        ctx.commit('changeTopStories', data)
    },
    //当天的新闻
    changelatest(ctx, data) {
        ctx.commit('changelatest', data)
    },
    //当天的日期
    changeDate(ctx, data) {
        ctx.commit('changeDate', data)
    },
    //新闻日期例如04月23日
    pushNewsDate(ctx, data) {
        ctx.commit('pushNewsDate', data)
    },
    //以前的新闻
    pushPastStories(ctx, data) {
        ctx.commit('pushPastStories', data)
    },
    //以前的新闻
    pushnewsDate(ctx, data) {
        ctx.commit('pushnewsDate', data)
    }
}
