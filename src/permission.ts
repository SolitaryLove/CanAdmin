// import { useRouter } from 'vue-router';
import router from './router';
import pinia from '@/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import getPageTitle from '@/utils/get-page-title';
import { usePersonStore } from '@/store/user';

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

router.beforeEach((to, from, next) => {
    NProgress.start();
    setTimeout(() => {
        const { token, username } = store;
        if (token && token==='success') {
            if (to.path === '/login') {
                next('/');
                NProgress.done();
            } else {
                if (!username) {
                    store.getInfo();
                    next();
                }
                next();
            }
        } else {
            if (whiteList.includes(to.path)) {
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