<template>
    <div class="header">
            <div class="header-back"><span class="iconfont icon-back">&#xe64c;</span></div>
            <div class="header-like"><span class="iconfont icon-like">&#xe60c;</span>220</div>
            <div class="header-comment"><span class="iconfont icon-comment">&#xe638;</span>38</div>
        <div class="header-star"><span class="iconfont icon-star">&#xe61b;</span></div>
        <div class="header-share"><span class="iconfont icon-share">&#xe624;</span></div>
    </div>
</template>

<script>

    export default {
        name: 'detailHeader',
        components: {
        }
    }
</script>

<style scoped lang="less">
    .header {
        width: 100%;
        background-color: @baseBlueColor;
        overflow: hidden;
        font-size: .35rem;
        color: @fWhite;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
        padding-top: 5%;

    &.header-night {
         background-color: @baseBlueColorNight;
     }

    div {
        display: inline-block;
        /*height: 1.1rem;*/
        /*line-height: 1.1rem;*/
        padding-bottom: 10%;
        height: 0;
        margin: 0 .1rem;
        /*box-sizing: border-box;*/
        &.header-star, .header-share {
            margin: 0 .35rem;
        }
    }

    .header-back{
        float: left;
        margin: 0 0 0 .25rem;
    }

    .header-comment, .header-like, .header-star, .header-share{
        float: right;
    }
    .icon-comment, .icon-like {
        margin-right: .1rem;
    }

    /*.icon-comment {*/
    /*    font-size: .5rem;*/
    /*}*/

    }
</style>
