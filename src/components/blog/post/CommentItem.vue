<template>
  <article>
    <header>
      <h4><a :href="commentInfo.homePage" v-if="commentInfo.homePage!=undefined">{{commentInfo.nickName}}</a>
        <span v-if="commentInfo.homePage==undefined">{{commentInfo.nickName}}</span>
        &nbsp;:
      </h4>
    </header>
    <p>
      {{commentInfo.content}}
    </p>
    <time>
      {{new Date(commentInfo.createAt).toLocaleString()}}
    </time>
  </article>
</template>

<script>
  export default {
    data(){
      return {}
    },
    props: ['commentInfo']
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

  article {
    margin: 2rem 0 0 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid whitesmoke;
    header {
      margin-bottom: 1rem;
      a {
        color: black;
        border-bottom: 1px solid black;
      }
    }
    p {
      margin-bottom: 1rem;
    }
    time {
      font-size: 1.1rem;
    }

  }

</style>
