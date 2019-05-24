<template>
    <div class="home-news">
        <ul class="news-latest">
            <li class="news-date">今日新闻</li>
            <li class="news-info" v-for="(item,index) in latestStories" :key="index">
                <div class="news-info-desc">{{item.title}}</div>
                <img class="news-info-img" :src="item.images[0]">
            </li>
        </ul>
        <ul class="news-past" v-for="(stores,index) in pastStories" :key="index">
            <li class="news-date">{{newsDate[index]+' '+newsDay[index]}}</li>
            <li class="news-info" v-for="(item,index) in stores" :key="index">
                <div class="news-info-desc">{{item.title}}</div>
                <img class="news-info-img" :src="item.images[0]">
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'homeNews',
        computed: {
            ...mapState(['latestStories', 'night', 'pastStories', 'newsDate', 'newsDay'])
        }
    }

</script>

<style scoped lang="less">
    .news-latest, .news-past {
        background-color: @bgColor;
        text-align: center;
        overflow: hidden;
    }

    .news-date {
        text-align: left;
        background-color: @bgColor;
        line-height: .9rem;
        font-size: .28rem;
        padding-left: .3rem;
        color: @textColorClick;
    }

    .news-info {
        margin-top: .1rem;
        width: 96%;
        padding-bottom: 25%;
        background-color: @fWhite;
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
</style>
