<template>
  <div class="post-box">
    <h3 class="post-title"><strong>Название: </strong>{{post.title}}</h3>
    <div class="post-text"><strong>Пост: </strong>{{post.body}}</div>
  </div>
</template>

<script>
export default {
  name: "post-item",
  props: {
    post: {
      type: Object,
    }
  }
}
</script>

<style scoped>
  .post-box {
    max-width: 80%;
  }

  .post-text {
    margin-top: 10px;
  }
</style>