<template>
    <div>
        <div :class="headerClass">
            <div class="header-menu" @click="showSideBar"><span class="iconfont icon-menu">&#xe605;</span></div>
            <div class="header-text">首页</div>
            <div class="header-set" @click="settingShow"><span class="iconfont icon-set">&#xe6a9;</span></div>
            <div class="header-alert"><span class="iconfont icon-alert">&#xe794;</span></div>
        </div>
        <fadeAnimation>
            <div class="setting" v-if="flagSettingShow">
                <ul>
                    <li class="setting-night" @click="changeColor">{{nightText}}</li>
                    <li class="setting-detail">设置选项</li>
                </ul>
            </div>
        </fadeAnimation>

    </div>

</template>

<script>
    import {mapState} from 'vuex'
    import fadeAnimation from 'common/fadeAnimation'

    export default {
        name: 'homeHeader',
        components: {
            fadeAnimation
        },
        data() {
            return {
                headerClass: 'header',
                flagSettingShow: false,
                nightText : '夜间模式'
            }
        },
        computed: {
            ...mapState(['topStories', 'night'])
        },
        methods: {
            changeColor() {
                this.$store.commit('changeNight')
                // this.flagSettingShow = false
            },
            isNight() {
                if (this.night == true) {
                    this.headerClass = 'header header-night'
                } else {
                    this.headerClass = 'header'
                }
            },
            //是否显示设置栏
            settingShow() {
                this.flagSettingShow = !this.flagSettingShow
            },
            //点击菜单按钮，向父组件发送要显示侧边栏的请求
            showSideBar() {
                this.$emit('showSideBar')
            }
        },
        watch: {
            //监听night进行夜间模式切换
            night(newVal) {
                this.isNight()
                if(newVal) {
                    this.nightText = '日间模式'
                }else {
                    this.nightText = '夜间模式'
                }
            },
            flagSettingShow() {
                if(this.flagSettingShow) {
                    window.addEventListener('click',this.settingShow)
                }else {
                    window.removeEventListener('click',this.settingShow)
                }
            },
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

        &.header-night {
            background-color: @baseBlueColorNight;
        }

        div {
            display: inline-block;
            /*height: 1.1rem;*/
            /*line-height: 1.1rem;*/
            padding-bottom: 10%;
            height: 0;
            margin: 0 .25rem;
            /*box-sizing: border-box;*/
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
            font-size: .45rem;
        }

    }

    .setting {
        position: fixed;
        z-index: 10;
        padding-bottom: 25%;
        width: 50%;
        right: .1rem;
        top: .1rem;
        height: 0;
        background-color: @bgColor;

        li {
            font-size: .3rem;
            margin: .3rem 0 .3rem .3rem;
            color: @textColorUnclick;
        }

    }
</style>
