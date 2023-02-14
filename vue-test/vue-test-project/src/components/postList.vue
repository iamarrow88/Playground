<template>
  <div class="post" v-for="post in posts" id="{{post.id}}">
    <h3 class="post-title"><strong>Название: </strong>{{post.title}}</h3>
    <div class="post-text"><strong>Пост: </strong>{{post.body}}</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.post {
  margin-top: 15px;
  padding: 10px;
  border: 2px solid teal;
  max-width: 1000px;
}

.post-text {
  margin-top: 10px;
}
</style>