<template>
    <div class="collect-content">
        <ul class="collect-ul">
            <li class="collect-info" v-for="(item,index) in collectList" :key="index">
                <div class="collect-info-desc">{{item.title}}</div>
                <img class="collect-info-img" :src="item.image">
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import axios from 'axios'

    export default {
        name: 'collectContent',
        computed: {
            ...mapState(['collectId'])
        },
        data() {
            return {
                collectList: []
            }
        },
        methods: {
            getColletInfo() {
                let len = this.collectId.length
                for (let i = 0; i < len; i++) {
                    axios.get('/api/4/news/' + this.collectId[i])
                        .then(this.getColletInfoSucc)
                }
            },
            getColletInfoSucc(ret) {
                if (ret.data) {
                    this.collectList.push(ret.data)
                }
            }
        },
        mounted() {
            this.getColletInfo()
            //清空
            this.collectList = []
        }
    }
</script>

<style scoped lang="less">
    .collect-content {
        margin-top: 15%;
        background-color: @bgColor;
        position: absolute;
        width: 100%;
        height: 100%;

        .collect-ul {
            text-align: center;
            overflow: hidden;

            &.collect-ul-night, &.news-past-night {
                background-color: @bgColorNight;
            }
        }

        .collect-info {
            margin-top: .1rem;
            width: 96%;
            padding-bottom: 25%;
            background-color: @fWhite;
            display: inline-block;
            border-radius: .1rem;
            overflow: hidden;
            height: 0;

            &.collect-info-night {
                background-color: @fWhiteNight;
            }

            .collect-info-img {
                width: 20%;
                float: right;
                padding: 0;
                vertical-align: middle;
                margin: .18rem .3rem .18rem 0;
                opacity: 1 !important;
            }

            .collect-info-desc {
                float: left;
                width: 60%;
                margin: .3rem .3rem;
                color: @textColorUnclick;
                line-height: .35rem;
                text-align: left;

                &.collect-info-desc-night {
                    color: @textColorUnclickNight;
                }
            }
        }
    }
</style>
