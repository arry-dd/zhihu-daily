<template>
    <div class="detail-header" :style="headerOpcity"  v-show="showHeader" ref="header">
        <router-link to="/" tag="div" class="header-back"><span class="iconfont icon-back">&#xe64c;</span></router-link>
        <div class="header-like" @click="clickLike"><span class="iconfont icon-like" ref="like">&#xe60c;</span>{{extraData.popularity}}</div>
        <router-link :to="'/comment/'+this.$route.params.id" tag="div" class="header-comment"><span class="iconfont icon-comment">&#xe638;</span>{{extraData.comments}}</router-link>
        <div class="header-star" @click="changeStar"><span class="iconfont icon-star"  ref="star">&#xe61b;</span></div>
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
        computed: {
            ...mapState(['extraData','showShare'])
        },
        methods: {
        //根据滑动的距离计算头部的透明度
            changeHeaderOpacity() {
                let top = document.documentElement.scrollTop
                if (top < 120) {
                    this.showHeader = true;
                    top = top > 120 ? 120 : top;
                    this.headerOpcity.opacity = (120-top) / 120;
                } else {
                    this.showHeader = false;
                }
            },
        //判断是否夜间模式
            changeNight() {
                if(this.night) {
                    document.body.classList.add('dudu-night')
                }else {
                    document.body.classList.remove('dudu-night')
                }
            },
            //点赞
            clickLike() {
                this.isLike = !this.isLike
            },
            //是否收藏
            changeStar() {
                if(this.isStar) {
                    this.$refs.star.classList.remove('isStar')
                }else {
                    this.$refs.star.classList.add('isStar')
                }
                this.isStar = !this.isStar
            },
            //是否显示分享组件
            showShareClick() {
                this.$store.dispatch('changeShowShare')
            }
        },
        watch: {
        //根据isLike改变vuex中extraData.popularity的值，并且添加或删除icon-is-like类
            isLike(newVal) {
                if(newVal) {
                    this.$store.dispatch('changePopularity',this.extraData.popularity+1)
                    this.$refs.like.classList.add('icon-is-like')
                }else {
                    this.$store.dispatch('changePopularity',this.extraData.popularity-1)
                    this.$refs.like.classList.remove('icon-is-like')
                }
            }
        },
        mounted() {
        //设置事件改变头部的透明度
            window.addEventListener('scroll', this.changeHeaderOpacity)
            //判断是否夜间模式
            this.changeNight()
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
                    color: @starColor!important;
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
