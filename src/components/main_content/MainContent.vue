<template>
  <div>
    <div v-for="post in posts">
      <blog-item :postInfo="post"></blog-item>
    </div>
    <a href="#" class="link-all">查看所有文章...</a>
  </div>
</template>

<script>
  import blogItem from './PostItem'
  export default {
    data(){
      return {
        posts: []
      }
    },
    components: {
      blogItem
    },
    mounted() {
      this.$http.get('/x-blog/blog').then(data => {
        this.posts = data.data || [];
      }).catch(error => {
        console.log('请求文章内容失败!')
      })
    }
  }
</script>

<style scoped>
  .link-all {
    margin: 1rem;
    font-size: 1.4rem;
  }
</style>
