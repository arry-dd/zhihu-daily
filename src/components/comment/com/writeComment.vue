<template>
    <div class="write-comment">
        <textarea placeholder="不友善言论会被删除，深度评论会被优先展示。" style="vertical-align:top;outline:none; resize:none;" wrap="hard"
                  class="write-comment-text" ref="text" v-model="inputText"></textarea>
        <div class="write-comment-share">
            同时分享到: <span class="iconfont iconfont-xinglang">&#xe660;</span>
            <span class="iconfont iconfont-tengxun">&#xe661;</span>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'writeComment',
        data() {
            return {
                inputText: ''
            }
        },
        computed: {
            ...mapState(['myComment', 'night', 'writting', 'user'])
        },
        mounted() {
            //判断是否夜间模式
            this.changeNight()
            //文本框获取焦点
            this.$refs.text.focus()
            //重置写评论标记
            this.$store.dispatch('changeWritting', false)
        },
        watch: {
        //向state中的myComment写入当前的评论
            writting(newVal) {
                if (newVal == true && this.inputText) {
                    let name = this.user.id;
                    let head = this.user.head;
                    let date = new Date();
                    let month = date.getMonth() + 1;
                    // if (month < 10) {
                    //     month = '0' + month
                    // }
                    month = month.toString().padStart(2,'0')
                    let date1 = date.getDate();
                    // if (date1 < 10) {
                    //     date1 = '0' + date1
                    // }
                    date1 = date1.toString().padStart(2,'0')
                    let hour = date.getHours();
                    // if (hour < 10) {
                    //     hour = '0' + hour
                    // }
                    hour = hour.toString().padStart(2,'0')
                    let minute = date.getMinutes();
                    // if (minute < 10) {
                    //     minute = '0' + minute
                    // }
                    minute = minute.toString().padStart(2,'0')
                    let time = month + '-' + date1 + ' ' + hour + ':' + minute;

                    let obj = {
                        "id": this.$route.params.id,
                        "name": name,
                        "head": head,
                        "comment": this.inputText,
                        "time": time
                    };
                    this.$store.dispatch('addMyComment', obj)
                    this.$store.dispatch('changeWritting', false)
                    this.$emit('closeWrite')
                }
            }
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
        }
    }
</script>

<style scoped lang="less">
    .write-comment {
        padding-top: 15%;
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column;
        background-color: @fWhite;

        .write-comment-text {
            width: 96%;
            font-size: .3rem;
            margin: 2% auto;
            box-sizing: border-box;
            flex: 1;
            border-bottom: 1px solid @writeBorder;
        }

        .write-comment-share {
            width: 100%;
            padding: 7% 5% 5% 5%;
            box-sizing: border-box;

            .iconfont-xinglang {
                color: #f35924 !important;
            }

            .iconfont-tengxun {
                color: #777777 !important;
            }
        }
    }

    .dudu-night .write-comment, .dudu-night .write-comment-text {
        background-color: @writeTextAreaBgNight !important;
        color: @writeTextAreaColorNight;
    }

    .dudu-night .write-comment-share {
        background-color: @writeShareBg !important;
        color: @shareTextNight;
    }
</style>
