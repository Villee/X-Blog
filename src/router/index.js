import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../components/blog/Blog.vue'
import Main from '../components/blog/main_content/Main'
import Post from '../components/blog/post/Post'
import Admin from '../components/admin/Admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Blog,
      children: [
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
    }, {
      path: '/admin',
      name: "Admin",
      component: Admin
    }
  ]
})
