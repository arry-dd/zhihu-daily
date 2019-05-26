<template>
    <div class="comment-header">
        <router-link :to="'/detail/'+this.$route.params.id" tag="div" class="header-back"><span class="iconfont icon-back">&#xe64c;</span></router-link>
        <div class="header-text">16条点评</div>
        <div class="header-write"><span class="iconfont icon-write">&#xe702;</span></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'commentHeader',
        mounted() {
            //判断是否夜间模式
            this.changeNight()
        },
        methods: {
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
        }
    }
</script>

<style scoped lang="less">
    .comment-header {
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
        }

        .header-back {
            float: left;
            margin: 0 0 0 .25rem;
        }

        .header-text {
            float: left;
            margin-left: .4rem;
        }

        .header-write {
            float: right;
            margin: 0 .25rem 0 0;
        }

        .header-comment, .header-like, .header-star, .header-share {
            float: right;
        }

        .icon-comment, .icon-like {
            margin-right: .1rem;
        }


    }
    .dudu-night .comment-header {
        background-color: @baseBlueColorNight;
    }
</style>
