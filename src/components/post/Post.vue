<template>
  <div class="wrapper">
    <div class="main-content">
      <div>
        <article class="blog-detail">
          <section>
            <header>
              <h2 class="blog-title">
                {{blogInfo.title}}
              </h2>
            </header>
            <p class="blog-content" v-html="blogInfo.content">
            </p>
          </section>

        </article>
      </div>
      <div class="comment">
        这里是评论区
      </div>
    </div>
    <div class="right-menu">
      <div class="right-text">
        我是侧边栏
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data: () => {
      return {
        blogInfo: {}
      }
    },
    mounted: function () {
      this.$http.get('http://localhost:3000/x-blog/blog/id/' + this.$route.params.id).then(data => {
        this.blogInfo = data.data;
      }).catch(error => {
        console.log('请求文章内容失败!')
      });
      this.$http.get("http://japi.juhe.cn/joke/content/list.from?key=8e5feed1b55375f06f9a4c2e41ebc04e&page=2&pagesize=10&sort=asc&time=1418745237")
        .then(data => console.log(data.toString()))
        .catch(error => console.log(error))
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .wrapper {
    display: flex;
    justify-content: center;
  }

  .main-content {
    flex-shrink: 2;
    width: 66.7rem;
    margin: 0 4rem;
  }

  .right-menu {
    min-height: 20rem;
    width: 20rem;
    flex-shrink: 1;
    background: rgba(128, 128, 128, 0.05);
  }

  .right-text {
    font-size: 2rem;
    margin: 10rem 0 0 5rem;
  }

  @media all and (max-width: 600px) {
    .right-menu {
      display: none;
    }
  }

  .blog-detail {
    padding-bottom: 5rem;
    border-bottom: 1px solid #f1f1f1;
  }

  .blog-title {
    text-align: center;
    font-size: 3rem;
    margin: 2rem 0;
  }

  .blog-content {
    font-size: 1.4rem;
  }

  .comment {
    margin-top: 2rem;
    font-size: 1.4rem;
  }
</style>
