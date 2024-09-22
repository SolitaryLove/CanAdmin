<template>
    <div class="wrapper" ref="toastWrapper" :style="toastWrapperStyle">
        {{ prop.message }}
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, computed, CSSProperties, ComputedRef, nextTick } from 'vue';
const toastWrapper = ref<HTMLElement>();
const LEFT_OFFSET = ref<number>();
const TOP_OFFSET = ref<number>();

const prop = defineProps({
    message: {
        type: String,
        default() {
            return 'Hello world!';
        }
    },
    position: {
        type: String,
        default() {
            return 'top';
        }
    },
    duration: {
        type: Number,
        default() {
            return 3000;
        }
    }
});
// 获取 toast 组件的元素属性
onMounted(() => {
    nextTick(() => {
        LEFT_OFFSET.value = toastWrapper.value!.offsetWidth / 2;
        TOP_OFFSET.value = toastWrapper.value!.offsetHeight / 2;
    });
});
// 控制 toast 的位置
const selfPosition: ComputedRef = computed(() => {
    switch (prop.position) {
        case 'top':
            return 10;
        case 'middle':
            return 50;
        case 'bottom':
            return 90
    }
});
const toastWrapperStyle = computed<CSSProperties>(() => {
    return {
        top: `calc(${selfPosition.value}% - ${TOP_OFFSET.value}px)`,
        left: `calc(50% - ${LEFT_OFFSET.value}px)`,
    }
});
const animationDelay = computed(() => {
    return prop.duration / 1000 + 's';
});

</script>
<style scoped>
.wrapper {
    position: fixed;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    background: #252933;
    border-radius: 7px;
    padding: 10px 15px;
    color: #fff;
    box-shadow: 5px 5px 7px #525556,
        -2px -2px 5px #707374;
    box-sizing: border-box;
    animation: fade-out v-bind('animationDelay') ease-out;
    z-index: 111;
}

@keyframes fade-out {
    0% {
        opacity: 1;
    }

    60% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>
