import { DirectiveBinding } from 'vue'
import loadimage from '@/assets/images/loading.gif';

export default {
    mounted(el: HTMLImageElement, binding: DirectiveBinding) {
        // 1. 先让图片显示加载中...
        el.src = loadimage;
        // 2. 实例化一个：观察检测者
        const observer = new IntersectionObserver((entries) => {
            // 4. 在观察监测者的对应执行函数中获取到isIntersecting属性（是否交叉）
            let isIntersecting = entries[0].isIntersecting;
            // 5. 如果交叉了，就让其去加载对应src的真正地址
            if (isIntersecting) {
                setTimeout(() => {
                    el.src = binding.value;
                    // 6. 加载成功就不用管它
                    el.onload = (res) => console.log('加载成功', res);
                    /* // 7. 加载失败了就去展示一个错误图片的占位
                    el.onerror=(err)=>{
                        console.log('加载失败',err);
                        el.src=errorimage;
                    } */
                    // 8. 无论加载成功或失败，都停止观察任务了
                    observer.unobserve(el);
                }, 2000)
            }
        });
        // 3.让这个观察检测者去观察对应img标签图片
        observer.observe(el);
    }
}