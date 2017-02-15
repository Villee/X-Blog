<template>
  <div>
    <h2>MainContent</h2>
    <div v-for="post in posts">
      <blog-item :postInfo="post"></blog-item>
    </div>
  </div>
</template>

<script>
  import blogItem from 'components/main/BlogItem'
  export default {
    data: () => {
      return {
        posts: []
      }
    },
    components: {
      blogItem
    },
    mounted: function () {
      this.$http.get('/x-blog/blog').then(data => {
        this.posts = data.data || [];
      }).catch(error => {
        console.log('请求文章内容失败!')
      })
    }
  }
</script>
