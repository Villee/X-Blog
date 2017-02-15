<template>
  <header class="header">
    <ul class="navigation">
      <li class="logo"><img :src="logoSrc" alt="logo"></li>
      <li><a href="#">首页</a></li>
      <li>
        <router-link to="/post">文章</router-link>
      </li>
      <li><a href="https://git.oschina.net/wangfeiys">作品</a></li>
      <li>
        <div class="about-wrapper"><a href="" @click.prevent="" @mouseenter="showAbout" @mouseleave="hideAbout">关于</a><img
          :src="aboutSrc" alt="WeChat" v-show="showAboutMe"
          class="about-me"></div>
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

<style scoped>
  .header {
    border-bottom: 1px solid #f1f1f1;
  }

  .navigation {
    height: 5rem;
    list-style: none;
    margin: 0 8rem 0 0;
    background: white;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
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
    top: 6rem;
    left: -15rem;
  }

  @media all and (max-width: 800px) {
    .navigation {
      margin: 0;
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
  }

</style>
