<template>
    <div class="share" @click.self="closeShare" @touchmove.prevent>
        <div class="share-box">
            <div class="share-text">分享</div>
            <ul class="share-icon">
                <li class="share-icon-weichat"><span class="iconfont iconfont-weichat">&#xe662;</span>微信</li>
                <li class="share-icon-tengxun"><span class="iconfont iconfont-tengxun">&#xe661;</span>腾讯微博</li>
                <li class="share-icon-xinlang"><span class="iconfont iconfont-xinglang">&#xe660;</span>新浪微博</li>
                <li class="share-icon-qq"><span class="iconfont iconfont-qq">&#xe65f;</span>qq</li>
                <li class="share-icon-qzone"><span class="iconfont iconfont-qzone">&#xe65e;</span>qq空间</li>
                <li class="share-icon-facebook"><span class="iconfont iconfont-facebook">&#xe65a;</span>Facebook</li>
            </ul>
            <div class="share-more">更多平台</div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'detailShare',
        methods: {
            closeShare() {
                this.$store.dispatch('changeShowShare')
            },
            //判断是否夜间模式
            changeNight() {
                if(this.night) {
                    document.body.classList.add('dudu-night')
                }else {
                    document.body.classList.remove('dudu-night')
                }
            }
        },
        computed: {
            ...mapState(['night'])
        },
        mounted() {
            //判断是否夜间模式
            this.changeNight()
        }
    }
</script>

<style scoped lang="less">
    .share {
        position: fixed;
        z-index: 15;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: table-cell;
        vertical-align: middle;

        .share-box {
            padding-bottom: 85%;
            width: 90%;
            background-color: @fWhite;
            /*background-color: lightgreen;*/
            height: 0;
            margin: auto;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 1!important;
            .share-text {
                padding-bottom: 10%;
                width: 94%;
                /*background-color: lightblue;*/
                margin: 3% 10% 0 3%;
                height: 0;
            }
            li {
                display: inline-block;
                width: 33.3%;
                text-align: center;
                margin-bottom: 10%;
                font-size: .2rem;
                color: @shareText;
                span {
                    font-size: 1rem;
                    display: block;
                    margin-bottom: .1rem;
                }
                .iconfont-weichat {
                    color: #8DC81B;
                }
                .iconfont-tengxun {
                    color: #38A6D7;
                }
                .iconfont-xinglang {
                    color: #F56467;
                }
                .iconfont-qq {
                    color: #68A5E1;
                }
                .iconfont-qzone {
                    color: #F5BE3F;
                }
                .iconfont-facebook {
                    color: #537BBC;
                }
            }
            .share-more {
                width: 30%;
                background-color: lightgreen;
                margin: 0 auto;
                text-align: center;
                height: .6rem;
                line-height: 30px;
                border-radius: .6rem;
            }
        }
    }
    .dudu-night .share-box {
        background-color: @shareBoxNight;
    }
    .dudu-night li {
        color: @shareText;
    }
</style>
