<script setup>
defineOptions({
    name: "AdminLayout"
})
</script>

<template>
    <div>
        <section class="bg-white p-4">
            <header>
                Admin Panel
            </header>
        </section>
        <section class="flex">
            <aside class="bg-gray-700 w-1/4 min-h-screen text-white">
                <router-link :to="{name: 'admin.dashboard.index'}" class="block text-gray-200 p-4 border-b border-gray-500">Dashboard</router-link>
                <router-link :to="{name: 'admin.posts.index'}" class="block text-gray-200 p-4 border-b border-gray-500">Posts</router-link>
            </aside>
            <article class="bg-gray-50 w-3/4 p-4">
                <slot />
            </article>
        </section>
    </div>
</template>

<style></style>