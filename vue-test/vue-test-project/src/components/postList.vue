<template>
  <div class="post" v-for="post in posts" id="{{post.id}}">
    <h3 class="post-title"><strong>Название: </strong>{{post.title}}</h3>
    <div class="post-text"><strong>Пост: </strong>{{post.body}}</div>
  </div>
</template>

<script>
export default { /*3. для передачи данных из родителя используются пропсы, описываем их*/
  props: {
    posts: { //подробное описание элемента в пропсах
      type: Array, //его тип
      required: true //является ли он необходимым
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