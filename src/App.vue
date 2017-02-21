<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>
<style>

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
</style>
