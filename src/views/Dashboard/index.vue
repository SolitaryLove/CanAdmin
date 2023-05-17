<template>
    <div class="wrapper">
        <div>欢迎 {{ store.username }}</div>
        Dashboard
    </div>
</template>

<script setup lang='ts' name="Dashboard">
import { usePersonStore } from '@/store/user';
const store = usePersonStore();

</script>
<style scoped>
.wrapper{
    width: 100%;
    height: 100%;
    border: 3px dashed skyblue;
    border-radius: 7px;
    padding: 7px;
    background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
}
</style>
