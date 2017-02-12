<template>
  <div>
    <h2>MainContent</h2>
    <div v-for="post in posts">
      <post-item></post-item>
    </div>
  </div>
</template>

<script>
  import postItem from 'components/main/PostItem'
  export default {
    data: () => {
      return {
        posts: [{
          id: "A001",
          date: '2017.2.13',
          title: "我的个人博客站跑起来啦",
          content: "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
        }, {
          id: "A002",
          date: '2017.2.13',
          title: "我的个人博客站跑起来啦",
          content: "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
        }, {
          id: "A003",
          date: '2017.2.13',
          title: "我的个人博客站跑起来啦",
          content: "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
        }, {
          id: "A004",
          date: '2017.2.13',
          title: "我的个人博客站跑起来啦",
          content: "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
        },]
      }
    },
    components: {
      postItem
    }
  }
</script>
