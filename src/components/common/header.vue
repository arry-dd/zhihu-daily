<template>
    <div>
        <div class="header">
            <slot></slot>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'headerCom'
  }
</script>

<style lang="less">
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
    }
</style>
