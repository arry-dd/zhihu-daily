<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>

    export default {
        name: 'sideBarAnimation',
        components: {
        }
    }
</script>

<style scoped lang="less">
    .v-enter, .v-leave-to {
        transform: translate(-100%);
    }


    .v-enter-active, .v-leave-active {
        transition: all .5s ease;
    }
</style>
