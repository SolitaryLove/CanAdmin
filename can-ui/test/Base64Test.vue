<template>
    <div>
        <img src="../assets/images/catgirl.jpg" alt="" id="catGirl">
        <span>【{{ base64Data || '正在加载中...' }}】</span>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useBase64 } from '../hooks/useBase64';
const base64Data = ref('');
useBase64({ el: '#catGirl' }).then(value => base64Data.value = value.baseUrl.substring(0,14));

</script>
<style scoped>
#catGirl {
    width:300px;
}
</style>
