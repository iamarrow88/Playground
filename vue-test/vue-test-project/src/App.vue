<template>
  <h1>JS Blog</h1>
  <div class="container">
    <my-button @click="getPosts">Get posts</my-button>
  <my-dialog @changeShown="shown=false" v-if="shown">
    <post-form @create="addPost"></post-form>
  </my-dialog>
  <div class="add-post">
    <my-button @click="shown=true">Add Post</my-button>
  </div>
    <div v-if="!isPostsLoading">
      <post-list v-if="posts.length > 0" :posts=posts @remove="removePost"></post-list>
      <div v-else>
        <h3>Nothing to read</h3>
      </div>
    </div>
    <div v-else>
      Posts are loading...
    </div>

  </div>
</template>

<script>
import postForm from "./components/postForm.vue";
import postList from "./components/postList.vue";
import MyDialog from "./components/UI/MyDialog.vue";
import MyInput from "./components/UI/MyInput.vue";
import MyButton from "./components/UI/MyButton.vue";
import axios from "axios";
  export default {
    components: {
      MyButton,
      MyInput,
      MyDialog,
      postForm, postList
    },
    data() {
      return {
        posts: [],
        shown: false,
        isPostsLoading: false,
      }
    },
    methods: {
      addPost(post) {
        this.posts.push(post);
      },
      removePost(post) {
        this.posts = this.posts.filter(el => el.id !== post.id)
      },
      async getPosts() {
        try {
          this.isPostsLoading = true;
           const result = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
              this.posts = result.data;

        } catch (e) {
          console.log(e);
        } finally {
          this.isPostsLoading = false;
        }
      },


    },
    mounted() {
      this.getPosts();
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