<script setup>
import { reactive, ref, watch } from 'vue';
import PostItem from './components/post/PostItem.vue';

const posts = ref([]);
const isModalOpen = ref(false);
const errors = ref([]);

let post = reactive({
    title: '',
    content: ''
});

let editedPost = reactive({
    title: '',
    content: ''
});

const storePost = function () {
    if (isNotValidated()) {
        return;
    }
    posts.value.unshift({
        title: post.title,
        content: post.content
    });

    Object.assign(post, {
        title: '',
        content: ''
    })
}

const editPost = function (post) {
    isModalOpen.value = true;
    Object.assign(editedPost, {
        index: posts.value.indexOf(post),
        title: post.title,
        content: post.content
    })
}

const updatePost = function () {
    console.log(posts.value[editedPost.index]);
    Object.assign(posts.value[editedPost.index], {
        title: editedPost.title,
        content: editedPost.content
    })
    console.log(posts.value);
    isModalOpen.value = false;
}

const deletePost = function (post) {
    posts.value = posts.value.filter(item => item != post);
}

const closeModal = function () {
    isModalOpen.value = false;
}

const isNotValidated = function () {
    errors.value = [];
    if (!post.title) {
        errors.value.push('title is required');
    }

    if (!post.content) {
        errors.value.push('content is required');
    }

    return errors.value.length > 0;
}

watch(post, (n, o) => {
    errors.value = [];
});

</script>

<template>
    <div v-if="isModalOpen" class="modal-shadow" @click="closeModal">
        <div @click.stop class="modal bg-white border border-gray-200 p-4">
            <div class="mb-4">
                <input v-model="editedPost.title" type="text" placeholder="title"
                    class="p-4 border border-gray-200 w-full">
            </div>
            <div class="mb-4">
                <textarea v-model="editedPost.content" placeholder="Content" name="content"
                    class="p-4 border border-gray-200 w-full"></textarea>
            </div>
            <div>
                <a @click="updatePost" class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white"
                    href="#">Update Post</a>
            </div>
        </div>
    </div>
    <div class="w-1/2 mx-auto p-4">
        <div class="bg-white border border-gray-200 p-4">
            <div class="mb-4">
                <input v-model="post.title" type="text" placeholder="title" class="p-4 border border-gray-200 w-full">
            </div>
            <div class="mb-4">
                <textarea v-model="post.content" placeholder="Content" name="content"
                    class="p-4 border border-gray-200 w-full"></textarea>
            </div>
            <div v-if="errors.length > 0" class="mb-4">
                <div v-for="error in errors" class="text-red-600">{{ error }}</div>
            </div>
            <div>
                <a @click.prevent="storePost" class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white"
                    href="#">Store Post</a>
            </div>
        </div>
        {{ posts }}
        <div>
            <PostItem @deletepost="deletePost" v-for="post in posts" :post="post"></PostItem>
        </div>
    </div>
</template>

<style scoped>
.modal-shadow {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    width: 50%;
}
</style>
