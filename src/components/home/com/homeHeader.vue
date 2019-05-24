<template>
    <div :class="headerClass">
        <div class="header-menu"><span class="iconfont icon-menu">&#xe605;</span></div>
        <div class="header-text">首页</div>
        <div class="header-set" @click="changeColor"><span class="iconfont icon-set">&#xe6a9;</span></div>
        <div class="header-alert"><span class="iconfont icon-alert">&#xe794;</span></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'homeHeader',
        data() {
            return {
                headerClass: 'header'
            }
        },
        computed: {
            ...mapState(['topStories','night'])
        },
        methods: {
            changeColor() {
                this.$store.commit('changeNight')
            },
            isNight() {
                if(this.night == true) {
                    this.headerClass = 'header header-night'
                } else {
                    this.headerClass = 'header'
                }
            }
        },
        watch: {
        //监听night进行夜间模式切换
            night: function () {
                this.isNight()
            }
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
        &.header-night {
            background-color: @baseBlueColorNight;
        }
        div {
            display: inline-block;
            height: 1.1rem;
            line-height: 1.1rem;
            margin: 0 .25rem;
        }

        .header-menu, .header-text {
            float: left;
        }

        .header-alert, .header-set {
            float: right;
        }

        .icon-set {
            font-size: .4rem;
        }

        .icon-alert {
            font-size: .5rem;
        }

    }
</style>
