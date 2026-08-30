<script>
import { usePostStore } from '@/stors/post.js';

export default {
    name: 'index',
    data() {
        return {
            postStore: usePostStore()
        }
    },
    mounted() {
        this.postStore.getPosts()
    }
}
</script>
<template>
    <div>
        <div>
            <h3 class="mb-4 text-lg">Posts</h3>
        </div>
        <div class="mb-4">
            <router-link :to="{ name: 'admin.posts.create' }"
                class="inline-block px-3 py-2 bg-sky-600 text-white cursor-pointer">Create Post</router-link>
        </div>
        <div>
            <table class="w-full text-sm border-l border-r border-gray-200">
                <thead>
                    <tr>
                        <th class="text-left text-gray-600 bg-gray-100 border-b border-gray-200 p-4">ID</th>
                        <th class="text-left text-gray-600 bg-gray-100 border-b border-gray-200 p-4">Title</th>
                        <th class="text-left text-gray-600 bg-gray-100 border-b border-gray-200 p-4">Content</th>
                        <th class="text-left text-gray-600 bg-gray-100 border-b border-gray-200 p-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in postStore.posts">
                        <td class="border-b border-gray-200 bg-white p-4">{{ post.id }}</td>
                        <td class="border-b border-gray-200 bg-white p-4">
                            <router-link :to="{ name: 'admin.posts.show', params: { id: post.id } }">
                                {{ post.title }}
                            </router-link>
                        </td>
                        <td class="border-b border-gray-200 bg-white p-4">{{ post.content }}</td>
                        <td class="border-b border-gray-200 bg-white p-4">
                            <div class="flex item-center mr-2">
                                <router-link :to="{ name: 'admin.posts.edit', params: { id: post.id } }"
                                    class="inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="size-6 cursor-pointer text-emerald-600">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                </router-link>
                                <div @click.stop="postStore.destroyPost(post)">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="size-6 cursor-pointer text-red-600">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style></style>