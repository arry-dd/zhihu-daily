<template>
    <div class="collect">
        <side-bar v-show="flagShowSideBar" @closeSideBar="closeSideBar"></side-bar>
        <collect-header @showSideBar="showSideBar"></collect-header>
    </div>
</template>

<script>
    import collectHeader from 'collect/com/collectHeader'
    import sideBar from 'home/com/sideBar'

    export default {
        name: 'collect',
        components: {
            collectHeader,
            sideBar
        },
        data() {
            return {
                //是否显示侧边栏的标记
                flagShowSideBar: false
            }
        },
        methods: {
            //头部的菜单按钮点击后，显示侧边栏
            showSideBar() {
                this.flagShowSideBar = true
            },
            //关闭侧边栏
            closeSideBar () {
                this.flagShowSideBar = false
            }
        },
        mounted() {
            //从主页页面跳转到收藏页时关闭侧边栏
            this.flagShowSideBar = false
        }
    }
</script>

<style>

</style>
