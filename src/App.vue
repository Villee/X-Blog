<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
  </div>
</template>

<script>
  import headerView from 'components/HeaderView';
  export default {
    name: 'app',
    components: {
      headerView
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
</style>
