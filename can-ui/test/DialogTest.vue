<template>
    <div>测试Dialog
        <button @click="dialog.mount">创建</button>
        <button @click="dialog.unmount">销毁</button>
    </div>
</template>

<script setup lang='ts'>

import { DialogCreator } from '../components/Dialog';
const dialog = new DialogCreator({
    title: 'Dialog',
    content: 'Hello world',
    confirm: () => {
        console.log('test success!')
    }
});

</script>
<style scoped></style>
