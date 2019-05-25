<template>
    <div class="long-comment">
        <div class="long-comment-title">{{longComment.length}} 条长评</div>
        <ul class="long-comment-ul">
            <li class="long-comment-content" v-for="(item,index) in longComment" :key="index">
                <div class="content-img">
                    <img :src="item.avatar">
                </div>
                <div class="content-text">
                    <div class="content-text-top">
                        <div class="content-text-author">{{item.author}}</div>
                        <div class="content-text-like"><span class="iconfont icon-like">&#xe60c;</span> {{item.likes}}</div>
                    </div>
                    <div class="content-text-centre">
                        <div class="content-text-conent">{{item.content}}</div>
                        <div class="content-text-reply"  v-if="item.reply_to">
                            <b>//{{item.reply_to.author}}:</b>{{item.reply_to.content}}
                        </div>
                    </div>
                    <div class="content-text-bottom">{{formatTime(item.time)}}</div>
                </div>
            </li>
        </ul>
        <div class="long-comment-title">12 条短评</div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'longComment',
        computed: {
            ...mapState(['longComment'])
        },
        // data() {
        //     return {
        //         longCommentLength:
        //     }
        // },
        methods: {
            //格式化时间
            formatTime(time) {
                let unixTimestamp = new Date( time*1000 ) ;
                let month = unixTimestamp.getMonth()+1
                if(month < 10) {
                    month = '0'+month
                }
                let date = unixTimestamp.getDate();
                if(date < 10) {
                    date = '0'+date
                }
                let hours = unixTimestamp.getHours();
                if(hours < 10) {
                    hours = '0'+hours
                }
                let minutes = unixTimestamp.getMinutes();
                if(minutes < 10) {
                    minutes = '0'+minutes
                }
                return month+'-'+date+' '+hours+':'+minutes
            }
        },
        // watch: {
        //     longComment(newVal) {
        //
        //     }
        // }
    }
</script>

<style scoped lang="less">
    .long-comment {
        margin-top: 15%;
        width: 100%;
        height: 0;
        .long-comment-title {
            padding-bottom: 8%;
            overflow: hidden;
            /*background-color: pink;*/
            height: 0;
            padding-top: 4%;
            padding-left: 4%;
            font-size: .25rem;
            color: @commentContentLight;
            border-bottom: 0.02rem solid @commentBorder;
        }
        .long-comment-ul {
            border-bottom: 0.02rem solid @commentBorder;
            overflow: hidden;
            .long-comment-content {
                display: flex;
                margin-left: 5%;
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
                        font-size: .35rem;
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
    }
</style>
