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
    //以前的新闻日期的星期几
    pushNewsDay(ctx, data) {
        ctx.commit('pushNewsDay', data)
    },
    //detail额外的信息，如评论点赞数
    changeExtraData(ctx, data) {
        ctx.commit('changeExtraData', data)
    },
    //点赞
    changePopularity(ctx, data) {
        ctx.commit('changePopularity', data)
    },
    //分享组件的显示
    changeShowShare(ctx) {
        ctx.commit('changeShowShare')
    },
    //改变长评论的内容
    changeLongComment(ctx, data) {
        ctx.commit('changeLongComment', data)
    },
    //改变长评论的内容
    changeShortComment(ctx, data) {
        ctx.commit('changeShortComment', data)
    },
    //添加收藏id
    addCollectId(ctx, data) {
        ctx.commit('addCollectId', data)
    },
    //删除指定的收藏id
    removeCollectId(ctx, data) {
        ctx.commit('removeCollectId', data)
    },
    //添加收藏id
    addLikeId(ctx, data) {
        ctx.commit('addLikeId', data)
    },
    //删除指定的收藏id
    removeLikeId(ctx, data) {
        ctx.commit('removeLikeId', data)
    },
    //添加收藏id
    addMyComment(ctx, data) {
        ctx.commit('addMyComment', data)
    },
    //改变写评论的状态
    changeWritting(ctx, data) {
        ctx.commit('changeWritting', data)
    }
}
