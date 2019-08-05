<template>
    <div class="home-news">
        <ul class="news-latest">
            <li class="news-date">今日新闻</li>
            <router-link :to="'/detail/'+item.id" tag="li" class="news-info" v-for="(item,index) in latestStories"
                         :key="index">
                <div class="news-info-desc">{{item.title}}</div>
                <img class="news-info-img" :src="item.images[0]">
            </router-link>
        </ul>
        <ul class="news-past" v-for="(stores,index) in pastStories" :key="index">
            <li class="news-date">{{newsDate[index]+' '+newsDay[index]}}</li>
            <router-link :to="'/detail/'+item.id" tag="li" class="news-info" v-for="(item,index) in stores"
                         :key="index">
                <div class="news-info-desc">{{item.title}}</div>
                <img class="news-info-img" src="" ref="img" lazy="true" :lazysrc="item.images[0]">
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
        methods: {
            //判断是否夜间模式
            changeNight() {
                if (this.night) {
                    document.body.classList.add('dudu-night')
                } else {
                    document.body.classList.remove('dudu-night')
                }
            },
            //图片懒加载
            isInSight(el) {
                const bound = el.getBoundingClientRect();
                const clientHeight = window.innerHeight;
                return bound.top <= clientHeight + 200;
            },
            checkImgs() {
                const imgs = this.$refs.img;
                Array.from(imgs).forEach(el => {
                    if (el.getAttribute('lazy') && this.isInSight(el)) {
                        this.loadImg(el);
                    }
                })
            },
            loadImg(el) {
                if (!el.getAttribute('src')) {
                    const source = el.getAttribute('lazysrc');
                    el.setAttribute('src', source);
                    el.setAttribute('lazy', false);
                }
            },
            // 节流
            throttle(fn, delay) {
                // 利用闭包保存时间
                let prev = Date.now()
                return function () {
                    let context = this
                    let arg = arguments
                    let now = Date.now()
                    if (now - prev >= delay) {
                        fn.apply(context, arg)
                        prev = Date.now()
                    }
                }
            }
        },
        mounted() {
            //判断是否夜间模式
            this.changeNight();
            // this.checkImgs();
            window.addEventListener('scroll',this.throttle(this.checkImgs, 100));
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
            opacity: 1 !important;
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

    .dudu-night .news-latest, .dudu-night .news-past {
        background-color: @bgColorNight;
    }

    .dudu-night .news-date {
        background-color: @bgColorNight;
        color: @textColorClickNight;
    }

    .dudu-night .news-info {
        background-color: @fWhiteNight;
    }

    .dudu-night .news-info-desc {
        color: @textColorUnclickNight;
    }
</style>
