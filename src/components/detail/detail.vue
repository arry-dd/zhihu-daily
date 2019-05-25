<template>
    <div class="detail">
        <detail-header></detail-header>
        <detail-img :image="image"></detail-img>
        <detail-content :body="body"></detail-content>
        <fade-animation>
            <detail-share v-show="showShare"></detail-share>
        </fade-animation>

    </div>
</template>

<script>
    import axios from 'axios'
    import detailHeader from 'detail/com/detailHeader'
    import detailImg from 'detail/com/detailImg'
    import detailContent from 'detail/com/detailContent'
    import detailShare from 'detail/com/detailShare'
    import fadeAnimation from 'common/fadeAnimation'
    import {mapState} from 'vuex'

    export default {
        name: 'detail',
        data() {
            return {
                image: {
                    url: [],
                    title: '',
                    image_source: ''
                },
                body: ''
            }
        },
        computed: {
            ...mapState(['extraData', 'showShare'])
        },
        components: {
            detailHeader,
            detailImg,
            detailContent,
            detailShare,
            fadeAnimation
        },
        methods: {
            //根据url的id进行对具体新闻内容的请求
            getDetailData() {
                axios.get('/api/4/news/' + this.$route.params.id)
                    .then(this.getDetailDataSucc)
            },
            getDetailDataSucc(ret) {
                const data = ret.data
                if (data) {
                    this.image.url = data.images
                    this.image.title = data.title
                    this.image.image_source = data.image_source
                    this.body = data.body
                }
            },
            //根据url的id进行对具体新闻额外内容的请求，例如评论和点赞数
            getDetailExtraData() {
                axios.get('/api/4/story-extra/' + this.$route.params.id)
                    .then(this.getDetailExtraDataSucc)
            },
            getDetailExtraDataSucc(ret) {
                const data = ret.data
                if (data) {
                    this.$store.dispatch('changeExtraData', data)
                }
            }
        },
        mounted() {
            this.getDetailData()
            this.getDetailExtraData()
        }
    }
</script>

<style>

</style>
