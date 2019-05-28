<template>
    <div class="write-comment">
<!--        <input type="text" placeholder="不友善言论会被删除，深度评论会被优先展示。" class="write-comment-text">-->
        <textarea placeholder="不友善言论会被删除，深度评论会被优先展示。"  style="vertical-align:top;outline:none;" wrap="hard" class="write-comment-text" ref="text" v-model="inputText"></textarea>
        <div class="write-comment-share">
            同时分享到: <span class="iconfont iconfont-xinglang">&#xe660;</span>
            <span class="iconfont iconfont-tengxun">&#xe661;</span>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'writeComment',
        data() {
            return {
                inputText: ''
            }
        },
        mounted() {
            this.$refs.text.focus()
        },
        updated() {
            console.log(this.inputText)
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
        .write-comment-text {
            width: 100%;
            height: 50%;
            vertical-align: text-top!important;
        }
        .write-comment-share {
            background-color: pink;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 7% 5% 5% 5%;

            .iconfont-xinglang {
                color: #f35924;
            }

            .iconfont-tengxun {
                color: #777777;
            }
        }
    }
</style>
