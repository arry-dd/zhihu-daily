<template>
    <div class="detail">
        <detail-header></detail-header>
        <detail-img :image="image"></detail-img>
        <detail-content :body="body" :css="css"></detail-content>
    </div>
</template>

<script>
    import axios from 'axios'
    import detailHeader from 'detail/com/detailHeader'
    import detailImg from 'detail/com/detailImg'
    import detailContent from 'detail/com/detailContent'

    export default {
        name: 'detail',
        data() {
            return {
                image: {
                    url: [],
                    title: '',
                    image_source: ''
                },
                body: '',
                css: []
            }
        },
        components: {
            detailHeader,
            detailImg,
            detailContent
        },
        methods: {
            getDetailData() {
                axios.get('/api/4/news/9711670')
                    .then(this.getDetailDataSucc)
            },
            getDetailDataSucc(ret) {
                const data = ret.data
                console.log(data)
                if (data) {
                    this.image.url = data.images
                    this.image.title = data.title
                    this.image.image_source = data.image_source
                    this.body = data.body
                    this.css = data.css
                }
            }
        },
        mounted() {
            this.getDetailData()
        }
    }
</script>

<style>

</style>
