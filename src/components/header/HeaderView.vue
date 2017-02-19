<template>
  <div class="header">
    <ul class="navigation">
      <li class="logo"><img :src="logoSrc" alt="logo"></li>
      <li><a href="#" class="icon-home"><span class="icon-left"></span>首页</a></li>
      <li>
        <router-link to="/post" class="icon-file-text"><span class="icon-left"></span>文章</router-link>
      </li>
      <li><a href="https://git.oschina.net/wangfeiys" class="icon-github"><span class="icon-left"></span>GitHub</a></li>
      <li>
        <div class="about-wrapper"><a href="" @click.prevent="" @mouseenter="showAbout" @mouseleave="hideAbout"
        ><span class="icon-qrcode icon-left"></span>Me</a><img
          :src="aboutSrc" alt="WeChat" v-show="showAboutMe"
          class="about-me animated fadeIn"></div>
      </li>
    </ul>
  </div>
</template>
<script>
  let logoSrc = require("src/assets/logo.jpg")
  let aboutSrc = require('src/assets/img/about.jpg')
  export default{
    data(){
      return {
        logoSrc,
        aboutSrc,
        showAboutMe: false,
        navWords: false
      }
    },
    methods: {
      showAbout(){
        this.showAboutMe = true;
      },
      hideAbout(){
        this.showAboutMe = false;
      }
    }
  }
</script>

<style style rel="stylesheet/scss" lang="scss" scoped>

  @import "../../assets/css/constants";

  .header {
    background-color: white;
    height: $navHeight;
    position: absolute;
    top: 0;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;

    .navigation {
      list-style: none;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;

      li {
        height: 100%;
        display: flex;
        align-items: center;

        &:last-child {
          margin-right: 2rem;
          //屏幕宽度超过800px时，最后一个li元素离屏幕右侧8rem
          @media all and(min-width: 800px) {
            margin-right: 8rem;
          }
        }

        &.logo {
          height: 100%;
          flex-grow: 1;
          img {
            height: 4rem;
            margin-left: 2rem;
            border-radius: 2rem;
            @media all and(max-width: 800px) {
              margin-left: .5rem;
            }
          }
        }

        a {
          text-decoration: none;
          font-size: 1.5rem;
          display: block;
          padding: 1em;
          color: #909090;
          font-weight: bold;
          &:hover {
            color: rgba(69, 144, 185, 1);
          }
          //屏幕宽度小于600，隐藏导航栏的字
          @media all and (max-width: 600px) {
            text-align: center;
            padding: 10px;
            span {
              display: none;
            }
          }
          .icon-left {
            margin-right: .5rem;
          }
        }

        .about-wrapper {
          position: relative;
        }

        .about-me {
          width: 25rem;
          position: absolute;
          top: 4.7rem;
          left: -15rem;
          @media all and (max-width: 800px) {
            width: 20rem;
          }
          @media all and (max-width: 600px) {
            width: 10rem;
            left: -12rem;
          }
        }
      }
    }
  }

</style>
