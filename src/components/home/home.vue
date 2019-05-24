<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-news></home-news>
        {{date}}
    </div>
</template>

<script>
    import homeHeader from 'home/com/homeHeader'
    import homeSwiper from 'home/com/homeSwiper'
    import homeNews from 'home/com/homeNews'
    import axios from 'axios'
    import {mapState} from 'vuex'

    export default {
        name: 'Home',
        components: {
            homeHeader,
            homeSwiper,
            homeNews
        },
        computed: {
            ...mapState(['topStories', 'night', 'latestStories', 'date','pastStories'])
        },
        methods: {
            //获取最新的消息
            getLatestNews() {
                axios.get('/api/4/news/latest')
                    .then(this.getLatestNewsSucc)
            },
            getLatestNewsSucc(ret) {
                const data = ret.data
                if (data.date) {
                    this.$store.dispatch('changeTopStories', data.top_stories)
                    this.$store.dispatch('changelatest', data.stories)
                }
            },
            //获取日期
            getDate() {
                let date = new Date()
                let month = date.getMonth()
                if (month) {
                    month = month < 10 ? '0' + month : month
                }
                let year = date.getFullYear()
                let nowDate = eval(date.getDate()+1)
                let week = date.getDay();
                let str = ''
                if (week == 0) {
                    str = "星期日";
                } else if (week == 1) {
                    str = "星期一";
                } else if (week == 2) {
                    str = "星期二";
                } else if (week == 3) {
                    str = "星期三";
                } else if (week == 4) {
                    str = "星期四";
                } else if (week == 5) {
                    str = "星期五";
                } else if (week == 6) {
                    str = "星期六";
                }
                this.$store.dispatch('changeDate', year + '' + month + '' + nowDate,str)
                this.$store.dispatch('pushnewsDate',str)
            },
            //获取以前的新闻
            getPastNews() {
                axios.get('/api/4/news/before/' + this.date)
                    .then(this.getPastNewsSucc)
            },
            getPastNewsSucc(ret) {
                const data = ret.data
                if (data.date) {
                    this.$store.dispatch('pushPastStories',data.stories)
                    this.$store.dispatch('pushNewsDate',data.date)
                }
            }
        },
        mounted() {
            this.getLatestNews()
            this.getDate()
            this.getPastNews()
        }
    }
</script>

<style scoped lang="less">
    .dv {
        height: 50rem;
    }
</style>

