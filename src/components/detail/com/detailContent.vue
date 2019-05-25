<template>
    <div class="detailContent" ref="content" v-html="this.body">

    </div>
</template>

<script>

    export default {
        name: 'detailContent',
        props: ['body'],
        mounted() {
            // document.body.classList.add('dudu-night')
        }
    }
</script>

<style scoped>
@import "~styles/detailContent.less";
</style>
