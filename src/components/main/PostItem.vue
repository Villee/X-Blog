<template>
  <div>
    <section @click="goPost(postInfo.postId)">
      <div class="post-head">
        <div class="post-title">{{postInfo.title}}</div>
        <div class="time-stamp">{{postInfo.date}}</div>
      </div>
      <p class="post-content">{{postInfo.content| contentOverflow}}</p>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['postInfo'],
    filters: {
      contentOverflow(value){
        if (value.length > 125) {
          value = value.substring(0, 125);
          value += '...';
        }
        return value;
      }
    },methods:{
          goPost(postId){
              console.log('点击文章了'+postId);
          }
    }
  }
</script>

<style scoped>
  section {
    border: 1px solid #f1f1f1;
    margin: 0 0 4rem 0;
    padding: 0.8rem;
  }

  section .post-head {
    display: flex;
    justify-content: space-between;
  }

  .time-stamp {
    font-weight: bold;
    font-size: 1.2rem;
    color: #909090;
    margin-right: 1.5rem;
    margin-top: 1.5rem;
  }

  .post-head .post-title {
    max-width: 45rem;
    text-overflow: ellipsis;
    margin: 0 0 1rem 0;
    overflow: hidden;
    white-space: nowrap;
    font-size: 2.6rem;
  }

  section p {
    font-size: 1.5rem;
  }

  .post-content {
    max-height: 12rem;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media all and (max-width: 600px ) {
    .post-head .post-title {
      font-size: 1.8rem;
    }
    .time-stamp {
      margin-top: .5rem;
    }
  }
</style>
