<template>
    <ul class="wrap" ref="wrapEl">
        <li v-for="item in listData" :key="item.key" draggable="true">
            {{ item.content }}
        </li>
    </ul>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';
interface listItem {
    key: string,
    content: string,
}
const { listData } = defineProps<{
    listData: listItem[]
}>();

const wrapEl = ref<HTMLUListElement>();
// 当前拖拽的元素
let source_node: HTMLLIElement;
onMounted(() => {
    // 记录元素位置信息
    function record(eleAll: HTMLElement[]) {
        eleAll.forEach((item) => {
            const { top, left } = item.getBoundingClientRect();
            item.setAttribute('_top', top.toString());
            item.setAttribute('_left', left.toString());
        });
    }
    // 记录最后的位置，并执行动画
    function lastAnimate(eleAll: HTMLElement[]) {
        eleAll.forEach((item) => {
            const { top, left } = item.getBoundingClientRect();
            if (item.getAttribute('_left')) {
                let _top = parseInt(item.getAttribute('_top')!);
                let _left = parseInt(item.getAttribute('_left')!);
                item.style.transform = `translate(${_left - left}px,${_top - top}px)`;
                let rafId = requestAnimationFrame(() => {
                    item.style.transition = 'transform 0.3s ease-out';
                    item.style.transform = 'none';
                });
                item.addEventListener('transitionend', () => {
                    item.style.transition = 'none';
                    cancelAnimationFrame(rafId);
                });
            }
        });
    }
    // 当用户开始开始拖拽元素时触发
    wrapEl.value!.addEventListener('dragstart', (e: DragEvent) => {
        const wrapElChildren = Array.from(wrapEl.value!.children) as HTMLElement[];
        source_node = e.target as HTMLLIElement;
        record(wrapElChildren);
        // console.log(e.target)
        source_node.classList.add('moving');
        e.dataTransfer!.effectAllowed = 'move';
    });
    // 当元素被拖拽到可释放目标上触发
    wrapEl.value!.addEventListener('dragover', (e: DragEvent) => {
        e.preventDefault();
    });
    // 当元素拖拽到一个可释放目标时触发
    wrapEl.value!.addEventListener('dragenter', (e: DragEvent) => {
        e.preventDefault();
        const wrapElChildren = Array.from(wrapEl.value!.children);
        if (e.target === wrapEl.value || e.target === source_node) return;
        const sourceIndex = wrapElChildren.indexOf(source_node);
        const targetIndex = wrapElChildren.indexOf(e.target as HTMLLIElement);
        // console.log(sourceIndex,targetIndex);
        // 判断元素拖拽的方向
        if (sourceIndex < targetIndex) {
            let target_node = e.target as HTMLElement;
            wrapEl.value!.insertBefore(source_node, target_node!.nextElementSibling);
        } else {
            wrapEl.value!.insertBefore(source_node, e.target as HTMLElement);
        }
        // 传入改变位置的两个元素，比较差异，执行动画
        lastAnimate([e.target as HTMLLIElement, source_node]);
    });
    // 当用户的拖拽操作结束时触发
    wrapEl.value!.addEventListener('dragend', (e: DragEvent) => {
        e.preventDefault();
        (e.target as HTMLLIElement).classList.remove('moving');
    });
});


</script>
<style scoped>
.wrap {
    width: 300px;
    height: 200px;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 20px auto;
}

.wrap li {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 10px;
    background: darkgray;
    box-sizing: border-box;
    border-radius: 5px;
    font-weight: 600;
    color: #fff;
}

.wrap li.moving {
    background-color: transparent;
    /* display: none; */
    border: 1px dashed gray;
}
</style>
