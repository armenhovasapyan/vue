import { defineStore } from 'pinia';
import axios from 'axios';
import { useRoute } from 'vue-router';


export const usePostStore = defineStore('posts', {
    state: () => ({
        posts: [],
        errors: [],
        post: {},

    }),

    getters: {
        postTitle: (state) => state.post.title,
    },

    actions: {
        getPost() {
            axios.get(`http://localhost:3000/posts/${useRoute().params.id}`).then(res => this.post = res.data)
        },
        getPosts() {
            axios.get('http://localhost:3000/posts').then(res => this.posts = res.data);
        },
        storePost() {
            if (this.isInValid()) {
                return;
            }
            console.log(this.post);
            axios.post('http://localhost:3000/posts', this.post).then(res => console.log(res.data));
        },
        updatePost() {
            if (this.isInValid()) {
                return;
            }
            axios.patch(`http://localhost:3000/posts/${this.post.id}`, this.post).then(res => console.log(res));
        },
        deletePost(post) {
            axios.delete(`http://localhost:3000/posts/${post.id}`).then(res => console.log(res.data));
        },
        isInValid() {
            this.errors = [];
            if (!this.post.title) {
                this.errors.push('title is required');
            }

            if (!this.post.content) {
                this.errors.push('content is required');
            }

            return this.errors.length > 0
        }
    },
})