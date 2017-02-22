<template>
  <div class="wrapper">
    <div class="header">
      撰写文章
    </div>
    <div class="main">
      <div class="left"></div>
      <div class="right">
        <Vueditor></Vueditor>
      </div>
    </div>
  </div>
</template>
<script>
  export default{}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../../assets/css/constants";

  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
      font-size: 2rem;
      padding: 2rem 0 2rem 4rem;
      font-weight: bolder;
      flex-grow: 0;
      color: white;
    }
    .main {
      flex-grow: 1;
      overflow-y: scroll;
      display: flex;
      .left {
        background: gray;
        width: 20rem;
        margin: 3rem;
      }
      .right {
        background: white;
        margin: 3rem;
      }
    }
  }

</style>
