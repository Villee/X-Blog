<template>
  <div class="wrapper">
    <div class="logo">
      <img class="logo-img" :src="logoSrc" alt="logo">
    </div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <a href="https://github.com/x-codder">GitHub</a>
      <a href="Mailto:wangfeiys@163.com">E-Mail</a>
      <router-link to="/">About</router-link>
    </div>

    <div class="copy-right">
      &copy;2017&nbsp;&nbsp; Powered by x-codder&nbsp;@<a href="http://www.ie.ac.cn/">iecas</a> &nbsp;&nbsp;
    </div>
  </div>
</template>
<script>
  let logoSrc = require('../../assets/logo.jpg')
  export default{
    data(){
      return {
        logoSrc,
      }
    }
  }

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  $footer-height: 10rem;
  .wrapper {
    font-size: 1.1rem;
    height: $footer-height;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    background: whitesmoke;
    border-top: 1px solid #f1f1f1;
    align-content: flex-start; //交叉轴排列方式按轴线排列，靠上排列
  }

  .logo {
    margin-top: ($footer-height * .1);
    width: 100%;
    text-align: center;

    .logo-img {
      width: 4rem;
      border-radius: 2rem;
    }
  }

  .links {
    margin-top: $footer-height *.1;
    width: 100%;
    display: flex;
    justify-content: center;

    a {
      margin: 0 1rem;
    }
  }

  .copy-right {
    margin-top: $footer-height *.1;
    width: 100%;
    display: flex;
    justify-content: center;
  }

</style>
