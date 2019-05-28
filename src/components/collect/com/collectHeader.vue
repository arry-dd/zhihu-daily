<template>
    <div class="collectHeader">
        <div class="header">
            <div class="header-menu"><span class="iconfont icon-menu" @click="showSideBar">&#xe605;</span></div>
            <div class="header-text">{{collectId.length}} 条收藏</div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'collectHeader',
        methods: {
            //点击菜单按钮，向父组件发送要显示侧边栏的请求
            showSideBar() {
                this.$emit('showSideBar')
            },
            //判断是否夜间模式,添加dudu-night类名
            changeNight() {
                if(this.night) {
                    document.body.classList.add('dudu-night')
                }else {
                    document.body.classList.remove('dudu-night')
                }
            }
        },
        computed: {
            ...mapState(['night','collectId'])
        },
        mounted() {
            //判断是否夜间模式
            this.changeNight()
        }
    }
</script>

<style scoped lang="less">
    .header {
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
            margin: 0 .25rem;
        }

        .header-menu, .header-text {
            float: left;
        }
    }
    .dudu-night .header {
        background-color: @baseBlueColorNight!important;
    }
</style>
