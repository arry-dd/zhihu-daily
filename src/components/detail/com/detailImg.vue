<template>
    <div class="detail-img">
        <div class="img" :style="{ backgroundImage: 'url(' +image.url[0]+ ')' }"></div>
        <div class="detail-title">{{image.title}}</div>
        <div class="detail-source">{{image.image_source}}</div>
        <div class="detail-img-mask" v-show="image.url.length"></div>
    </div>
</template>

<script>

    export default {
        name: 'detailImg',
        components: {
        },
        props:['image']
    }
</script>

<style scoped lang="less">
    .detail-img {
        margin-top: 15%;
        position: relative;
        .img {
            width: 100%;
            padding-bottom: 50%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        .detail-title {
            position: absolute;
            bottom: .35rem;
            font-size: .35rem;
            margin-left: .25rem;
            line-height: .4rem;
            color: @fWhite;
            z-index: 2;
        }
        .detail-source {
            position: absolute;
            bottom: .15rem;
            right: .25rem;
            font-size: .2rem;
            color: @source;
            z-index: 2;
        }
        .detail-img-mask {
            position: absolute;
            bottom: 0;
            width: 100%;
            padding-bottom: 15%;
            background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.7));
        }
    }
</style>
