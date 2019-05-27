<template>
    <div class="detail">
        <detail-header v-if="show" :prevParams="prevParams"></detail-header>
        <detail-img :image="image" v-if="show"></detail-img>
        <detail-content :body="body" v-if="show"></detail-content>
        <fade-animation>
            <detail-share v-show="showShare" v-if="show"></detail-share>
        </fade-animation>
        <div class="detail-load" v-if="!show">
            <div class="detail-load-container">
                <span class="iconfont icon-load">&#xe70f;</span>
                <p>浏览器君正在拼命加载...</p>
            </div>
        </div>
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
                body: '',
                //等数据加载完再渲染的标志
                show: false,
                prevParams: ''
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
                //等数据加载完再渲染
                this.show = true
            }
        },
        mounted() {
            this.getDetailData()
            this.getDetailExtraData()
            this.show = false
        },
        //获取在导航完成前获取上一页的路由路径
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.prevParams = from.path
            });
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
