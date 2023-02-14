<template>
  <div class="post" v-for="post in posts" id="{{post.id}}">
    <div class="post-box">
      <h3 class="post-title"><strong>Название: </strong>{{post.title}}</h3>
      <div class="post-text"><strong>Пост: </strong>{{post.body}}</div>
    </div>
    <div class="post-btns">
      <my-button>Delete</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";

export default {
  components: {MyButton},
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid teal;
  max-width: 1000px;
}

.post-box {
  max-width: 80%;
}

.post-text {
  margin-top: 10px;
}
</style>