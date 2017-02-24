<template>
  <article>
    <router-link :to='"/post/id/"+postInfo._id'>
      <header>
        <div class="post-title">{{postInfo.title}}</div>
      </header>
      <div class="content-wrapper">
        <div class="post-img" v-show="hasImg">
          <img :src="postInfo.img " alt="">
        </div>
        <p class="post-content">{{postInfo.description| contentOverflow}}</p>
      </div>
    </router-link>
    <footer>
      <div class="time-stamp"><span class="icon-clock icon-left">
      </span>{{new Date(postInfo.createAt).toLocaleDateString()}}
      </div>
      <div class="category">
        分类: [<a href="" v-for="item of postInfo.category">&nbsp;{{item}}&nbsp;</a>]
      </div>
      <router-link :to='"/post/id/"+postInfo._id'>
        <div class="read">阅读全文>></div>
      </router-link>
    </footer>
  </article>
</template>

<script>
  import router from '../../../router'
  export default {
    props: ['postInfo', 'hasImg'],
    filters: {
      contentOverflow(value){
        if (value.length > 300) {
          value = value.substring(0, 300);
          value += '...';
        }
        return value;
      }
    }, methods: {
      goPost(blogId){
        router.push({name: 'post', params: {id: blogId}});
      },
      categoryFilter(categorys){
        let result = ''
        for (let item of categorys) {
          result += ('' == result ? '' : ' , ');
          result += '<router-link :to=""> <div class="read">' + item + '</div> </router-link>'
        }
        console.log(result)
        return result;
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
    @media all and (max-width: 600px) {
      font-size: 1.6rem;
      padding: 0;
    }

    &:hover {
      box-shadow: 0 0 1px darkgray;
    }

    header {
      display: flex;
      justify-content: space-between;
      margin: 2rem 0 1rem;
      .post-title {
        color: black;
        width: 70rem;
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

    .content-wrapper {
      display: flex;
      justify-content: space-between;
      .post-img {
        flex-grow: 0;
        padding: .4rem;
        border: 1px solid #f1f1f1;
        height: 9rem;
        margin-right: 1rem;
        @media all and (max-width: 600px) {
          display: none;
        }
        img {
          width: 14rem;
          height: 9rem;
        }
      }

      .post-content {
        flex-grow: 1;
        color: darken(darkgray, 30%);
        max-height: 17rem;
        text-overflow: ellipsis;
        overflow: hidden;
        font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
        letter-spacing: 0.2rem;
        font-size: 1.1rem;
      }
    }

    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: .5rem;
      font-size: 1.2rem;
      flex-wrap: wrap;
      @media all and (max-width: 600px) {
        margin: .5rem 0 .5rem;
        padding: .5rem;
      }

      .time-stamp {
        flex-grow: 1;
        font-weight: bold;
        color: #909090;
        margin-right: 1.5rem;
        .icon-left {
          margin-right: .8rem;
          @media all and (max-width: 600px) {
            margin-right: .4rem;
          }
        }
      }
      .category {
        flex-grow: 1;
        @media all and (max-width: 600px) {
          text-align: right;
        }
      }

      .read {
        color: white;
        flex-grow: 1;
        background: cornflowerblue;
        padding: 1rem;
        @media all and (max-width: 600px) {
          display: none;
        }
      }
    }

  }
</style>
