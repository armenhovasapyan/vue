import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin/dashboard',
            name: 'admin.dashboard.index',
            component: () => import('@/pages/admin/dashboard/index.vue')
        },
        {
            path: '/admin/posts',
            name: 'admin.posts.index',
            component: () => import('@/pages/admin/posts/index.vue')
        },
        {
            path: '/admin/posts/create',
            name: 'admin.posts.create',
            component: () => import('@/pages/admin/posts/create.vue')
        },
        {
            path: '/admin/posts/:id',
            name: 'admin.posts.show',
            component: () => import('@/pages/admin/posts/show.vue')
        },
        {
            path: '/admin/posts/:id/edit',
            name: 'admin.posts.edit',
            component: () => import('@/pages/admin/posts/edit.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard.index',
            component: () => import('@/pages/dashboard/index.vue')
        },
        {
            path: '/posts',
            name: 'posts.index',
            component: () => import('@/pages/posts/index.vue')
        }
    ],
});

export default router;