<template>
    <div class="comment-header">
        <header-com>
            <router-link :to="'/detail/'+this.$route.params.id" tag="div" class="header-back"><span
                    class="iconfont icon-back">&#xe64c;</span></router-link>
            <div class="header-text">16条点评</div>
            <div class="header-write" @click="showWrite"><span class="iconfont icon-write">&#xe702;</span></div>
        </header-com>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import headerCom from '../../common/header'

  export default {
    name: 'commentHeader',
    components: {
      headerCom
    },
    mounted() {
      //判断是否夜间模式
      this.changeNight()
    },
    methods: {
      //判断是否夜间模式
      changeNight() {
        if (this.night) {
          document.body.classList.add('dudu-night')
        } else {
          document.body.classList.remove('dudu-night')
        }
      },
      //点击写按钮，给父组件传递信息
      showWrite() {
        this.$emit('showWrite')
      }
    },
    computed: {
      ...mapState(['night'])
    }
  }
</script>

<style scoped lang="less">
    .comment-header {
        div {
            display: inline-block;
            padding-bottom: 10%;
            height: 0;
            margin: 0 .1rem;
        }

        .header-back {
            float: left;
            margin: 0 0 0 .25rem;
        }

        .header-text {
            float: left;
            margin-left: .4rem;
        }

        .header-write {
            float: right;
            margin: 0 .25rem 0 0;
        }

    }

    .dudu-night .comment-header {
        background-color: @baseBlueColorNight;
    }
</style>
