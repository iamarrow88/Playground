<template>
  <form @submit.prevent>
    <h2 class="form-title">Add new post</h2>
<!--     v-model - двустороннее связывание, просто указываем модель компонента,
    с которой будет связывание-->
    <input class="input"
           v-model="post.title"
           type="text"
           placeholder="Title of your post">
    <input class="input"
           v-model="post.body"
           type="text"
           placeholder="Your story">
    <my-button class="mt15" @click="addPost">Add post!</my-button>
  </form>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: {
    MyButton
  },
  name: "postForm",
  data() {
    return {
      post: {
        id: '',
        title: '',
        body: ''
      }
    }
  },
  methods: {
    addPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post); // 1.создаем событие. первый аргумент - его название, второй - что передаем с нем
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 14px;
  width: 100%;
}

input {
  margin-top: 15px;
  width: 100%;
  height: 35px;
  font-size: 20px;
}

.mt15 {
  margin-top: 15px;
}

</style>