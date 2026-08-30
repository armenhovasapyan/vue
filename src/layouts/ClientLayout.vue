<script>
export default {
  name: 'ClientLayout'
}
</script>

<template>
  <div>
    <section class="w-full p-4 gb-white">
      <header>
        Client Header
      </header>
    </section>
    <section class="flex">
      <aside class="w-1/4 bg-gray-700 p-4 h-screen"></aside>
      <article class="w-3/4 gb-gray-50 p-4">
        <slot />
      </article>
    </section>
  </div>
</template>

<style scoped>

</style>
