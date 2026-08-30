<script>
export default {
  name: 'AdminLayout'
}
</script>

<template>
  <div>
    <section class="w-full p-4 gb-white">
      <header>
        Admin Header
      </header>
    </section>
    <section class="flex">
      <aside class="w-1/4 bg-gray-700 p-4 h-screen">
        <router-link :to="{name: 'admin.dashboard'}" class="block p-4 text-gray-200 border-b border-gray-500">Dashboard</router-link>
        <router-link :to="{name: 'admin.posts.index'}" class="block p-4 text-gray-200 border-b border-gray-500">Posts</router-link>
      </aside>
      <article class="w-3/4 gb-gray-50 p-4">
        <slot />
      </article>
    </section>
  </div>
</template>

<style scoped>

</style>
