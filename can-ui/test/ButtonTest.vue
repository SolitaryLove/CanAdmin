<template>
    <Button type="primary" size="small" @click="showInfo">点击</Button>
</template>

<script setup lang='ts'>
import Button from '../components/Button/index.vue';

function showInfo(){
    console.log('click...');
}

</script>
<style scoped>

</style>
