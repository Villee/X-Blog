<template>
  <div class="wrapper">
    <div class="about-me">
      <img src="../../../assets/logo.jpg" alt="logo">
      <div class="name">X-Codder</div>
      <div class="words">跟我学做菜吧...</div>
    </div>
    <div class="action-list">
      <router-link to="/admin">
        <div class="action">
          <span class="icon-pencil2"></span></span>撰写文章
        </div>
      </router-link>

      <router-link to="/managePosts">
        <div class="action">
          <span class="icon-stack"></span></span>文章管理
        </div>
      </router-link>

      <router-link to="/managePosts">
        <div class="action">
          <span class="icon-bubbles3"></span></span>评论管理
        </div>
      </router-link>

      <router-link to="/admin">
        <div class="action">
          <span class="icon-cog"></span></span>全局设置
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
  export default{
    mounted(){
//      //为每一个action元素设置点击时背景变色
//      for (let el of this.$el.getElementsByClassName("action")) {
//        el.addEventListener('click', () => {
//          for (let el of this.$el.getElementsByClassName("action")) {
//            el.style.background = "#23282D";
//          }
//          el.style.background = "#1abc9c";
//        })
//      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

  @import "../../../assets/css/constants";

  .wrapper {
    width: 100%;
    background: $admin-dark-bg;
    color: white;
    display: flex;
    flex-direction: column;
    .about-me {
      display: flex;
      flex-direction: column;
      height: 15rem;
      border-bottom: .3rem solid $admin-hr-bg;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      img {
        width: 6rem;
        height: 6rem;
        border-radius: 4rem;
        border: .4rem solid $admin-hr-bg;
      }
      .name {
        font-weight: bold;
        margin-top: 1rem;
        color: white;
      }
      .words {
        font-weight: bold;
        margin-top: 1rem;
        color: darkgrey;
      }
    }

    .action-list {
      a {
        color: white;
        font-size: 1.4rem;
        .action {
          text-align: left;
          padding: 3rem;
          &:hover {
            background: $admin-light-bg;
          }
          &::selection {
            background: $admin-dark-green;
          }
          span {
            margin-right: 1rem;
          }
        }
      }
    }
  }

</style>
