<script setup>
import { useRoute, useRouter } from 'vue-router';
import AdminLayout from '@/pages/layouts/AdminLayout.vue';
import ClientLayout from './pages/layouts/ClientLayout.vue';
import { ref } from 'vue';

defineOptions({
    name: 'App'
});

const router = useRouter();
const route = useRoute();

const isAdmin = ref(false);


router.isReady().then(() => {
    isAdmin.value = route.name.split('.')[0] === 'admin';
})


</script>

<template>
    <div>
        <AdminLayout v-if="isAdmin">
            <router-view></router-view>
        </AdminLayout>
        <ClientLayout v-else>
            <router-view></router-view>
        </ClientLayout>
    </div>
</template>

<style scoped></style>
