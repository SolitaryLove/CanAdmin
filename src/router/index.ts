import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue';
Layout.name='Layout';

// 定义路由
// 路由数组的类型 RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login/index.vue'),
        meta: {
            title: '登录',
            hidden: true
        },
    },
    {
        path: '/404',
        component: () => import('@/views/NotFound/index.vue'),
        meta: {
            title: '404',
            hidden: true
        }
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/views/Dashboard/index.vue'),
        }],
        meta: {
            title: '首页',
            hidden: false,
            icon: 'bx-home-alt',
        }
    },
    {
        path: '/test',
        component: Layout,
        children: [{
            path: '',
            name: 'test',
            component: () => import('@/views/TestPage/index.vue'),
        }],
        meta: {
            title: '测试',
            hidden: false,
            icon: 'bx-bar-chart-alt-2',
        }
    },
    // 404 page must be placed at the end !!!
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        meta: {
            hidden: true
        }
    }

];
// 创建路由实例并传递 routes 配置
// vue2    mode history   vue3    createWebHistory
// vue2    mode hash      vue3    createWebHashHistory
// vue2    mode abstact   vue3    createMemoryHistory
const router = createRouter({
    history: createWebHashHistory(),// hash 模式
    routes,
});
export default router;