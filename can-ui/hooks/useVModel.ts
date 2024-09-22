// 用计算属性包一层，保证表单类高阶组件的 Props 单向数据流
import { computed } from 'vue';
export function useVModel(props: object, propName: string, emit: Function) {
    return computed({
        get() {
            return new Proxy(props, {
                set(target, name, val) {
                    console.log('emit', name, val);
                    emit('update:modelValue', {
                        ...target,
                        [name]: val,
                    });
                    return true;
                }
            });
        },
        set(val) {
            emit('update:' + propName, val);
        }
    });
}