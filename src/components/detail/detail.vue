<template>
    <div class="detail">
        <detail-header></detail-header>
    </div>
</template>

<script>
    import axios from 'axios'
    import detailHeader from 'detail/com/detailHeader'
    export default {
        name: 'detail',
        components: {
            detailHeader
        },
        methods: {
            getDetailData() {
                axios.get('/api/4/news/9711670')
                    .then(this.getDetailDataSucc)
            },
            getDetailDataSucc(ret) {
                const data = ret.data
                console.log(data)
            }
        },
        mounted() {
            this.getDetailData()
        }
    }
</script>

<style>

</style>
