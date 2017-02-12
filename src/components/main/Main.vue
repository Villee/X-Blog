<template>
  <div class="main-frame">
    <div class="main-content">
      <main-content></main-content>
    </div>
    <div class="right-menu">
      <right-menu></right-menu>
    </div>
  </div>
</template>
<script>
  import mainContent from 'components/main/MainContent.vue'
  import rightMenu from 'components/main/RightMenu.vue'
  export default {
    components: {
      mainContent,
      rightMenu
    }
  }
</script>

<style scoped>
  .main-frame {
    display: flex;
    justify-content: center;
  }

  .main-content {
    width: 66.7rem;
  }

  .right-menu {
    width: 16.67rem;
    background: rgba(128, 128, 128, 0.05);
  }

  @media all and (max-width: 600px) {
    .right-menu {
      display: none;
    }
  }
</style>
