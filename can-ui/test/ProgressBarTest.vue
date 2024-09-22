<template>
    <Button @click="start()" size="small">开始加载</Button>
    <Button @click="end()" size="small">停止加载</Button>
</template>

<script setup lang='ts'>
import ProgressBarVnode from '../components/ProgressBar';
import Button from '../components/Button/index.vue';
function start(){
    ProgressBarVnode.component?.exposed?.start();
}
function end(){
    ProgressBarVnode.component?.exposed?.end();
}

</script>
<style scoped>

</style>
