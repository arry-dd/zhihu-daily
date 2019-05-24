<template>
    <div class="detail-img">
        <div class="img" :style="{ backgroundImage: 'url(' +image.url[0]+ ')' }"></div>
        <div class="detail-title">{{image.title}}</div>
        <div class="detail-source">{{image.image_source}}</div>
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
            bottom: .45rem;
            font-size: .35rem;
            margin-left: .25rem;
            color: @fWhite;
        }
        .detail-source {
            position: absolute;
            bottom: .15rem;
            right: .25rem;
            font-size: .2rem;
            color: @source;
        }
    }
</style>
