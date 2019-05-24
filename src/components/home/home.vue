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
            ...mapState(['topStories','night','latestStories','date'])
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
                    this.$store.commit('changeTopStories',data.top_stories)
                    this.$store.commit('changelatest',data.stories)
                }
            },
            //获取日期
            getDate() {
                let date = new Date()
                let month = date.getMonth()
                if(month) {
                    month=month<10?'0'+month:month
                }
                let year = date.getFullYear()
                let nowDate = date.getDate()
                this.$store.commit('changeDate',year+''+month+''+nowDate)
            },
            getPastNews() {
                axios.get('/api/4/news/before/'+this.date)
                    .then(this.getPastNewsSucc)
            },
            getPastNewsSucc(ret) {
                const data = ret.data
                if (data.date) {
                    console.log(data)
                }
                    // this.$store.commit('changeTopStories',data.top_stories)
                    // this.$store.commit('changelatest',data.stories)
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

