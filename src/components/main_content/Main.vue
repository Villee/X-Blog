<template>
  <div class="main-frame">
    <div class="main-content animated fadeIn">
      <main-content></main-content>
    </div>
    <div class="right-menu">
      <right-menu></right-menu>
    </div>
  </div>
</template>
<script>
  import mainContent from './MainContent.vue'
  import rightMenu from './RightMenu.vue'
  export default {
    components: {
      mainContent,
      rightMenu
    }
  }
</script>

<style style rel="stylesheet/scss" lang="scss" scoped>

  .main-frame {
    display: flex;
    justify-content: center;

    .main-content {
      flex-shrink: 1;
      max-width: 66.7rem;
      min-width: 20rem;
      margin: 0 4rem;
      background: white;
      @media all and (max-width: 600px) {
        width: 100%;
        margin: 0 1rem;
      }
    }

    .right-menu {
      min-height: 30rem;
      width: 20rem;
      flex-shrink: 1;
      background: rgba(128, 128, 128, 0.05);
      @media all and (max-width: 960px) {
        display: none;
      }
    }

  }
</style>
