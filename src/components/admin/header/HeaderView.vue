<template>
  <div class="wrapper">
    <div class="left-logo">X-Codder-Blog</div>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>

  @import "../../../assets/css/constants";

  .wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    background: $admin-dark-bg;
    .left-logo {
      font-size: 1.4rem;
      color: white;
      font-weight: bolder;
      font-family: Microsoft Yahei;
      margin-left: 3rem;
    }
  }
</style>
