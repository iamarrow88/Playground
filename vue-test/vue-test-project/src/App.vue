<template>
  <h1>JS Blog</h1>
  <div class="container">
    <form @submit.prevent> //останавливает действие браузера по умолчанию
      <h2 class="form-title">Add new post</h2>
      <input class="input"
             v-bind:value="this.title"
             type="text"
             placeholder="Title of your post"
             @change="title = $event.target.value"> <!--в тайтл сразу присваивает значение поля вэлью из целевого элемента-->
      <input class="input"
             v-bind:value="this.body"
             type="text"
             placeholder="Your story"
             @change="body = $event.target.value"> <!--связывает отображение и модель в одну сторону - от отображения к модели-->
      <!-- v-bind связывает модель компонента и его графическое отображение (от модели к отображению в одну сторону)-->
      <button class="btn"
              type="submit"
              @click="addPost">Add post!</button>
    </form>
    <div class="post" v-for="post in posts" id="{{post.id}}">
      <h3 class="post-title"><strong>Название: </strong>{{post.title}}</h3>
      <div class="post-text"><strong>Пост: </strong>{{post.body}}</div>
    </div>
  </div>
</template>

<script>
  export default { //скрипт всегда содержит export default и возвращает объект
    data() { //функция дата содержит (возвращает) модели
      return {
        posts: [
          {id: 0, title: 'JS 1', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa id natus nesciunt pariatur perspiciatis\n' +
                '    quam rem sed ut voluptatibus! Alias aliquid consequatur ducimus illum laboriosam natus officia optio voluptatibus.'},
          {id: 1, title: 'JS 2', body: 'Asperiores at atque consectetur culpa cupiditate dignissimos dolorem doloremque expedita illum magnam nesciunt\n' +
                '    non odit, pariatur provident quibusdam rerum temporibus ullam vitae voluptas, voluptatum. Amet illo nihil quo\n' +
                '    voluptatum. Error?\n' +
                '    quam rem sed ut voluptatibus! Alias aliquid consequatur ducimus illum laboriosam natus officia optio voluptatibus.'},
          {id: 2, title: 'JS 3', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa id natus nesciunt pariatur perspiciatis\n' +
                '    quam rem sed ut voluptatibus! Alias aliquid consequatur ducimus illum laboriosam natus officia optio voluptatibus.'},
          {id: 3, title: 'JS 4', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa id natus nesciunt pariatur perspiciatis\n' +
                '    Asperiores at atque consectetur culpa cupiditate dignissimos dolorem doloremque expedita illum magnam nesciunt\n' +
                '    non odit, pariatur provident quibusdam rerum temporibus ullam vitae voluptas, voluptatum. Amet illo nihil quo\n' +
                '    voluptatum. Error?.'},
          {id: 4, title: 'JS 5', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa id natus nesciunt pariatur perspiciatis\n' +
                '    quam rem sed ut voluptatibus! Alias aliquid consequatur ducimus illum laboriosam natus officia optio voluptatibus.'},
        ],
        title: '',
        body: '',
      }
    },
    methods: { //объект методы содержит методы компонента (без function)
      addPost() {
        const newPost = {
          id: new Date().getTime(),
          title: this.title,
          body: this.body,
        }

        this.posts.push(newPost);
        this.title = '';
        this.body = '';
      }
    }
  }
</script>

<style> /*содержит стили компонента*/
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

h1 {
  text-align: center;
  font-size: 30px;
}
.container {
  margin: 0 auto;
  padding: 20px;
  max-width: 1000px;
}

.post {
  margin-top: 15px;
  padding: 10px;
  border: 2px solid teal;
  max-width: 1000px;
}

.post-text {
  margin-top: 10px;
}

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