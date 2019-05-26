<template>
    <div class="comment">
        <comment-header></comment-header>
        <long-comment></long-comment>
    </div>
</template>

<script>
    import commentHeader from 'comment/com/commentHeader'
    import longComment from 'comment/com/longComment'
    import axios from 'axios'

    export default {
        name: 'comment',
        components: {
            commentHeader,
            longComment
        },
        methods: {
            getLongComment() {
                axios.get('/api/4/story/'+this.$route.params.id+'/long-comments')
                    .then(this.getLongCommentSucc)
            },
            getLongCommentSucc(ret) {
                const data = ret.data
                if(data.comments) {
                    this.$store.dispatch('changeLongComment',data.comments)
                }
            },
            getShortComment() {
                axios.get('/api/4/story/'+this.$route.params.id+'/short-comments')
                    .then(this.getShortCommentSucc)
            },
            getShortCommentSucc(ret) {
                const data = ret.data
                if(data.comments) {
                    this.$store.dispatch('changeShortComment',data.comments)
                }
            }
        },
        mounted() {
            this.getLongComment()
            this.getShortComment()
        }
    }
</script>

<style>

</style>
