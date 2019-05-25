<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>

    export default {
        name: 'fadeAnimation',
        components: {
        }
    }
</script>

<style scoped lang="less">
    .v-enter, .v-leave-to {
        opacity: 0;
    }


    .v-enter-active, .v-leave-active {
        transition: opacity .5s ease;
    }
</style>
