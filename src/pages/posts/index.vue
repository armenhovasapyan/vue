<script>
import axios from 'axios';

export default {
    name: 'index',
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        this.getPosts()
    },
    methods: {
        getPosts(){
            axios.get('http://localhost:3000/posts')
            .then(res => {
                console.log(res);
                this.posts = res.data;
            })
            .catch();
        }
    }
}
</script>
<template>
    <h1>Posts</h1>
    <div>
        <div v-for="post in posts" class="mb-4 pb-4 border-b border-gray-200">
            <h3>{{ post.title }}</h3>
            <p>{{ post.content }}</p>
        </div>
    </div>
</template>
<style></style>