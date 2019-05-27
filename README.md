# Vue2.6 打造网页版知乎日报(高仿安卓版的知乎日报V2.6.0)

##说明
1. 图标使用阿里巴巴的Iconfont
2. 由于知乎日报api图片url存在防盗链的问题，所以我在index.html文件中添加了以下标签
  `<meta name="referrer" content="never">`
  详细说明请看[这里](https://www.cnblogs.com/dongcanliang/archive/2017/04/01/6655061.html)
3. 知乎日报api获取数据时ajax存在跨域问题，所以我使用devServer的proxy解决。
4. 使用fastclick解决移动端中click事件延迟问题，可以愉快地使用click
  `devServer: {
        port: 5000,
        proxy: {
            '/api': {
                target: 'https://news-at.zhihu.com',
                changeOrigin: true
            }
        }
    }`
5. 项目的数据存储在vuex中。为了防止页面属性数据丢失，决定用用sessionStorage来保存state里的数据。在App.vue中添加如下代码
  

  ```javascript
  //解决页面刷新vuex数据丢失的问题
          created() {
              //在页面加载时读取sessionStorage里的状态信息
              if (sessionStorage.getItem("store")) {
                  this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
              }
  
              //在页面刷新时将vuex里的信息保存到sessionStorage里
              window.addEventListener("beforeunload", () => {
                  sessionStorage.setItem("store", JSON.stringify(this.$store.state))
              })
          }
      }
  ```
  
  


##踩坑
###一、首页轮播图
1. 当网页刷新，轮播图会跑到最后一页。分析原因：当ajax数据传过来，而轮播图已经滚动到最后一页了。解决方法，给轮播图一个v-if指令，当topStories为空数组时不显示。
2. vue-awesome-swiper插件中的分页器是属于swiperSlide组件的，所以修改其样式需要使用穿透/deep/
###二、首页新闻列表
1. 滑动到底部请求更多的旧新闻，需要每次把上一个新闻的时间减一。相关算法如下
`dec(count) {
     let t = new Date();//你已知的时间
     let t_s = t.getTime();//转化为时间戳毫秒数
     let time = t.setTime(t_s - count*1000 * 60 * 60 * 24);//设置新时间比旧时间少count天
     return time
},`

###详情页
1. 弹出分享框时，滑动遮罩层，仍可以滑动页面，解决方案：
在遮罩层元素添加`@touchmove.prevent`

###收藏页
1. 当从收藏页进入收藏新闻的详细页面时，点击返回键需要判断是返回收藏页还是主页面。查阅vue-router文档发现在导航完成前获取数据可以使用beforeRouteEnter。其中from.path是上一页的路由路径。在调试中出现了一个问题，from.path不能赋值给data中的数据。原因是在beforeRouteEnter中this不指向Vue实例。解决方法如下
`beforeRouteEnter (to, from, next) {
             next(vm => {
                 vm.prevParams = from.path
             });
         }`


