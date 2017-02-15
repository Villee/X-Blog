import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main/Main'
import Blog from '../components/BlogDetail/BlogDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/blog/id/:id',
      name: 'BlogDetail',
      component: Blog
    }
  ]
})
