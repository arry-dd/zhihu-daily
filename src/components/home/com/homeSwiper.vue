<template>
    <div class="home-swiper">
        <swiper class="swiper-content" :options="swiperOption" v-if="topStories.length">
            <swiper-slide v-for="item in topStories" :key="item.id">
                <router-link tag="div" :to="'/detail/'+item.id" class="swiper-img" :style="{ backgroundImage: 'url(' +item.image+ ')' }"></router-link>
                <router-link tag="div" :to="'/detail/'+item.id" class="swiper-desc">{{item.title}}</router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
    import {mapState} from 'vuex'
    require('swiper/dist/css/swiper.css');
    export default {
        name: 'homeSwiper',
        components: {
            swiper,
            swiperSlide
        },
        computed: {
            ...mapState(['topStories'])
        },
        data() {
            return {
                swiperOption: {
                    //设置轮播指标（即轮播图下方的圆点）
                    pagination: '.swiper-pagination',
                    //设置是否可以循环轮播
                    loop: true,
                    //四秒滚动一次
                    autoplay: 4000,
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .home-swiper /deep/ .swiper-pagination-bullet-active {
        background-color: @fWhite;
    }
    .home-swiper /deep/ .swiper-pagination-bullet {
        margin: 0 2px!important;
        width: .15rem;
        height: .15rem;
    }
    .home-swiper /deep/ .swiper-pagination {
        position: absolute;
        bottom: .1rem;
    }
    .home-swiper {
        margin-top: 15%;
    }
    .swiper-img {
        width: 100%;
        padding-bottom: 50%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .swiper-desc {
        position: absolute;
        bottom: .3rem;
        color: @fWhite;
        font-size: .4rem;
        margin: 0 .3rem;
        line-height: .5rem;
    }


</style>
