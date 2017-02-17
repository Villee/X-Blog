<template>
  <article>
    <router-link :to='"/post/id/"+postInfo._id'>
      <div class="post-head">
        <div class="post-title">{{postInfo.title}}</div>
        <div class="time-stamp">{{new Date(postInfo.createAt).toLocaleDateString()}}</div>
      </div>
      <p class="post-content">{{postInfo.content| contentOverflow}}</p>
      <div class="read">阅读:{{postInfo.readCount}}</div>
    </router-link>
  </article>
</template>

<script>
  import router from '../../router'
  export default {
    props: ['postInfo'],
    filters: {
      contentOverflow(value){
        if (value.length > 198) {
          value = value.substring(0, 198);
          value += '...';
        }
        return value;
      }
    }, methods: {
      goPost(blogId){
        router.push({name: 'post', params: {id: blogId}});
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

  article {
    border-bottom: 1px solid #f1f1f1;
    margin: 0 0 4rem 0;
    padding: 0.8rem;

    &:hover {
      background: rgba(235, 235, 235, 0.16);
    }

    .post-head {
      display: flex;
      justify-content: space-between;
      .post-title {
        color: black;
        max-width: 45rem;
        text-overflow: ellipsis;
        margin: 0 0 1rem 0;
        overflow: hidden;
        white-space: nowrap;
        font-size: 2.6rem;
        @media all and (max-width: 600px) {
          font-size: 1.8rem;
        }
      }
    }

    .time-stamp {
      font-weight: bold;
      font-size: 1.2rem;
      color: #909090;
      margin-right: 1.5rem;
      margin-top: 1.5rem;
      @media all and (max-width: 600px) {
        margin-top: .5rem;
      }
    }

    .post-content {
      color: darken(darkgray, 30%);
      max-height: 14rem;
      text-overflow: ellipsis;
      overflow: hidden;
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
      letter-spacing: 0.2rem;
      font-size: 1.1rem;
    }

  }
</style>
