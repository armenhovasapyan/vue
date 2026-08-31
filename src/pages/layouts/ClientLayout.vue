<script setup>
defineOptions({
    name: "ClientLayout"
})
</script>

<template>
    <div>
        <section class="bg-white p-4">
            <header>
                Client Panel
            </header>
        </section>
        <section class="flex">
            <aside class="bg-gray-700 w-1/4 min-h-screen text-white">
                Aside
            </aside>
            <article class="bg-gray-50 w-3/4 p-4">
                <slot />
            </article>
        </section>
    </div>
</template>

<style></style>