export default {
    // 轮播图的信息
    topStories: [],
    //判断夜间模式的数据
    night: false,
    //当天的新闻
    latestStories: [],
    //当天的日期
    date: '',
    //以前的新闻
    pastStories: [],
    //以前新闻日期例如04月23日
    newsDate: [],
    //以前新闻日期的星期几
    newsDay: [],
    //detail额外的信息，如评论点赞数
    extraData: {},
    //分享组件的显示
    showShare: false,
    //长评论
    longComment: [],
    //短评论
    shortComment: [],
    //收藏的id
    collectId: [],
    //点赞的id
    likeId: [],
    //用户名和头像
    user: {
        id: "知了个乎",
        head: "http://pic1.zhimg.com/332ae97ce262070a56958a2bedf3f64c_im.jpg"
    },
    //我的评论
    myComment: [],
    //改变写评论的状态
    writting: false
}
