import { createRouter, createWebHashHistory, RouteRecordName, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue';
Layout.name = 'Layout';

// 通用路由
export const UniversalRoutes: Array<RouteRecordRaw> = [
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
        name: '404',
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
        name: 'dashboard',
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
    /* {
        path: '/test',
        component: Layout,
        name: 'test',
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
    }, */
];

// 容错路由
export const FaultTolerantRoute: Array<RouteRecordRaw> = [
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: ' faultToleran',
        meta: {
            hidden: true
        }
    }
]

// 动态路由
export const DynamicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/test',
        component: Layout,
        name: 'test',
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
    {
        path: '/canui',
        component: Layout,
        name: 'canui',
        children: [{
            path: '',
            name: 'canui',
            component: () => import('@/views/CanUI/index.vue'),
        }],
        meta: {
            title: 'UI',
            hidden: false,
            icon: 'bx-wallet',
        }
    },
]

// 创建路由实例并传递 routes 配置
// vue2    mode history   vue3    createWebHistory
// vue2    mode hash      vue3    createWebHashHistory
// vue2    mode abstact   vue3    createMemoryHistory
const router = createRouter({
    history: createWebHashHistory(),// hash 模式
    routes: UniversalRoutes,
});

// 重置路由
export function resetRouter() {
    // console.log(router.options.routes);
    DynamicRoutes.forEach((item) => {
        router.removeRoute((item.name as RouteRecordName));
    });
}

export default router;