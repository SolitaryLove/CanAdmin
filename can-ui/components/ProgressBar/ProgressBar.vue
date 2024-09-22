<template>
    <div class="wraps">
        <div ref="bar" class="bar"></div>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';
let speed = ref<number>(1);
let bar = ref<HTMLElement>();
let timer = ref<number>(0);
type Fn = () => void;
let startLoading: Fn;
let endLoading: Fn;

onMounted(() => {
    let barDom = bar.value as HTMLDivElement;
    // 开启进度条
    startLoading = () => {
        barDom.style.opacity = '1';
        barDom.style.transition='all .7s';
        speed.value = 1;    
        timer.value = window.requestAnimationFrame(function fn() {
            if (speed.value < 90) {
                speed.value++;
                barDom.style.width = speed.value + '%';
                // 递归调用
                timer.value = window.requestAnimationFrame(fn);
            } else {
                // 重置参数
                speed.value = 1;
                // 终止动画
                window.cancelAnimationFrame(timer.value);
            }
        });
    }
    // 关闭进度条
    endLoading = () => {
        setTimeout(() => {
            window.requestAnimationFrame(() => {
                speed.value = 100;
                barDom.style.width = speed.value + '%';
            });
        }, 1000);
        setTimeout(() => {
            barDom.style.opacity = '0'
            barDom.style.width = '0%';
            barDom.style.transition='none';
        }, 2000);
    }
});
function start() {
    startLoading();
}
function end() {
    endLoading();
}
defineExpose({
    start,
    end
});

</script>
<style scoped>
.wraps {
    position: fixed;
    top: 0;
    width: 100%;
}

.bar {
    height: 7px;
    width: 0;
    background: skyblue;
    transition: all 0.7s;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}
</style>
