<script>
import { usePostStore } from '@/stors/post.js';

export default {
    name: 'create',
    data() {
        return {
            postStore: usePostStore()
        }
    },
    mounted() {
        this.postStore.post = {}
    }
}
</script>
<template>
    <div>
        <div class="bg-white p-4 border border-gray-200">
            <div class="mb-4">
                <router-link :to="{ name: 'admin.posts.index' }"
                    class="inline-block px-3 py-2 bg-sky-600 text-white cursor-pointer">
                    Back
                </router-link>
            </div>
            <div class="mb-4">
                <input v-model="postStore.post.title" placeholder="Title" type="text"
                    class="border border-gray-200 p-2 w-full">
            </div>
            <div class="mb-4">
                <textarea v-model="postStore.post.content" placeholder="Content"
                    class="border border-gray-200 p-2 w-full"></textarea>
            </div>
            <div class="mb-4">
                <a @click.stop="postStore.storePost" href="#" class="inline-block px-3 py-2 bg-sky-600 text-white">Store
                    Post</a>
            </div>
            <div>
                <p v-for="error in postStore.errors" class="text-red-600">{{ error }}</p>
            </div>
        </div>
    </div>
</template>
<style></style>