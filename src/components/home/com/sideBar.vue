<template>
    <div class="side-bar">
        <div class="side-bar-content">
            <div class="content-top">
                <div class="content-top-user">
                    <div class="content-top-user-head">
                        <img src="http://pic1.zhimg.com/332ae97ce262070a56958a2bedf3f64c_im.jpg">
                    </div>
                    <div class="content-top-user-name"><p>知了个乎</p></div>
                </div>
                <div class="content-top-two">
                    <div class="content-top-two-star"><span class="iconfont">&#xe61b;</span>我的收藏</div>
                    <div class="content-top-two-download"><span class="iconfont">&#xe752;</span>我的收藏</div>
                </div>
            </div>
            <div class="content-bottom">
                <div class="content-bottom-home"><span class="iconfont">&#xe67d;</span>首页</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'sideBar',
        components: {}
    }
</script>

<style scoped lang="less">
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
                        vertical-align:middle;
                        display:table-cell;
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
                    background-color: lightgreen;
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
