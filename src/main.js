import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from 'src/router'

//引入规范css
import 'styles/reset.css'
//解决高分辨率下的1px显示多像素
import 'styles/border.css'
//解决点击延迟问题
import fastClick from 'fastclick';


// 引入vuex
import store from 'store/index'


//引入阿里巴巴图标
import 'styles/iconfont.css'
fastClick.attach(document.body);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
