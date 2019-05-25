<template>
    <div class="home-news">
        <ul :class="ulLatestClass">
            <li :class="newsDateClass">今日新闻</li>
            <router-link :to="'/detail/'+item.id"  tag="li" :class="infoClass" v-for="(item,index) in latestStories" :key="index">
                <div :class="descClass">{{item.title}}</div>
                <img class="news-info-img" :src="item.images[0]">
            </router-link>
        </ul>
        <ul :class="ulPastClass" v-for="(stores,index) in pastStories" :key="index">
            <li :class="newsDateClass">{{newsDate[index]+' '+newsDay[index]}}</li>
            <router-link :to="'/detail/'+item.id" tag="li" :class="infoClass" v-for="(item,index) in stores" :key="index">
                <div :class="descClass">{{item.title}}</div>
                <img class="news-info-img" :src="item.images[0]">
            </router-link>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'homeNews',
        computed: {
            ...mapState(['latestStories', 'night', 'pastStories', 'newsDate', 'newsDay'])
        },
        data() {
            return {
                ulLatestClass: 'news-latest',
                ulPastClass: 'news-past',
                newsDateClass: 'news-date',
                descClass: 'news-info-desc',
                infoClass: 'news-info'
            }
        },
        watch: {
            //监听night进行夜间模式切换
            night: function () {
                this.isNight()
            }
        },
        methods: {
        //夜间模式
            isNight() {
                if(this.night == true) {
                    this.ulLatestClass = 'news-latest news-latest-night'
                    this.ulPastClass = 'news-past news-past-night'
                    this.newsDateClass = 'news-date news-date-night'
                    this.descClass = 'news-info-desc news-info-desc-night'
                    this.infoClass = 'news-info news-info-night'
                } else {
                    this.ulLatestClass = 'news-latest'
                    this.ulPastClass = 'news-past'
                    this.newsDateClass = 'news-date'
                    this.descClass = 'news-info-desc'
                    this.infoClass = 'news-info'
                }
            }
        }
    }

</script>

<style scoped lang="less">
    .news-latest, .news-past {
        background-color: @bgColor;
        text-align: center;
        overflow: hidden;
        &.news-latest-night, &.news-past-night {
            background-color: @bgColorNight;
        }
    }

    .news-date {
        text-align: left;
        background-color: @bgColor;
        line-height: .9rem;
        font-size: .28rem;
        padding-left: .3rem;
        color: @textColorClick;
        &.news-date-night {
            background-color: @bgColorNight;
            color: @textColorClickNight;
        }
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
        &.news-info-night {
            background-color: @fWhiteNight;
        }

        .news-info-img {
            width: 20%;
            float: right;
            padding: 0;
            vertical-align: middle;
            margin: .18rem .3rem .18rem 0;
            opacity: 1!important;
        }

        .news-info-desc {
            float: left;
            width: 60%;
            margin: .3rem .3rem;
            color: @textColorUnclick;
            line-height: .35rem;
            text-align: left;
            &.news-info-desc-night {
                color: @textColorUnclickNight;
            }
        }
    }
</style>
