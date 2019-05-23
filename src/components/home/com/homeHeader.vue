<template>
    <div class="header">
        <div class="header-menu"><span class="iconfont icon-menu">&#xe605;</span></div>
        <div class="header-text">首页</div>
        <div class="header-set"><span class="iconfont icon-set">&#xe6a9;</span></div>
        <div class="header-alert"><span class="iconfont icon-alert">&#xe794;</span></div>
    </div>
</template>

<script>

    export default {
        name: 'homeHeader',
        components: {
        }
    }
</script>

<style scoped lang="less">
    @import '~styles/variable.less';
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
        div {
            display: inline-block;
            height: 1.1rem;
            line-height: 1.1rem;
            margin: 0 .25rem;
        }
        .header-menu, .header-text {
            float: left;
        }
        .header-alert, .header-set {
            float: right;
        }
        .icon-set{
            font-size: .4rem;
        }
        .icon-alert {
            font-size: .5rem;
        }

    }
</style>
