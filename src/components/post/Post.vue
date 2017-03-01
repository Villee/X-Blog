<template>
  <div class="wrapper">
    <div class="post-main-content">
      <article>
        <header>
          <h2 class="blog-title">
            {{postInfo.title}}
          </h2>
          <div class="blog-nav">
            <div>
              <span>标签：</span>[<a href="" v-for="item of postInfo.tag">&nbsp;{{item}}&nbsp;</a>]
            </div>
            <div class="time-stamp"><span class="icon-clock icon-left"></span>{{new
              Date(postInfo.createAt).toLocaleString()}}
            </div>
          </div>
        </header>
        <p class="blog-content markdown-body" v-html="postInfo.content">
        </p>
        <line-logo></line-logo>
      </article>
      <div class="comments">
        <comments :comments="comments"></comments>
      </div>
    </div>
    <div class="right-menu">
      <right-menu></right-menu>
    </div>
  </div>
</template>

<script>
  import rightMenu  from '../main_content/RightMenu.vue';
  import comments from './Coments.vue';
  import lineLogo from './LineLogo.vue'
  import marked from 'marked'
  import 'github-markdown-css'
  export default {
    data: () => {
      return {
        postInfo: {},
        comments: []
      }
    },
    mounted: function () {
      console.log(marked('I am using __markdown__.'));
      //请求文章详情以及文章评论
      this.$http.get('/x-blog/posts/id/' + this.$route.params.id)
        .then(data => this.postInfo = data.data)
        .catch(error => console.log('请求文章内容失败!'));
      this.$http.get('/x-blog/comments/postId/' + this.$route.params.id)
        .then(data => this.comments = data.data)
        .catch(err => console.log('请求文章评论失败!'))
    }, components: {
      rightMenu,
      comments,
      lineLogo
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

  .wrapper {
    display: flex;
    justify-content: center;
    .post-main-content {
      flex-shrink: 1;
      flex-grow: 1;
      max-width: 80rem;
      margin: 0 4rem;
      overflow: hidden;
      @media all and (max-width: 960px) {
        margin: 0 1rem;
      }
      article {
        padding-bottom: 5rem;
        .blog-title {
          text-align: center;
          font-size: 3rem;
          margin: 2rem 0;
        }
        .blog-nav {
          display: flex;
          justify-content: space-between;
          font-size: 1.2rem;
          .tag {
            span {
              color: gray;
            }
          }

          .time-stamp {
            .icon-left {
              margin-right: .5rem;
            }
          }
        }
        .blog-content {
          width: 100%;
          margin-top: 2rem;
          font-size: 1.4rem;
        }
      }
    }

    .right-menu {
      min-height: 20rem;
      width: 20rem;
      flex-shrink: 0;
      background: rgba(128, 128, 128, 0.05);
      @media all and (max-width: 960px) {
        display: none;
      }

    }

    .comments {
      margin-top: 2rem;
      font-size: 1.4rem;
    }
  }


</style>
