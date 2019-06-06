<template>
    <div class="home">
        <fade-animation>
            <div class="home-mask" v-show="flagShowSideBar"></div>
        </fade-animation>
        <side-bar-animation>
            <side-bar v-show="flagShowSideBar" @closeSideBar="closeSideBar"></side-bar>
        </side-bar-animation>
        <home-header @showSideBar="showSideBar"></home-header>
        <home-swiper></home-swiper>
        <home-news></home-news>
    </div>
</template>

<script>
    import homeHeader from 'home/com/homeHeader'
    import homeSwiper from 'home/com/homeSwiper'
    import homeNews from 'home/com/homeNews'
    import sideBar from 'home/com/sideBar'
    import sideBarAnimation from 'common/sideBarAnimation'
    import fadeAnimation from 'common/fadeAnimation'
    import axios from 'axios'
    import {mapState} from 'vuex'

    export default {
        name: 'Home',
        components: {
            homeHeader,
            homeSwiper,
            homeNews,
            sideBar,
            sideBarAnimation,
            fadeAnimation
        },
        data() {
            return {
                dateMinus: 0,//ajax获取数据的日期
                // weeks: 0,
                count: 0,
                //是否显示侧边栏的标记
                flagShowSideBar: false
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
                const data = ret.data;
                if (data.date) {
                    this.$store.dispatch('changeTopStories', data.top_stories);
                    this.$store.dispatch('changelatest', data.stories);
                }
            },
            //判断星期几
            judgeDay(week) {
                let str = '';
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
            getDate(date) {
                let month = date.getMonth();
                if (month) {
                    month = month < 10 ? '0' + month : month
                }
                let year = date.getFullYear();
                let nowDate = eval(date.getDate() + 1);
                if (nowDate) {
                    nowDate = nowDate < 10 ? '0' + nowDate : nowDate
                }
                let week = date.getDay();
                let str = this.judgeDay(week);
                // this.weeks = week
                this.$store.dispatch('changeDate', year + '' + month + '' + nowDate, str);
                this.$store.dispatch('pushNewsDay', str);
            },
            //获取以前的新闻
            getPastNews() {
                axios.get('/api/4/news/before/' + this.dateMinus)
                    .then(this.getPastNewsSucc)
            },
            getPastNewsSucc(ret) {
                const data = ret.data;
                if (data.date) {
                    this.$store.dispatch('pushPastStories', data.stories);
                    this.$store.dispatch('pushNewsDate', data.date);
                }
            },
            //页面滚动到底部获取更多日期的新闻：
            //把日期减一，然后发ajax请求
            dateMinusOne() {
                this.count++;
                let retTime = this.dec(this.count);
                let newYear = (new Date(retTime)).getFullYear();
                let newMonth = (new Date(retTime)).getMonth();
                let newDate = (new Date(retTime)).getDate();
                let newDay = (new Date(retTime)).getDay();
                newMonth = newMonth < 10 ? '0' + newMonth : newMonth;
                newDate = newDate < 10 ? '0' + newDate : newDate;
                this.dateMinus = newYear + '' + newMonth + '' + newDate;
                this.getPastNews();
                let day = this.judgeDay(newDay);
                this.$store.dispatch('pushNewsDay', day);
            },
            //日期减一的相关算法
            dec(count) {
                let t = new Date();//你已知的时间
                let t_s = t.getTime();//转化为时间戳毫秒数
                let time = t.setTime(t_s - count * 1000 * 60 * 60 * 24);//设置新时间比旧时间少count天
                return time
            },
            //监听屏幕滑动底部
            listenBottom() {
                let html = document.documentElement;

                if (html.scrollHeight - html.offsetHeight - html.scrollTop < 5) {
                    this.dateMinusOne();
                }
            },
            //头部的菜单按钮点击后，显示侧边栏
            showSideBar() {
                this.flagShowSideBar = true
            },
            //关闭侧边栏
            closeSideBar() {
                this.flagShowSideBar = false
            }
        },
        mounted() {
            this.getLatestNews();
            this.getDate(new Date());
            this.dateMinus = this.date;
            this.getPastNews();
        },
        activated() {
            //页面滚动到底部获取更多日期的新闻
            //这里必须用箭头函数，不然会改变this的指向
            window.addEventListener('scroll', this.listenBottom);
            //从收藏页面跳转到主页时关闭侧边栏
            this.flagShowSideBar = false;
        },
        deactivated() {
            //解除全局绑定
            window.removeEventListener('scroll', this.listenBottom);
        }
    }
</script>

<style scoped lang="less">
    .home-mask {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .7);
        z-index: 50;
        top: 0;
    }
</style>

