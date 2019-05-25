export default  {
// 轮播图的信息
    changeTopStories(state,data) {
        state.topStories = data
    },
    //判断夜间模式的数据
    changeNight(state) {
        state.night = !state.night
    },
    //当天的新闻
    changelatest(state,data) {
        state.latestStories = data
    },
    //当天的日期
    changeDate(state,data) {
        state.date = data
    },
    //以前的新闻
    pushPastStories(state,data) {
        state.pastStories.push(data)
    },
    //新闻日期例如04月23日
    pushNewsDate(state,data) {
        let month = parseInt(data.slice(4,6))+1
        let date = data.slice(6)
        state.newsDate.push(month+'月'+date+'日')
    },
    //以前新闻日期的星期几
    pushNewsDay(state,data) {
        state.newsDay.push(data)
    },
    //detail额外的信息，如评论点赞数
    changeExtraData(state,data) {
        state.extraData = data
    },
    //点赞
    changePopularity(state, data) {
        state.extraData.popularity = data
    },
    //分享组件的显示
    changeShowShare(state) {
        state.showShare = !state.showShare
    },
    //改变长评论的内容
    changeLongComment(state,data) {
        state.longComment = data
    }
}
