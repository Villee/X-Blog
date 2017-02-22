/**
 * Created by Wangfei on 2017/2/22.
 */
import Blog from '../components/blog/Blog.vue'
import Main from '../components/blog/main_content/Main'
import Post from '../components/blog/post/Post'

export default {
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
}
