<template>
  <transition-group name="posts-list"> <!--1.обернуть нужный элемент в спец тег (см документацию)-->
    <div class="post"
         v-for="post in posts"
         :id="post.id"
         :key="post.id">
      <post-item :post="post"></post-item>
      <div class="post-btns">
        <my-button @click="$emit('remove', post)">Delete</my-button>
      </div>
    </div>
  </transition-group>
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
/*2 добавить спец стили (см документацию. первая часть названия класса - это name из спец тега,
 вторая часть - специальное фиксированное название*/
.posts-list-item {
  display: inline-block;
  margin-right: 10px;
}
.posts-list-enter-active,
.posts-list-leave-active {
  transition: all 1s ease;
}
.posts-list-enter-from,
.posts-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.posts-list-move {
  transition: transform 0.8s ease;
}
</style>