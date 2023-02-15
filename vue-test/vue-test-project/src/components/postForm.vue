<template>
  <form @submit.prevent>
    <h2 class="form-title">Add new post</h2>
    <my-input type="text" v-model:value="post.title"
           placeholder="Title of your post" />
    <my-input type="text" placeholder="Your story"
              v-model:value.trim="post.body"
    /> <!--модификаторы для v-model (trim|lazy|number и тп.) -->
    <my-button class="mt15" @click="addPost">Add post!</my-button>
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
      },
    }
  },
  methods: {
    addPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
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