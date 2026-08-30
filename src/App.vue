<script>
import PostItem from "@/components/post/PostItem.vue";
import {sayHello} from "@/composables/sayHello.js";

export default {
  name: 'app',

  mounted(){
    this.sayHello()
  },

  data() {
    return {
      post: {},
      posts: [],
      editedPost: {},
      errors: [],
      name: 'hello',
      validateFields: [
        'title',
        'content'
      ]
    }
  },

  provide() {
    return {
      posts: this.posts
    }
  },

  components: {
    PostItem
  },

  computed: {
    favoredPosts(){
      return this.posts.filter(post => post.is_favored === true);
    },
    changedName() {
      return 1111;
    }
  },

  methods: {
    storePost() {
      this.errors = [];
      if (!this.isValidated()) {
        return;
      }
      this.posts.unshift(this.post);
      const postImage = this.$refs.post_image;
      postImage.value = null;
      this.post = {};
      this.sayHello();
    },
    editedPostEvent(post) {
      this.editedPost.index = this.posts.indexOf(post);
      this.editedPost.title = post.title;
      this.editedPost.content = post.content;
      console.log(post)
    },
    updatePost() {
      const post = this.posts[this.editedPost.index];
      post.title = this.editedPost.title;
      post.content = this.editedPost.content;
      this.editedPost = {};
    },
    isValidated() {
      this.errors = [];
      this.validateFields.forEach(field => {
        if (!this.post[field]) {
          this.errors.push(`${field} is required`);
        }
      });

      return this.errors.length < 1;
    },
    sayHello
  },
  watch: {
    post: {
      handle(n, o) {
        this.errors = [];
      },
      deep: true
    }
  }
}
</script>

<template>
  <div @click="editedPost = {}" v-if="Object.keys(editedPost).length > 0" class="model-shadow">
    <div @click.stop class="model">
      <div class="model-header mb-4">
        <div class="">
          <h3 class="text-lg">Title</h3>
        </div>
      </div>
      <div class="model-body">
        <div class="p-4 mb-4 bg-white border border-gray-200">
          <div class="mb-4">
            <input type="text" v-model="editedPost.title" placeholder="title" class="border border-gray-200 p-4 w-full">
          </div>
          <div class="mb-4">
            <textarea placeholder="content" v-model="editedPost.content"
              class="border border-gray-200 p-4 w-full"></textarea>
          </div>
          <div>
            <a @click.prevent="updatePost" href="#"
              class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white">Update Post</a>
          </div>
        </div>
      </div>
      <div class="model-footer">
        <div>
          <h3>footer</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="w-1/2 mx-auto p-4">
    <div class="p-4 mb-4 bg-white border border-gray-200">
      <div class="mb-4">
        <input type="text" v-model.trim="post.title" placeholder="title" class="border border-gray-200 p-4 w-full">
      </div>
      <div class="mb-4">
        <textarea @keyup.ctrl.enter="storePost" placeholder="content" v-model.trim="post.content"
          class="border border-gray-200 p-4 w-full"></textarea>
      </div>
      <div class="mb-4">
        <input ref="post_image" type="file" placeholder="content" class="border border-gray-200 p-4 w-full" />
      </div>
      <div v-if="this.errors.length > 0">
        <div v-for="error in this.errors" class="text-red-600 mb-2">{{ error }}</div>
      </div>
      <div>
        <a @click.prevent="storePost" href="#"
          class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white">Add Post</a>
      </div>
    </div>
    {{ name }}
    {{ changedName }}
    <div class="flex justify-between">
      <div class="w-1/2 mr-4">
        <h3 class="mb-2">All</h3>
        <PostItem @postEdited="editedPostEvent" v-for="postItem in posts" :post="postItem">
        </PostItem>
      </div>
      <div class="w-1/2">
        <h3 class="mb-2">Faworite</h3>
        <PostItem @postEdited="editedPostEvent" v-for="postItem in favoredPosts" :post="postItem">
        </PostItem>
      </div>
    </div>
  </div>
</template>

<style scoped>
.model-shadow {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.model {
  width: 50%;
  background: #fff;
  padding: 20px;
}
</style>
