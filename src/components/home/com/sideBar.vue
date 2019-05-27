<template>
    <div class="side-bar" @click.self="closeSideBar" @touchmove.prevent>
        <div class="side-bar-content">
            <div class="content-top">
                <div class="content-top-user">
                    <div class="content-top-user-head">
                        <img src="http://pic1.zhimg.com/332ae97ce262070a56958a2bedf3f64c_im.jpg">
                    </div>
                    <div class="content-top-user-name"><p>知了个乎</p></div>
                </div>
                <div class="content-top-two">
                    <div @click="goToCollect" class="content-top-two-star"><span class="iconfont">&#xe61b;</span>我的收藏</div>
                    <div class="content-top-two-download"><span class="iconfont">&#xe752;</span>我的下载</div>
                </div>
            </div>
            <div class="content-bottom">
                <div @click="goToHome" class="content-bottom-home"><span class="iconfont">&#xe67d;</span>首页</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'sideBar',
        methods: {
            closeSideBar() {
                this.$emit('closeSideBar')
            },
            //判断是否夜间模式,添加dudu-night类名
            changeNight() {
                if(this.night) {
                    document.body.classList.add('dudu-night')
                }else {
                    document.body.classList.remove('dudu-night')
                }
            },
            //判断路由路径是否是主页面的路径，如果是就关闭侧边栏，否则就跳转到主页
            goToHome() {
                if(this.$route.path == '/') {
                    this.$emit('closeSideBar')
                } else {
                    this.$router.push('/')
                }
            },
            //判断路由路径是否是收藏页面的路径，如果是就关闭侧边栏，否则就跳转到收藏页
            goToCollect() {
                if(this.$route.path == '/collect') {
                    this.$emit('closeSideBar')
                } else {
                    this.$router.push('/collect')
                }
            }
        },
        computed: {
            ...mapState(['night'])
        },
        watch: {
            night() {
                this.changeNight()
            }
        }
    }
</script>

<style scoped lang="less">
    .dudu-night .content-top {
        background-color: @sideBarTopbgNight !important;
    }

    .dudu-night .content-top-user-name {
        color: @sideBarIdNight!important;
    }
    .dudu-night .content-top-two-star, .dudu-night .content-top-two-download {
        color: @sideBarStarAndDownload;
    }
    .dudu-night .content-bottom {
        background-color: @bgColorNight!important;
    }
    .dudu-night .content-bottom-home {
        background-color: @sideBarHomebgNight!important;
    }
    .side-bar {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .7);
        z-index: 100;
        top: 0;

        .side-bar-content {
            width: 75%;
            height: 100%;

            .content-top {
                width: 100%;
                height: 20%;
                background-color: @baseBlueColor;

                .content-top-user {
                    height: 50%;
                    overflow: hidden;

                    .content-top-user-head {
                        width: 20%;
                        height: 100%;
                        float: left;

                        img {
                            width: 60%;
                            margin: 20% 20%;
                            border-radius: 50%;
                        }
                    }

                    .content-top-user-name {
                        width: 80%;
                        float: right;
                        vertical-align: middle;
                        display: table-cell;
                        color: @fWhite;
                    }

                }

                .content-top-two {
                    height: 50%;
                    width: 100%;
                    color: @fWhite;

                    .content-top-two-star, .content-top-two-download {
                        width: 50%;
                        float: left;
                        height: 100%;
                        padding: 8% 0;
                        box-sizing: border-box;
                        text-align: center;
                        font-weight: 500;

                        span {
                            margin-right: 10%;
                            color: @fWhite!important;
                        }
                    }

                    .content-top-two-download {
                        width: 50%;
                        float: right;
                        height: 100%;
                    }
                }
            }

            .content-bottom {
                width: 100%;
                height: 80%;
                background-color: @fWhite;

                .content-bottom-home {
                    width: 100%;
                    height: 10%;
                    padding: 5% 0 5% 6%;
                    box-sizing: border-box;
                    color: @baseBlueColor;
                    background-color: @sideBarHomebg;

                    span {
                        margin-right: 4%;
                    }
                }
            }
        }
    }
</style>
