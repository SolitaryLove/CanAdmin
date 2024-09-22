// JavaScript 可以通过 canvas 的画布编码实现图片转换成 Base64 编码的功能
import { onMounted } from "vue";
type Options = {
    el: string,
}
export function useBase64(options: Options): Promise<{ baseUrl: string }> {
    return new Promise((resolve, reject) => {
        onMounted(() => {
            let img: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement;
            img.onload = () => {
                resolve({
                    baseUrl: base64(img)
                })
            }
        });
        const base64 = (el: HTMLImageElement) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = el.width;
            canvas.height = el.height;
            // 加载图片
            /*  img：图片的 dom 对象
                x, y：图片在画布中显示的初始位置
                width, height：图片在画布中的宽度和高度 */
            ctx?.drawImage(el, 0, 0, canvas.width, canvas.height);
            // 画布编码
            return canvas.toDataURL('image/jpg');
        }
    })
}