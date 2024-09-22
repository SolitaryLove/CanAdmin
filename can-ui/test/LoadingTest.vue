<script setup lang="ts">

// import { getCurrentInstance } from 'vue';
import { inject } from 'vue';
import { loadingType } from '../components/Loading'


// 获取当前应用实例
// const instance = getCurrentInstance();
// instance?.proxy?.$loading.show();
const $loading = inject<loadingType>('$loading');
$loading?.show();
setTimeout(() => {
  // instance?.proxy?.$loading.hide();
  $loading?.hide();
}, 2000);

</script>

<template>
  
</template>

<style scoped>
</style>
