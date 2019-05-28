<template>
    <div class="comment">
        <!--        <comment-header v-if="show"></comment-header>-->
        <write-comment-header></write-comment-header>
        <!--        <long-comment v-if="show"></long-comment>-->
        <write-comment></write-comment>
        <div class="detail-load" v-if="!show">
            <div class="detail-load-container">
                <span class="iconfont icon-load">&#xe70f;</span>
                <p>浏览器君正在拼命加载...</p>
            </div>
        </div>
    </div>
</template>

<script>
    import commentHeader from 'comment/com/commentHeader'
    import longComment from 'comment/com/longComment'
    import writeCommentHeader from 'comment/com/writeCommentHeader'
    import writeComment from 'comment/com/writeComment'
    import axios from 'axios'

    export default {
        name: 'comment',
        components: {
            commentHeader,
            longComment,
            writeCommentHeader,
            writeComment
        },
        data() {
            return {
                //等数据加载完再渲染的标志
                show: false
            }
        },
        methods: {
            getLongComment() {
                axios.get('/api/4/story/' + this.$route.params.id + '/long-comments')
                    .then(this.getLongCommentSucc)
            },
            getLongCommentSucc(ret) {
                const data = ret.data
                if (data.comments) {
                    this.$store.dispatch('changeLongComment', data.comments)
                }
                //等数据加载完再渲染
                this.show = true
            },
            getShortComment() {
                axios.get('/api/4/story/' + this.$route.params.id + '/short-comments')
                    .then(this.getShortCommentSucc)
            },
            getShortCommentSucc(ret) {
                const data = ret.data
                if (data.comments) {
                    this.$store.dispatch('changeShortComment', data.comments)
                }
            }
        },
        mounted() {
            this.getLongComment()
            this.getShortComment()
            this.show = false
        }
    }
</script>

<style scoped lang="less">
    .detail-load {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: @fWhite;

        .detail-load-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: @textColorClick;

            .icon-load {
                display: inline-block;
                font-size: 3rem;
            }

            p {
                font-size: .3rem;
            }
        }
    }
</style>
