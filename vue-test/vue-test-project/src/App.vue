<template>
  <h1>JS Blog</h1>
  <div class="container">
  <my-dialog @changeShown="shown=false" v-if="shown">
    <post-form @create="addPost"></post-form>
  </my-dialog>
  <div class="add-post">
    <my-button @click="shown=true">Add Post</my-button>
    <my-select :options="options" v-model="selectedSort"></my-select> <!--6. вмонтировали выпадающий список
    в родителя
    7. связали v-modal родителя с полем, где будет храниться выбранный элемент списка
    8.:options="options" - передали массив доступных вариантов в ребенка
    -->
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
        selectedSort: ''
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
    watch: { /*
    9. создали watch (отслеживает изменение значения модели. название такое же, как у
    отслеживаемой модели!
    10.описываем, что нужно делать, когда значение модели изменено*/
      selectedSort(newValue) {
        return this.posts.sort((post1, post2) => post1[newValue].localeCompare(post2[newValue]))
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