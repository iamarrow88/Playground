<template>
  <form @submit.prevent>
    <h2 class="form-title">Add new post</h2>
    // v-model - двустороннее связывание, просто указываем модель компонента, с которой будет связывание
    <input class="input"
           v-model="post.title"
           type="text"
           placeholder="Title of your post">
    <input class="input"
           v-model="post.body"
           type="text"
           placeholder="Your story">
    <button class="btn"
            type="submit"
            @click="addPost">Add post!</button>
  </form>
</template>

<script>
export default {
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

.btn {
  margin-top: 15px;
  align-self: end;
  background-color: transparent;
  width: 150px;
  height: 50px;
}
</style>