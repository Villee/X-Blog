import Vue from 'vue'
import Router from 'vue-router'
import Main from 'components/main/Main'
import Post from 'components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },{
      path: '/post',
      name: 'Post',
      component: Post
    }
  ]
})
