<template>
    <div class="header">
        <div class="header-menu"><span class="iconfont">&#xe605;</span></div>
        <div class="header-text">首页</div>
        <div class="header-set"><span class="iconfont">&#xe6a9;</span></div>
        <div class="header-alert"><span class="iconfont">&#xe634;</span></div>
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
        
    }
</style>
