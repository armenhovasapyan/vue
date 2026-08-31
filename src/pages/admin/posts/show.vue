<script setup>
import { onMounted } from 'vue';
import { usePostStore } from '@/store/post.js';

defineOptions({
    name: 'Show'
});

const postStore = usePostStore();

onMounted(() => {
    postStore.getPost();
});

</script>

<template>
    <div>
        <div class="mb-4">
            <h3>Post ID: {{ postStore.post.id }}</h3>
        </div>
        <div>
            <div class="bg-white border border-gray-200 p-4">
                <h3 class="mb-4 text-lg">{{ postStore.postTitle }}</h3>
                <p class="text-sm">{{ postStore.post.content }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
