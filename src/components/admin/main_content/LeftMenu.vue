<template>
  <div class="wrapper">
    <div class="about-me">
      <img src="../../../assets/logo.jpg" alt="logo">
      <div class="name">X-Codder</div>
      <div class="words">跟我学做菜吧...</div>
    </div>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>

  @import "../../../assets/css/constants";

  .wrapper {
    width: 100%;
    background: $admin-dark-bg;
    color: white;
    display: flex;
    flex-direction: column;
    .about-me {
      display: flex;
      flex-direction: column;
      height: 15rem;
      border-bottom: .3rem solid $admin-hr-bg;
      align-items: center;
      justify-content: center;
      img {
        width: 6rem;
        height: 6rem;
        border-radius: 4rem;
        border: .4rem solid $admin-hr-bg;
      }
      .name {
        font-weight: bold;
        margin-top: 1rem;
        color: white;
      }
      .words {
        font-weight: bold;
        margin-top: 1rem;
        color: darkgrey;
      }
    }
  }

</style>
