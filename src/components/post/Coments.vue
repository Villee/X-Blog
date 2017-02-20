<template>
  <div>
    <div class="comments">评论区</div>
    <comment-item v-for="comment of comments" :commentInfo="comment"></comment-item>
  </div>
</template>

<script>
  import commentItem  from './CommentItem.vue';
  export default {
    components: {
      commentItem
    },
    props: ['comments']

  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .comments {
    font-size: 2.5rem;
    font-weight: bold;
    padding-bottom: 1rem;
    border-bottom: 1px solid whitesmoke;
  }

</style>
