<template>
  <div id="app">
    <div id="nav-wrapper" :class="navClass">
      <header-view></header-view>
    </div>
    <div id="main-content">
      <router-view></router-view>
    </div>
    <footbar></footbar>
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
          console.log('上滑');
          this.navClass = 'animated fadeIn';
        } else {
          //下滑，显示导航栏
          console.log('下滑');
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

<style>
  html {
    font-size: 12px;
  }

  * {
    padding: 0;
    margin: 0
  }

  body {
    font-family: Microsoft JhengHei, SimSun, Helvetica, serif;
  }

  #main-content {
    width: 100%;
    margin-top: 7rem;
  }

  #nav-wrapper {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }

</style>
