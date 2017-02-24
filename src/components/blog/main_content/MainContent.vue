<template>
  <div>
    <div v-for="post in posts">
      <blog-item :postInfo="post" :hasImg="post.img?true:false"></blog-item>
    </div>
    <div class="link-all">
      <a href="#">查看所有文章...</a>
    </div>
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
      this.$http.get('/x-blog/posts').then(data => {
        this.posts = data.data || [];
      }).catch(error => {
        console.log('请求文章内容失败!');
      })
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .link-all {
    margin-top: 2rem;
    font-size: 1.4rem;
    a {
      color: black;
    }
  }
</style>
