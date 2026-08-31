<script setup>
import { onMounted } from 'vue';
import { usePostStore } from '@/store/post.js';

defineOptions({
    name: 'Create'
});

const postStore = usePostStore();

onMounted(() => {
    postStore.post = {}
});

</script>

<template>
    <div>
        <div class="mb-4">
            <h3>Create Post</h3>
        </div>
        <div class="mx-auto p-4">
            <div class="bg-white border border-gray-200 p-4">
                <div class="mb-4">
                    <input v-model="postStore.post.title" type="text" placeholder="title"
                        class="p-4 border border-gray-200 w-full">
                </div>
                <div class="mb-4">
                    <textarea v-model="postStore.post.content" placeholder="Content" name="content"
                        class="p-4 border border-gray-200 w-full"></textarea>
                </div>
                <div v-if="postStore.errors.length > 0" class="mb-4">
                    <div v-for="error in postStore.errors" class="text-red-600">{{ error }}</div>
                </div>
                <div>
                    <a @click.prevent="postStore.storePost"
                        class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white" href="#">Store
                        Post</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
