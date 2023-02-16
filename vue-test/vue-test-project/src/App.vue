<template>
  <h1>JS Blog</h1>
  <div class="container">
    <my-dialog @changeShown="shown=false" v-if="shown">
      <post-form @create="addPost"></post-form>
    </my-dialog>
    <my-input v-model:value="keyToSearch"
              placeholder="Search..." />
    <div class="add-post">
      <my-button @click="shown=true">Add Post</my-button>
      <my-select :options="options" v-model="selectedSort"></my-select>
    </div>
    <div v-if="!isPostsLoading">
      <post-list v-if="posts.length > 0" :posts=searchedAndSortedPosts @remove="removePost"></post-list>
      <div v-else>
        <h3>Nothing to read</h3>
      </div>
    </div>
    <div v-else>
      Posts are loading...
    </div>

    <div class="pages">
<!--Ручная пагинация:
 1. в v-for можно указывать число, до которого будут генерироваться элементы
 2. в функцию, срабатывающую при клике, можно передать аргумент
 3. можно байндить класс при определенном условии (:claas="{
 'название класса': условие, при выполнении которого он будет навешиваться}"
 также можно делать и со стилями-->
      <div class="pag-btn"
           v-for="pageNumber in allPages"
           @click="changePage(pageNumber)"
      :class="{
          'current-page': page === pageNumber
           }">{{pageNumber}}</div>
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
        keyToSearch: '',
        limit: 10,
        page: 1,
        allPages: 1,
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
           const result = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
             params: {
               _limit: this.limit,
               _page: this.page
             }
           });
           this.allPages = Math.ceil(result.headers['x-total-count'] / this.limit);
           console.log(this.allPages);
           this.posts = result.data;

        } catch (e) {
          console.log(e);
        } finally {
          this.isPostsLoading = false;
        }
      },
      changePage(pageNumber) {
        this.page = pageNumber;
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
      searchedAndSortedPosts(){
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.keyToSearch.toLowerCase()))
      }
    },
    watch: {
      page() {
        this.getPosts();
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

.pages {
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  width: 60%;
}
.pag-btn {
  border: 1px solid #000;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
</style>