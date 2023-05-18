// import { useRouter } from 'vue-router';
import router from './router';
import pinia from '@/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import getPageTitle from '@/utils/get-page-title';
import { usePersonStore } from '@/store/user';
import { DynamicRoutes, FaultTolerantRoute } from '@/router/index';
import { RouteRecordRaw } from 'vue-router';

//全局进度条的配置
NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 1000, // 递增进度条的速度
    showSpinner: true, // 是否显示加载ico
    // trickleSpeed: 200, // 自动递增间隔
    /* minimum: 0.3, // 更改启动时使用的最小百分比 */
    parent: 'body', //指定进度条的父容器
});

// 白名单
const whiteList = ['/login'];

// 状态
const store = usePersonStore(pinia);

// 导航守卫
router.beforeEach((to, from, next) => {
    NProgress.start();
    setTimeout(() => {
        const { token, username } = store;
        if (token && (token === 'admin' || token === 'test')) { // 登陆成功
            if (to.path === '/login') {
                next('/');
                NProgress.done();
            } else {
                if (!username) { // 已登录但需要用户信息
                    store.getInfo()
                        .then((authority) => {
                            // 动态路由过滤及合并
                            const filterRoutes = DynamicRoutes.filter(route => {
                                if ((authority as string[]).includes((route.name as string))) {
                                    return true;
                                } else {
                                    return false;
                                }
                            });
                            filterRoutes.forEach((item) => {
                                router.addRoute((item as RouteRecordRaw));
                            });
                            store.setRoutes(filterRoutes);
                            if (!router.hasRoute('faultToleran')) {
                                router.addRoute(FaultTolerantRoute[0]);
                            }
                            // next();
                            next({ ...to, replace: true });
                        })
                } else {
                    next();
                }
            }
        } else {
            if (whiteList.includes(to.path)) { // 白名单默认放行
                next();
            } else {
                next('/login');
                NProgress.done();
            }
        }
    }, 1000);
});

router.afterEach((to, from) => {
    document.title = getPageTitle((to.meta.title as string));
    NProgress.done();
});