<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper :topStories="topStories"></home-swiper>
        <div class="dv"></div>
    </div>
</template>

<script>
    import homeHeader from 'home/com/homeHeader'
    import homeSwiper from 'home/com/homeSwiper'
    import axios from 'axios'

    export default {
        name: 'Home',
        components: {
            homeHeader,
            homeSwiper
        },
        data() {
            return {
                topStories: []
            }
        },
        methods: {
            //获取最新的消息
            getLatestNews() {
                axios.get('/api/4/news/latest')
                    .then(this.succ)
            },
            succ(ret) {
                const data = ret.data
                if (data.date) {
                    this.topStories = data.top_stories
                }
            }
        },
        mounted() {
            this.getLatestNews()
        }
    }
</script>

<style scoped lang="less">
    .dv {
        height: 50rem;
    }
</style>
