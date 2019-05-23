<template>
    <div class="home-news">
        <div class="news-latest">
            <div class="news-date">今日新闻</div>
            <div class="news-info">
                <div class="news-info-desc">从产业经济学的角度来看，美国制裁华为会产生哪些影响？</div>
                <img class="news-info-img" src="https:\/\/pic1.zhimg.com\/v2-6f20715a3f3756057f786a6af5bada70.jpg">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'homeNews'
    }

</script>

<style scoped lang="less">
    .news-latest {
        background-color: @bgColor;
        text-align: center;
        overflow: hidden;
        .news-date {
            text-align: left;
            background-color: pink;
            line-height: .9rem;
            font-size: .28rem;
            padding-left: .3rem;
            color: @textColorClick;
        }
        .news-info {
            margin-top: .1rem;
            width: 96%;
            padding-bottom: 25%;
            background-color: lightgreen;
            display: inline-block;
            border-radius: .1rem;
            overflow: hidden;
            height: 0;
            .news-info-img {
                width: 20%;
                float: right;
                padding: 0;
                vertical-align: middle;
                margin: .18rem .3rem .18rem 0;
            }
            .news-info-desc {
                float: left;
                width: 60%;
                margin: .3rem .3rem;
                color: @textColorUnclick;
                line-height: .35rem;
                text-align: left;
            }
        }
    }
</style>
