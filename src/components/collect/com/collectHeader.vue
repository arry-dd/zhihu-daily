<template>
    <div class="collectHeader">
        <header-com>
            <div class="header-menu"><span class="iconfont icon-menu" @click="showSideBar">&#xe605;</span></div>
            <div class="header-text">{{collectId.length}} 条收藏</div>
        </header-com>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import headerCom from '../../common/header'

  export default {
    name: 'collectHeader',
    components: {
      headerCom
    },
    methods: {
      //点击菜单按钮，向父组件发送要显示侧边栏的请求
      showSideBar() {
        this.$emit('showSideBar')
      },
      //判断是否夜间模式,添加dudu-night类名
      changeNight() {
        if (this.night) {
          document.body.classList.add('dudu-night')
        } else {
          document.body.classList.remove('dudu-night')
        }
      }
    },
    computed: {
      ...mapState(['night', 'collectId'])
    },
    mounted() {
      //判断是否夜间模式
      this.changeNight()
    }
  }
</script>

<style scoped lang="less">
    .header {

        div {
            display: inline-block;

            padding-bottom: 10%;
            height: 0;
            margin: 0 .25rem;
        }

        .header-menu, .header-text {
            float: left;
        }
    }

    .dudu-night .header {
        background-color: @baseBlueColorNight !important;
    }
</style>
