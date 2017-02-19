<template>
  <article>
    <router-link :to='"/post/id/"+postInfo._id'>
      <div class="post-head">
        <div class="post-title">{{postInfo.title}}</div>
      </div>
    </router-link>
    <div class="content-wrapper">
      <div class="post-img">
        <img src="../../assets/logo.jpg" alt="">
      </div>
      <p class="post-content">{{postInfo.content| contentOverflow}}</p>
    </div>
    <div class="time-stamp"><span class="icon-clock icon-left"></span>{{new
      Date(postInfo.createAt).toLocaleDateString()}}
    </div>
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
    margin: .1rem 0 1rem;
    padding: 0.8rem;
    background: white;
    border-bottom: 1px solid #f1f1f1;

    &:hover {
      box-shadow: 0 0 10px darkgray;
    }

    .post-head {
      display: flex;
      justify-content: space-between;
      margin: 2rem 0 1rem;
      .post-title {
        color: black;
        max-width: 45rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 1.8rem;
        font-weight: bold;
        @media all and (max-width: 600px) {
          font-size: 1.6rem;
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
      .icon-left {
        margin-right: .8rem;
      }
    }

    .content-wrapper {
      display: flex;
      justify-content: space-between;
      .post-img {
        flex-grow: 0;
        padding: .4rem;
        border: 1px solid #f1f1f1;
        img {
          width: 14rem;
          height: 8rem;
        }
      }

      .post-content {
        flex-grow: 1;
        margin-left: 1rem;
        color: darken(darkgray, 30%);
        max-height: 14rem;
        max-width: 48rem;
        text-overflow: ellipsis;
        overflow: hidden;
        font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
        letter-spacing: 0.2rem;
        font-size: 1.1rem;
      }
    }

  }
</style>
