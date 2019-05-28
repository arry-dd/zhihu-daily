<template>
    <div class="collect">
        <side-bar-animation>
            <side-bar v-show="flagShowSideBar" @closeSideBar="closeSideBar"></side-bar>
        </side-bar-animation>
        <collect-header @showSideBar="showSideBar"></collect-header>
        <collect-content :collectList="collectList"></collect-content>
    </div>
</template>

<script>
    import collectHeader from 'collect/com/collectHeader'
    import sideBar from 'home/com/sideBar'
    import collectContent from 'collect/com/collectContent'
    import axios from 'axios'
    import {mapState} from 'vuex'
    import sideBarAnimation from 'common/sideBarAnimation'

    export default {
        name: 'collect',
        components: {
            collectHeader,
            sideBar,
            collectContent,
            sideBarAnimation
        },
        data() {
            return {
                //是否显示侧边栏的标记
                flagShowSideBar: false,
                collectList: []
            }
        },
        methods: {
            //头部的菜单按钮点击后，显示侧边栏
            showSideBar() {
                this.flagShowSideBar = true
            },
            //关闭侧边栏
            closeSideBar() {
                this.flagShowSideBar = false
            },
            //根据收藏的id获取其信息
            getCollectInfo() {
                let len = this.collectId.length
                for (let i = 0; i < len; i++) {
                    axios.get('/api/4/news/' + this.collectId[i])
                        .then(this.getCollectInfoSucc)
                }
            },
            getCollectInfoSucc(ret) {
                if (ret.data) {
                    this.collectList.push(ret.data)
                }
            }
        },
        computed: {
            ...mapState(['collectId'])
        },
        mounted() {
            this.getCollectInfo()
            //清空
            this.collectList = []
            //从主页页面跳转到收藏页时关闭侧边栏
            this.flagShowSideBar = false
        }
    }
</script>

<style scoped lang="less">

</style>
