<template>
  <h1>JS Blog</h1>
  <div class="container">
  <post-form @create="addPost"></post-form>
  <post-list :posts="posts" @remove="removePost"></post-list> <!--2. заэмиченное событие прослушиваем
  на родителе, в котором лежи дочерний элемент, коорый это событие создал
  3. прослушиваем конкретное событие, которое создал дочерний элемент,
  определяем функцию, которая его обработает-->

  </div>
</template>

<script>
import postForm from "./components/postForm.vue";
import postList from "./components/postList.vue";
  export default {
    components: {
      postForm, postList
    },
    data() {
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
      }
    },
    methods: {
      addPost(post) {
        this.posts.push(post);
      },
      removePost(post) { //описываем функцию, которая должна сработать
        this.posts = this.posts.filter(el => el.id !== post.id)
      }
    }
  }
</script>

<style>
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
</style>