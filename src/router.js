import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import Home from 'home/home'
import detail from 'detail/detail'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/detail', name: 'detail', component: detail }
    ]
})
