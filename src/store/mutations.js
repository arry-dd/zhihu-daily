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
        let month = data.slice(4,6)
        let date = data.slice(6)
        state.newsDate.push(month+'月'+date+'日')
    },
    //以前新闻日期的星期几
    pushnewsDate(state,data) {
        state.newsDay.push(data)
    }
}
