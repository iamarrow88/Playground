<template>
  <form @submit.prevent>
    <h2 class="form-title">Add new post</h2>
<!-- 6. в дочернем компоненте двусторонне связываем нужное поле из
    даты род компонента, данные которой обновляются как раз после
    получения эмитированного события от дочернего элемента с данными из инпута-->
    <my-input type="text" v-model="post.title"
           placeholder="Title of your post" />
    <my-input type="text" placeholder="Your story"
              v-model="post.body"
    />
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