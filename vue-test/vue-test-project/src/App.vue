<template>
  <h1>Hello world!</h1>
  <div>Likes: <strong> {{likes}}</strong></div>
  <div>Dislikes: <strong> {{dislikes}}</strong></div>
  <button @click="addLike">like!</button>
  <button @click="addDislike">Dislike!</button>
</template>

<script>
  export default { //скрипт всегда содержит export default и возвращает объект
    data() { //функция дата содержит (возвращает) модели
      return {
        likes: 0, // модель
        dislikes: 0
      }
    },
    methods: { //объект методы содержит методы компонента (без function)
      addLike() {
        return this.likes += 1;
      },

      addDislike(){
        this.dislikes += 1;
      }
    }
  }
</script>

<style> /*содержит стили компонента*/

</style>