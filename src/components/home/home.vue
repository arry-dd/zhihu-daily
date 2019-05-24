<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-news></home-news>
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
        data() {
            return {
                dateMinus: 0,//ajax获取数据的日期
                weeks: 0,
                timer: null
            }
        },
        computed: {
            ...mapState(['topStories', 'night', 'latestStories', 'date', 'pastStories'])
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
            //判断星期几
            judgeDay(week) {
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
                return str
            },
            //获取日期
            getDate() {
                let date = new Date()
                let month = date.getMonth()
                if (month) {
                    month = month < 10 ? '0' + month : month
                }
                let year = date.getFullYear()
                let nowDate = eval(date.getDate() + 1)
                let week = date.getDay();
                let str = this.judgeDay(week)
                this.weeks = week
                this.$store.dispatch('changeDate', year + '' + month + '' + nowDate, str)
                this.$store.dispatch('pushnewsDate', str)
            },
            //获取以前的新闻
            getPastNews() {
                axios.get('/api/4/news/before/' + this.dateMinus)
                    .then(this.getPastNewsSucc)
            },
            getPastNewsSucc(ret) {
                const data = ret.data
                if (data.date) {
                    this.$store.dispatch('pushPastStories', data.stories)
                    this.$store.dispatch('pushNewsDate', data.date)
                }
            },
            //页面滚动到底部获取更多日期的新闻：
            //把日期和星期减一，然后发ajax请求
            dateMinusOne() {
                if (parseInt(this.dateMinus) % 100 == 1) {
                    this.dateMinus = eval(this.dateMinus - 71)
                } else {
                    this.dateMinus = parseInt(this.dateMinus) - 1
                }
                // console.log(this.dateMinus)
                if (parseInt(this.weeks) <= 0) {
                    this.weeks = 6
                } else {
                    this.weeks = parseInt(this.weeks) - 1
                }
                let day = this.judgeDay(this.weeks)
                this.getPastNews()
                this.$store.dispatch('pushnewsDate', day)
            },
            //监听屏幕滑动底部
            listenBottom() {
                let html = document.documentElement

                if (html.scrollHeight - html.offsetHeight - html.scrollTop < 5) {
                    this.dateMinusOne()
                }
            }
        },
        mounted() {
            this.getLatestNews()
            this.getDate()
            this.dateMinus = this.date
            this.getPastNews()
            //页面滚动到底部获取更多日期的新闻
            //这里必须用箭头函数，不然会改变this的指向
            window.addEventListener('scroll', this.listenBottom)
        },
        deactivated() {
            window.removeEventListener('scroll',this.listenBottom)
        }
    }
</script>

<style scoped lang="less">
    .dv {
        height: 50rem;
    }

    input {
        position: fixed;
        z-index: 999;
        top: 200px;
        width: 100%;
        height: 50px;
    }
</style>

