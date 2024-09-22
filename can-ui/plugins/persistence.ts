import { toRaw } from 'vue'
import { PiniaPluginContext } from 'pinia';


const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}
const getStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {};
}
type Options = {
    key?: string
}
const __piniaKey__ = 'solitary';// 默认key


export const piniaPlugin = (options: Options) => {
    // 函数柯里化
    return (context: PiniaPluginContext) => {
        const { store } = context;
        const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`);
        store.$subscribe(() => {
            // 将state存储到localStorage中（将响应式对象转换成原始对象）
            setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state));
        });
        // 返回给store
        return { ...data };
    }
}

// 使用方法
/* store.use(piniaPlugin({
    key: "pinia"
}));
 */
