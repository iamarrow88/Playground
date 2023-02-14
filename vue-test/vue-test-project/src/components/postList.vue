<template>
  <div class="post"
       v-for="post in posts"
       id="{{post.id}}"
       :key="post.id">
    <post-item :post="post"></post-item>
    <div class="post-btns">
      <my-button @click="$emit('remove', post)">Delete</my-button> <!--1.так как мы получаем список
      постов в пропсах, то нам нужно прокинуть инф о посте, на котором кликнула удалить, выше
      для этого эмитим событие remove и в качестве второго арг передаем сам пост родителю-->
    </div>
  </div>
</template>

<script>

import PostItem from "./postItem.vue";

export default {
  components: {PostItem},
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
</style>