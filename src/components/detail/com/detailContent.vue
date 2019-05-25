<template>
    <div class="detailContent" ref="content" v-html="this.body">

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'detailContent',
        props: ['body'],
        computed: {
            ...mapState(['night'])
        },
        methods: {
            //判断是否夜间模式
            changeNight() {
                if(this.night) {
                    document.body.classList.add('dudu-night')
                }else {
                    document.body.classList.remove('dudu-night')
                }
            }
        },
        mounted() {
        //判断是否夜间模式
            this.changeNight()
        }
    }
</script>

<style scoped>
@import "~styles/detailContent.less";
</style>
