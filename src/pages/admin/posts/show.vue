<script>
import { usePostStore } from '@/stors/post.js';

export default {
    name: 'show',
    data() {
        return {
            postStore: usePostStore()
        }
    },
    mounted() {
        this.postStore.getPost()
    }
}
</script>
<template>
    <div>
        <div class="mb-4">
            <router-link :to="{ name: 'admin.posts.index' }"
                class="inline-block px-3 py-2 bg-sky-600 text-white cursor-pointer">Back</router-link>
        </div>
        <div>
            <h3 class="mb-4 text-lg">{{ postStore.postTitle }}</h3>
        </div>
        <div>
            <p>
                {{ postStore.post.content }}
            </p>
        </div>
    </div>
</template>
<style></style>