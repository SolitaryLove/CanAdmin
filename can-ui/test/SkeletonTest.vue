<template>
    <Suspense>
        <template #default>
            <Async></Async>
        </template>
        <template #fallback>
            <Skeleton></Skeleton>
        </template>
    </Suspense>
</template>

<script setup lang='ts'>
import Skeleton from '../components/Skeleton/index.vue';
import { defineAsyncComponent } from 'vue';
// 加载异步组件
const Async = defineAsyncComponent(() => import('../components/Skeleton/Async.vue'));

</script>
<style scoped></style>
