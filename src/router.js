import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import Home from 'home/home'
import Detail from 'detail/detail'
// import Comment from 'comment/comment'
const Comment = () => import('comment/comment')
// import Collect from 'collect/collect'
const Collect = () => import('collect/collect')
Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/detail/:id', name: 'detail', component: Detail },
        { path: '/comment/:id', name: 'comment', component: Comment },
        { path: '/collect', name: 'collect', component: Collect }
    ]
})

