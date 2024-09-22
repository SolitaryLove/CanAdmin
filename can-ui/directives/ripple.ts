import { DirectiveBinding } from 'vue'

function rippleEffect(e:MouseEvent) {
    const target = e.target as HTMLElement;
    const circle = document.createElement('span')
    const diameter = Math.max(target.clientWidth, target.clientHeight)
    const radius = diameter / 2

    target.style.position='relative';

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.clientX - target.offsetLeft - radius}px`
    circle.style.top = `${e.clientY - target.offsetTop - radius}px`
    circle.classList.add('ripple')

    const ripple = target.getElementsByClassName('ripple')[0]

    if (ripple) {
        ripple.remove()
    }

    target.appendChild(circle)
}

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        el.addEventListener('click', rippleEffect);
    }
}