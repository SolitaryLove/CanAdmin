<template>
    <div class="wrapper">
        <div class="seat">占位</div>
        <img v-Lazyload="getAssetsFile('catgirl.jpg')" alt="">
    </div>
</template>

<script setup lang='ts'>
import { getAssetsFile } from '../utils/pub-use';

</script>
<style scoped>
.wrapper {
    width: 60vw;
    background: gainsboro;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.wrapper .seat {
    width: 60vw;
    height: 150vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 54px;
    font-weight: bold;
    color: #fff;
}

.wrapper img {
    width: 60%;
    background-size:cover;
}
</style>
