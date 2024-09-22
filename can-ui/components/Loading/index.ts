import type { App, VNode } from 'vue';
import { createVNode, render } from 'vue'
import Loading from './Loading.vue';

export type loadingType={
    show: () => void;
    hide: () => void;
}

export default {
    install(app: App) {
        const vnode: VNode = createVNode(Loading);
        render(vnode, document.body);
        /* app.config.globalProperties.$loading = {
            show: vnode?.component?.exposed?.show,
            hide: vnode?.component?.exposed?.hide
        } */
        const $loading:loadingType = {
            show: vnode?.component?.exposed?.show,
            hide: vnode?.component?.exposed?.hide
        }
        app.provide('$loading',$loading);
    }
}