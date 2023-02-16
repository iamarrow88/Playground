<template>
  <h1>JS Blog</h1>
  <div class="container">
  <my-dialog @changeShown="shown=false" v-if="shown">
    <post-form @create="addPost"></post-form>
  </my-dialog>
  <div class="add-post">
    <my-button @click="shown=true">Add Post</my-button>
    <my-select :options="options" v-model="selectedSort"></my-select>
  </div>
    <div v-if="!isPostsLoading">
      <post-list v-if="posts.length > 0" :posts=sortedPosts @remove="removePost"></post-list>
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
import MySelect from "./components/UI/MySelect.vue";
  export default {
    components: {
      MySelect,
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
        options: [
          {name: 'By Title', value: 'title', id: 0},
          {name: 'By Article', value: 'body', id: 1},
        ],
        selectedSort: 'title'
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
    },
    computed: {
      sortedPosts() {
        return [...this.posts].sort((post1, post2) => post1[this.selectedSort].localeCompare(post2[this.selectedSort]))
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
.add-post {
  display: flex;
  justify-content: space-between;
}
</style>