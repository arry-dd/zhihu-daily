<template>
    <div class="collect-content">
        <ul class="collect-ul">
            <router-link tag="li" :to="'/detail/'+item.id" class="collect-info" v-for="(item,index) in collectList"
                         :key="index">
                <div class="collect-info-desc">{{item.title}}</div>
                <img class="collect-info-img" :src="item.image">
            </router-link>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'collectContent',
        props: ['collectList'],
        mounted() {
            //判断是否夜间模式
            this.changeNight()
        },
        methods: {
            //判断是否夜间模式,添加dudu-night类名
            changeNight() {
                if (this.night) {
                    document.body.classList.add('dudu-night')
                } else {
                    document.body.classList.remove('dudu-night')
                }
            }
        },
        computed: {
            ...mapState(['night'])
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
            }
        }
    }

    .dudu-night .collect-ul {
        background-color: @bgColorNight !important;
    }

    .dudu-night .collect-info {
        background-color: @fWhiteNight !important;
    }

    .dudu-night .collect-info-desc {
        color: @textColorUnclickNight !important;
    }

    .dudu-night .collect-content {
        background-color: @bgColorNight !important;
    }
</style>
