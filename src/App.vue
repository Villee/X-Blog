<template>
  <div id="app">
    <header id="nav-wrapper" :class="navClass">
      <header-view v-once></header-view>
    </header>

    <div id="main-content">
      <router-view></router-view>
    </div>

    <footer id="footer-wrapper">
      <footbar v-once></footbar>
    </footer>
  </div>
</template>

<script>
  import headerView from './components/header/HeaderView';
  import footbar from './components/footer/Footbar.vue'
  export default {
    name: 'app',
    components: {
      headerView,
      footbar
    },
    data(){
      return {
        scrollY: 0,
        navClass: ''
      }
    },
    methods: {
      /**
       * 处理页面滚动事件
       */
      handleScroll(){
        if (this.scrollY > window.scrollY) {
          //下滑，隐藏导航栏
          this.navClass = 'animated fadeIn';
        } else {
          //下滑，显示导航栏
          this.navClass = 'animated fadeOut'
        }
        this.scrollY = window.scrollY;
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

  html {
    overflow-y: scroll; /*默认显示右侧滚动条，防止页面切换抖动 */
    font-size: 12px;
  }

  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: Microsoft JhengHei, SimSun, Helvetica, serif;
  }

  a {
    color: rgba(69, 144, 185, 1);
    text-decoration: none;
  }

  #app {
    display: flex;
    min-height: 100vh; //1vh表示浏览器高度的1%，100vh为浏览器高度
  flex-direction: column; //灵活的项垂直显示
  }

  #main-content {
    flex: 1;
    width: 100%;
    padding-top: 2rem;
    margin-top: 5rem;
  @media all and (max-width: 600px) {
    padding-top: 0;
  }
  }

  #nav-wrapper {
    background-color: rgba(255, 255, 255, 1);
    position: fixed;
    z-index: 100;
    width: 100%;
    top: 0;
    left: 0;
  }

  #footer-wrapper {
    width: 100%;
  }

</style>
