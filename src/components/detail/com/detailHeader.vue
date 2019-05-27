<template>
    <div class="detail-header" :style="headerOpcity" v-show="showHeader" ref="header">
        <div class="header-back" @click="back"><span class="iconfont icon-back">&#xe64c;</span></div>
        <div class="header-like" @click="clickLike"><span class="iconfont icon-like" ref="like">&#xe60c;</span>{{extraData.popularity}}
        </div>
        <router-link :to="'/comment/'+this.$route.params.id" tag="div" class="header-comment"><span
                class="iconfont icon-comment">&#xe638;</span>{{extraData.comments}}
        </router-link>
        <div class="header-star" @click="changeStar"><span class="iconfont icon-star" ref="star">&#xe61b;</span></div>
        <div class="header-share" @click="showShareClick"><span class="iconfont icon-share">&#xe624;</span></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'detailHeader',
        data() {
            return {
                headerOpcity: {
                    opacity: 1
                },
                showHeader: true,
                isLike: false,
                isStar: false
            }
        },
        props: ['prevParams'],
        computed: {
            ...mapState(['extraData', 'showShare', 'collectId','likeId'])
        },
        methods: {
            //根据滑动的距离计算头部的透明度
            changeHeaderOpacity() {
                let top = document.documentElement.scrollTop
                if (top < 120) {
                    this.showHeader = true;
                    top = top > 120 ? 120 : top;
                    this.headerOpcity.opacity = (120 - top) / 120;
                } else {
                    this.showHeader = false;
                }
            },
            //判断是否夜间模式,添加dudu-night类名
            changeNight() {
                if (this.night) {
                    document.body.classList.add('dudu-night')
                } else {
                    document.body.classList.remove('dudu-night')
                }
            },
            //点赞
            clickLike() {
                if(this.isLike) {
                    this.$store.dispatch('removeLikeId',this.$route.params.id)
                }else {
                    this.$store.dispatch('addLikeId',this.$route.params.id)
                }
                this.isLike = !this.isLike


                //根据isLike改变vuex中extraData.popularity的值，并且添加或删除icon-is-like类
                if (this.isLike) {
                    this.$store.dispatch('changePopularity', this.extraData.popularity + 1)
                    this.$refs.like.classList.add('icon-is-like')
                } else {
                    this.$store.dispatch('changePopularity', this.extraData.popularity - 1)
                    this.$refs.like.classList.remove('icon-is-like')
                }
            },
            //是否收藏
            changeStar() {
                if (this.isStar) {
                    this.$refs.star.classList.remove('isStar')
                    this.$store.dispatch('removeCollectId', this.$route.params.id)
                } else {
                    this.$refs.star.classList.add('isStar')
                    this.$store.dispatch('addCollectId', this.$route.params.id)
                }
                this.isStar = !this.isStar
            },
            //页面加载时判断是否被收藏
            mountedStar() {
                this.$refs.star.classList.add('isStar')
                this.isStar = true
            },
            //是否显示分享组件
            showShareClick() {
                this.$store.dispatch('changeShowShare')
            },
            mountedLike() {
                this.$store.dispatch('changePopularity', this.extraData.popularity + 1)
                this.$refs.like.classList.add('icon-is-like')
                this.isLike = true
            },
            //点击返回键，根据上一页的路由路径返回上一页
            back() {
                this.$router.push(this.prevParams)
            }
        },
        // watch: {
        //     //根据isLike改变vuex中extraData.popularity的值，并且添加或删除icon-is-like类
        //     isLike(newVal) {
        //         if (newVal) {
        //             this.$store.dispatch('changePopularity', this.extraData.popularity + 1)
        //             this.$refs.like.classList.add('icon-is-like')
        //         } else {
        //             this.$store.dispatch('changePopularity', this.extraData.popularity - 1)
        //             this.$refs.like.classList.remove('icon-is-like')
        //         }
        //     }
        // },
        mounted() {
            //设置事件改变头部的透明度
            window.addEventListener('scroll', this.changeHeaderOpacity)
            //判断是否夜间模式
            this.changeNight()
            //重置收藏标记
            this.isStar = false
            //页面加载时判断是否被收藏
            if (this.collectId.indexOf(this.$route.params.id) != -1) {
                this.mountedStar()
            }
            if (this.likeId.indexOf(this.$route.params.id) != -1) {
                this.mountedLike()
            }
        },
        destroyed() {
            //解除全局绑定
            window.removeEventListener('scroll', this.changeHeaderOpacity)
        }
    }
</script>

<style scoped lang="less">
    .detail-header {
        width: 100%;
        background-color: @baseBlueColor;
        overflow: hidden;
        font-size: .35rem;
        color: @fWhite;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
        padding-top: 5%;

        div {
            display: inline-block;
            padding-bottom: 10%;
            height: 0;
            margin: 0 .1rem;

            &.header-star, .header-share {
                margin: 0 .35rem;

                .isStar {
                    color: @starColor !important;
                }
            }
        }

        .header-back {
            float: left;
            margin: 0 0 0 .25rem;
        }

        .header-comment, .header-like, .header-star, .header-share {
            float: right;
        }

        .icon-comment, .icon-like {
            margin-right: .1rem;
        }


    }

    .dudu-night .detail-header {
        background-color: @baseBlueColorNight;
    }

    .icon-is-like {
        color: @likeColor;
    }
</style>
