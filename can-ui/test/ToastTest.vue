<template>
    <div>
        测试Toast
        <Button @click="show">显示</Button>
    </div>
</template>
  
<script setup lang='ts'>
import { ToastCreator } from '../components/Toast';
import Button from '../components/Button/index.vue';

const toast = new ToastCreator({
    message: 'Hello Solitary!',
    duration: 5000
});
function show() {
    toast.present();
}

</script>
<style scoped></style>
  