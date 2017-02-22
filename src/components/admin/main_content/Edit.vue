<template>
  <div class="wrapper">
    <div class="header">
      撰写文章
    </div>
    <div class="main">
      <div class="left">
        <header class="post-info">
          文章信息
        </header>
        <div class="post-info-wrapper">
        </div>
      </div>
      <div class="right">
        <textarea name="" id="mdEditor" cols="30" rows="10"></textarea>
      </div>
    </div>
  </div>
</template>
<script>
  import SimpleMDE from 'simplemde';
  require('simplemde/dist/simplemde.min.css');
  export default{
    mounted(){
      new SimpleMDE({element: document.getElementById("mdEditor")});
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../../assets/css/constants";

  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
      font-size: 2rem;
      padding: 2rem 0 0 2rem;
      font-weight: bolder;
      flex-grow: 0;
      color: white;
    }
    .main {
      flex-grow: 1;
      display: flex;
      .left {
        width: 40rem;
        margin: 2rem;
        display: flex;
        flex-direction: column;
        .post-info {
          text-align: center;
          font-size: 2rem;
          color: white;
          font-weight: bold;
          padding-top: 1rem;
          height: 4rem;
          background: $admin-dark-bg;
        }
        .post-info-wrapper {
          flex-grow: 1;
          background: $admin-light-panel-bg;
        }
      }
      .right {
        overflow-y: scroll;
        width: 100%;
        background: white;
        margin: 2rem;
      }
    }
  }

</style>
