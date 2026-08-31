<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

defineOptions({
    name: 'Posts'
});

const posts = ref([]);

onMounted(() => {
    getPosts();
})

const getPosts = function () {
    axios.get('http://localhost:3000/posts').then(res => posts.value = res.data);
}

</script>

<template>
    <div>
        <div>Posts</div>
        <div>
            <div v-for="post in posts">
                <h3>{{ post.title }}</h3>
                <p>{{ post.content }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
