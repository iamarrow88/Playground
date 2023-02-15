<template>
  <h1>JS Blog</h1>
  <div class="container">
  <my-dialog @changeShown="shown=false" v-if="shown">
    <post-form @create="addPost"></post-form>
  </my-dialog>
  <div class="add-post">
    <my-button @click="shown=true">Add Post</my-button>
  </div>
  <post-list v-if="posts.length > 0" :posts=posts @remove="removePost"></post-list>
  <div v-else>
    <h3>Nothing to read</h3>
  </div>
  </div>
</template>

<script>
import postForm from "./components/postForm.vue";
import postList from "./components/postList.vue";
import MyDialog from "./components/UI/MyDialog.vue";
import MyInput from "./components/UI/MyInput.vue";
import MyButton from "./components/UI/MyButton.vue";
  export default {
    components: {
      MyButton,
      MyInput,
      MyDialog,
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
        shown: false
      }
    },
    methods: {
      addPost(post) {
        this.posts.push(post);
      },
      removePost(post) {
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