import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main_content/Main'
import Post from '../components/post/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/post/id/:id',
      name: 'post',
      component: Post
    }
  ]
})
