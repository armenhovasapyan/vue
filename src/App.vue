<script>
import AdminLayout from './layouts/AdminLayout.vue';
import ClientLayout from './layouts/ClientLayout.vue';

export default {
  name: 'App',
  components: {
    AdminLayout,
    ClientLayout
  },
  data() {
    return {
      isAdmin: false
    }
  },
  mounted() {
    this.initLayout();
  },
  methods: {
    initLayout() {
      this.$router.isReady().then(() => {
        this.isAdmin = this.$route.name.split('.')[0] === 'admin';
      })
    }
  },
}
</script>

<template>
  <AdminLayout v-if="isAdmin">
    <RouterView />
  </AdminLayout>
  <ClientLayout v-else>
    <RouterView />
  </ClientLayout>
</template>

<style scoped></style>
