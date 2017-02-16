<template>
  <header class="header">
    <ul class="navigation">
      <li class="logo"><img :src="logoSrc" alt="logo"></li>
      <li><a href="#" class="icon-home">首页</a></li>
      <li>
        <router-link to="/post" class="icon-file-text">文章</router-link>
      </li>
      <li><a href="https://git.oschina.net/wangfeiys" class="icon-github">GitHub</a></li>
      <li>
        <div class="about-wrapper"><a href="" @click.prevent="" @mouseenter="showAbout" @mouseleave="hideAbout"
                                      class="icon-point-right">关于</a><img
          :src="aboutSrc" alt="WeChat" v-show="showAboutMe"
          class="about-me animated fadeIn"></div>
      </li>
    </ul>
  </header>
</template>
<script>
  let logoSrc = require("src/assets/logo.jpg")
  let aboutSrc = require('src/assets/img/about.jpg')
  export default{
    data: () => {
      return {
        logoSrc,
        aboutSrc,
        showAboutMe: false
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
  $navHeight: 5rem;

  .header {
    background-color: white;
    height: $navHeight;
    position: absolute;
    top:0;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
  }

  .navigation {
    list-style: none;
    margin: 0 8rem 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .logo {
    flex-grow: 1;
  }

  .logo img {
    max-height: 4rem;
    margin-left: 2rem;
    border-radius: 2.5rem;
  }

  .navigation a {
    text-decoration: none;
    font-size: 1.5rem;
    display: block;
    padding: 1em;
    color: #909090;
    font-weight: bold;
  }

  .navigation a:hover {
    color: #00AEE8
  }

  .about-wrapper {
    position: relative;
  }

  .about-me {
    width: 25rem;
    position: absolute;
    top: 4.7rem;
    left: -15rem;
  }

  @media all and (max-width: 800px) {
    .navigation {
      margin: 0;
    }

    .about-me {
      width: 20rem;
      left: -15rem;
    }
  }

  @media all and (max-width: 600px) {
    .navigation {
      -webkit-flex-flow: column wrap;
      padding: 0
    }

    .navigation a {
      text-align: center;
      padding: 10px;
    }

    .about-me {
      width: 15rem;
      left: -12rem;
    }
  }

</style>
