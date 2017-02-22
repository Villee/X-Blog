<template>
  <div id="admin">
    <header>
      <header-view></header-view>
    </header>
    <div class="main">
      <div class="left-menu">
        <left-menu></left-menu>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>
<script>
  import headerView from './header/HeaderView.vue';
  import leftMenu from './main_content/LeftMenu.vue'
  export default {
    components: {
      headerView,
      leftMenu
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/css/constants";

  #admin {
    display: flex;
    height: 100vh;
    flex-direction: column;

    header {
      width: 100%;
      height: 3rem;
    }
    .main {
      width: 100%;
      flex-grow: 1;
      display: flex;
      flex-wrap: nowrap;
      border-top: .3rem solid $admin-hr-bg;
      .left-menu {
        background: $admin-dark-bg;
        width: 15rem;
        flex-grow: 0;
        flex-shrink: 0;
      }
      .main-content {
        background: $admin-light-bg;
        flex-grow: 1;
      }
    }
  }
</style>
