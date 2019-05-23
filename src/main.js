import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from 'src/router'

//引入规范css
import 'styles/reset.css'
//解决高分辨率下的1px显示多像素
import 'styles/border.css'
import fastClick from 'fastclick';
fastClick.attach(document.body);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
