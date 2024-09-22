import { DirectiveBinding } from 'vue'

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        // mouse 版本
        /* el.addEventListener('mousedown', (e: MouseEvent) => {
            el.style.position = 'absolute';
            const offsetx = e.offsetX;
            const offsety = e.offsetY;
            function move(e: MouseEvent) {
                let moveX = e.clientX - offsetx;
                let moveY = e.clientY - offsety;
                if (moveX < 0) {
                    moveX = 0;
                } else if (moveX > window.innerWidth - el.offsetWidth) {
                    moveX = window.innerWidth - el.offsetWidth;
                }
                if (moveY < 0) {
                    moveY = 0;
                } else if (moveY > window.innerHeight - el.offsetHeight) {
                    moveY = window.innerHeight - el.offsetHeight;
                }
                el.style.top = moveY + 'px';
                el.style.left = moveX + 'px';
            }
            document.addEventListener('mousemove', move);
            el.addEventListener('mouseup', (e: MouseEvent) => {
                document.removeEventListener('mousemove', move);
            });
        }); */

        // DnD 版本
        let startClientX = 0;
        let startClientY = 0;
        // 记录初始位置
        let elLeft = 0;
        let elTop = 0;

        el.setAttribute('draggable', 'true');
        el.style.position = 'absolute';
        el.addEventListener('dragstart', (e: DragEvent) => {
            startClientX = e.clientX;
            startClientY = e.clientY;
        });
        el.addEventListener('dragend', (e: DragEvent) => {
            let x = e.clientX - startClientX;
            let y = e.clientY - startClientY;
            elLeft += x;
            elTop += y;
            el.style.top = elTop + 'px';
            el.style.left = elLeft + 'px';
        });
    }
}