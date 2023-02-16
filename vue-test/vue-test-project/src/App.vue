<template>
  <h1>JS Blog</h1>
  <div class="container">
    <my-dialog @changeShown="shown=false" v-if="shown">
      <post-form @create="addPost"></post-form>
    </my-dialog>
    <my-input v-model:value="keyToSearch"
              placeholder="Search..." /> <!--1. поиск. добавляем в инпут
              v-model:value="keyToSearch" - модель, где будет храниться
              ключевое слово для поиска-->
    <div class="add-post">
      <my-button @click="shown=true">Add Post</my-button>
      <my-select :options="options" v-model="selectedSort"></my-select>
    </div>
    <div v-if="!isPostsLoading"> <!--3. этот результат передаем в дочерний элемент
                                  для отрисовки-->
      <post-list v-if="posts.length > 0" :posts=searchedAndSortedPosts @remove="removePost"></post-list>
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
          {name: 'By ID', value: 'id', id: 2},
        ],
        selectedSort: 'title',
        keyToSearch: '' //2. определяем ее в компоненте
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
        if(this.selectedSort === 'id') {
          return [...this.posts].sort((post1, post2) => +post1[this.selectedSort] - +post2[this.selectedSort])

        } else {
          return [...this.posts].sort((post1, post2) => post1[this.selectedSort].localeCompare(post2[this.selectedSort]))
        }
      },
      searchedAndSortedPosts(){ //3. также в компьютед описываем функцию, которая
        //будет что-то делать с массивом и возвращать результат
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.keyToSearch.toLowerCase()))
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