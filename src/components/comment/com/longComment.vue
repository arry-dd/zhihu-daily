<template>
    <div class="comment">
        <div class="long-comment-title">{{longComment.length}} 条长评</div>
        <ul class="long-comment-ul">
            <li class="long-comment-content" v-for="(item,index) in longComment" :key="index">
                <div class="content-img">
                    <img :src="item.avatar">
                </div>
                <div class="content-text">
                    <div class="content-text-top">
                        <div class="content-text-author">{{item.author}}</div>
                        <div class="content-text-like"><span class="iconfont icon-like">&#xe60c;</span> {{item.likes}}
                        </div>
                    </div>
                    <div class="content-text-centre">
                        <div class="content-text-conent">{{item.content}}</div>
                        <div class="content-text-reply" v-if="item.reply_to">
                            <b>//{{item.reply_to.author}}:</b>{{item.reply_to.content}}
                        </div>
                    </div>
                    <div class="content-text-bottom">{{formatTime(item.time)}}</div>
                </div>
            </li>
        </ul>
        <div class="no-longComment" v-if="!longComment.length">
            <div class="no-longComment-content">
                <div class="no-longComment-content-sofa"><span class="iconfont">&#xe63b;</span></div>
                <div class="no-longComment-content-text">深度长评虚位以待</div>
            </div>
        </div>
        <div class="short-comment-title" @click="showShort">{{shortComment.length}} 条短评</div>
        <ul class="short-comment-ul" v-if="FlagShowShortComment">
            <li class="short-comment-content" v-for="(item,index) in shortComment" :key="index">
                <div class="content-img">
                    <img :src="item.avatar">
                </div>
                <div class="content-text">
                    <div class="content-text-top">
                        <div class="content-text-author">{{item.author}}</div>
                        <div class="content-text-like"><span class="iconfont icon-like">&#xe60c;</span> {{item.likes}}
                        </div>
                    </div>
                    <div class="content-text-centre">
                        <div class="content-text-conent">{{item.content}}</div>
                        <div class="content-text-reply" v-if="item.reply_to">
                            <b>//{{item.reply_to.author}}:</b>{{item.reply_to.content}}
                        </div>
                    </div>
                    <div class="content-text-bottom">{{formatTime(item.time)}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'longComment',
        computed: {
            ...mapState(['longComment', 'shortComment','night'])
        },
        data() {
            return {
                FlagShowShortComment: false
            }
        },
        methods: {
            //格式化时间
            formatTime(time) {
                let unixTimestamp = new Date(time * 1000);
                let month = unixTimestamp.getMonth() + 1
                if (month < 10) {
                    month = '0' + month
                }
                let date = unixTimestamp.getDate();
                if (date < 10) {
                    date = '0' + date
                }
                let hours = unixTimestamp.getHours();
                if (hours < 10) {
                    hours = '0' + hours
                }
                let minutes = unixTimestamp.getMinutes();
                if (minutes < 10) {
                    minutes = '0' + minutes
                }
                return month + '-' + date + ' ' + hours + ':' + minutes
            },
            //点击显示短评
            showShort() {
                this.FlagShowShortComment = true
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
        mounted() {
            //判断是否夜间模式
            this.changeNight()
        }
    }
</script>

<style scoped lang="less">
    .dudu-night .comment{
        background-color: @fWhiteNight!important;
    }
    .dudu-night .long-comment-title, .dudu-night .short-comment-title {
        color: @commentNameNight!important;
    }
    .dudu-night .content-text-author,.dudu-night .content-text-reply b{
        color: @commentNameNight!important;
    }
    .dudu-night  .long-comment-content, .dudu-night .short-comment-content {
        border-bottom: 0.02rem solid @commentBorderNight!important;
    }
    .dudu-night .long-comment-title, .dudu-night .short-comment-title {
        border-bottom: 0.02rem solid @commentBorderNight!important;
    }
    .dudu-night .content-text-conent {
        color: @commentTextNight!important;
    }
    .dudu-night .no-longComment-content {
        color: @sofaNight!important;
    }
    .comment {
        margin-top: 15%;
        width: 100%;
        background-color: @fWhite;
        position: absolute;
        min-height: 100%;
        .long-comment-title, .short-comment-title {
            padding-bottom: 8%;
            overflow: hidden;
            height: 0;
            padding-top: 4%;
            padding-left: 4%;
            font-size: .25rem;
            color: @commentContentLight;
            border-bottom: 0.02rem solid @commentBorder;
            font-weight: 700;
        }

        .long-comment-ul, .short-comment-ul {
            overflow: hidden;

            .long-comment-content, .short-comment-content {
                display: flex;
                border-bottom: 0.02rem solid @commentBorder;
                padding-left: 5%;

                .content-img {
                    width: 10%;
                    overflow: hidden;

                    img {
                        margin: 20% 10% 0 0;
                        width: 90%;
                        border-radius: 50%;
                        float: right;
                    }
                }

                .content-text {
                    float: right;
                    flex: 1;
                    margin-top: 4%;

                    .content-text-top {
                        width: 100%;
                        font-size: .25rem;
                        overflow: hidden;

                        .content-text-author {
                            float: left;
                            color: @commentName;
                            font-weight: 700;
                        }

                        .content-text-like {
                            float: right;
                            color: @commentLike;
                            margin-right: 4%;
                        }
                    }

                    .content-text-centre {
                        margin-right: 4%;

                        .content-text-conent {
                            margin-top: 5%;
                            font-size: .25rem;
                            line-height: .3rem;
                        }

                        .content-text-reply {
                            margin-top: 7%;
                            font-size: .25rem;
                            line-height: .3rem;
                            color: @shareText;

                            b {
                                font-weight: 700;
                                color: @commentName;
                            }
                        }
                    }

                    .content-text-bottom {
                        margin-top: 5%;
                        color: @commentTime;
                        font-size: .2rem;
                        margin-bottom: 5%;
                    }
                }
            }

        }

        .no-longComment {
            width: 100%;
            margin: 0 auto;
            height: 8.5rem;
            position: relative;
            vertical-align: middle;

            .no-longComment-content {
                width: 40%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                color: @sofa;

                .no-longComment-content-sofa span {
                    font-size: 2rem;
                }

                .no-longComment-content-text {
                    margin-top: .2rem;
                }
            }
        }
    }

</style>
