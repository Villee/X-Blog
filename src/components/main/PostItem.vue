<template>
  <div>
    <section>
      <div class="post-head">
        <h2>我是文章</h2>
        <div class="time-stamp">2017.2.13</div>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi asperiores commodi culpa dolores earum illum
        pariatur provident quas quia, ratione rem saepe sunt tempora unde? Eius odit repudiandae voluptatibus!</p>
    </section>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  section {
    border: 1px solid #f1f1f1;
    margin: 0 0 4rem 0;
    padding: 0.8rem;
  }

  section .post-head {
    display: flex;
    justify-content: space-between;
  }

  .time-stamp{
    font-weight: bold;
    color: #909090;
    margin-right: 1.5rem;
    margin-top: 1.5rem;
  }

  h2 {
    font-size: 3rem;
  }

  section p {
    font-size: 1.5rem;
  }
</style>
