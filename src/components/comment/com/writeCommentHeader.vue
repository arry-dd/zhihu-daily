<template>
    <div class="write-comment-header">
        <div class="header-back" @click="closeWrite"><span class="iconfont icon-back">&#xe64c;</span></div>
        <div class="header-text">写点评</div>
        <div class="header-plane" @click="sendComment"><span class="iconfont icon-plane">&#xe717;</span></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'writeCommentHeader',
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
            },
            //点击返回按钮给父组件传递关闭写组件的命令
            closeWrite() {
                this.$emit('closeWrite')
            },
            //点击写按钮
            sendComment() {
                this.$store.dispatch('changeWritting',true)
            }
        },
        computed: {
            ...mapState(['night'])
        }
    }
</script>

<style scoped lang="less">
    .write-comment-header {
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

        .header-plane {
            float: right;
            margin: 0 .25rem 0 0;
        }


    }
    .dudu-night .write-comment-header {
        background-color: @baseBlueColorNight;
    }
</style>
