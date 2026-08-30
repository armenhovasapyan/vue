import { defineStore } from 'pinia'
import axios from 'axios';
import { useRoute } from 'vue-router';

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
    post: {},
    isValid: false,
    errors: [],
    validatedFields: [
      'title',
      'content'
    ]
  }),
  getters: {
    postTitle: (state) => state.post.title,
  },
  actions: {
    getPost() {
      axios.get(`http://localhost:3000/posts/${useRoute().params.id}`)
        .then(res => {
          this.post = res.data;
        });
    },
    getPosts() {
      axios.get('http://localhost:3000/posts')
        .then(res => {
          this.posts = res.data;
        });
    },
    storePost() {
      if (!this.validateFilds()) {
        return;
      }
      axios.post('http://localhost:3000/posts', this.post)
        .then(res => {
          console.log(res)
        });
    },
    updatePost() {
      axios.patch(`http://localhost:3000/posts/${this.post.id}`, this.post)
        .then(res => {
          console.log(res);
        });
    },
    destroyPost(post) {
      axios.delete(`http://localhost:3000/posts/${post.id}`)
        .then(res => {
          console.log(res);
        });
    },
    validateFilds() {
      this.errors = [];
      this.validatedFields.forEach(element => {
        if (!this.post[element]) {
          this.errors.push(`${element} is required`);
        }
      });
      return this.errors.length < 1;
    }
  },
})