<template>
    <div class="detailContent" ref="content" v-html="this.body">

    </div>
</template>

<script>

    export default {
        name: 'detailContent',
        props: ['body','css'],
        mounted() {

        }
    }
</script>

<style scoped>
</style>
