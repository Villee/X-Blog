import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main_content/Main'
import Blog from '../components/post/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/blog/id/:id',
      name: 'post',
      component: Blog
    }
  ]
})
