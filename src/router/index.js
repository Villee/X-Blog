import Vue from 'vue'
import Router from 'vue-router'
import Blog from './blog'
import Admin from  './admin'

Vue.use(Router)

export default new Router({
  routes: [
    Blog, Admin
  ]
})
