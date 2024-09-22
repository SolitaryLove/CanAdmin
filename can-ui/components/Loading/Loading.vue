<template>
    <div v-show="isShow" class="wrapper">
        <span class="loading-content">loading...</span>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
let isShow = ref<boolean>(false);
function show() {
    isShow.value = true;
}
function hide() {
    isShow.value = false;
}
defineExpose({
    show,
    hide
});
</script>
<style scoped>
.wrapper {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .7);
    display: flex;
    justify-content: center;
    align-items: center;
}
.loading-content{
    font-size:46px;
    font-weight:600;
    color:#fff;
}
</style>
