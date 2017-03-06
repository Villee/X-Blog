<template>
  <div>
    <div class="wrapper">
      <div class="line"></div>
      <div class="center">
        <img src="../../assets/logo.jpg" alt="">
      </div>
      <div class="line"></div>
    </div>
    <div class="words">
      Villee_> , 来跟我学做菜吧...
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {}
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .wrapper {
    display: flex;
    align-items: center;
    margin-top: 8rem;
    .center {
      width: 6rem;
      height: 6rem;
      img {
        width: 6rem;
        height: 6rem;
        border-radius: 3rem;
        border: 1px solid darkslategray;
      }
    }
    .line {
      height: 1px;
      background: darkgray;
      flex-shrink: 1;
      flex-grow: 1;
    }
  }

  .words {
    margin-top: .8rem;
    text-align: center;
  }

</style>
