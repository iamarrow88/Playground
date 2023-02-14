<template>
  <form @submit.prevent>
    <h2 class="form-title">Add new post</h2>
    <input class="input"
           v-bind:value="this.title"
           type="text"
           placeholder="Title of your post"
           @change="title = $event.target.value">
    <input class="input"
           v-bind:value="this.body"
           type="text"
           placeholder="Your story"
           @change="body = $event.target.value">
    <button class="btn"
            type="submit"
            @click="addPost">Add post!</button>
  </form>
</template>

<script>
export default {
  name: "postForm"
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