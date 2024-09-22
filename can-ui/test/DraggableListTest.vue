<template>
    <DraggableList :listData="listData" />
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import DraggableList from '../components/DraggableList/index.vue';
const listData = reactive([
    {
        content: 'one',
        key: '001'
    },
    {
        content: 'two',
        key: '002',
    },
    {
        content: 'three',
        key: '003'
    }
])

</script>
<style scoped></style>
