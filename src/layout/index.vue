<template>
    <!-- 侧边栏 -->
    <Sidebar />
    <!-- 内容区 -->
    <section class="main">
        <Navbar />
        <div class="content">
            <AppMain />
        </div>
    </section>
</template>
  
<script setup lang="ts" name="Layout">
import Sidebar from './components/Sidebar/index.vue';
import Navbar from './components/Navbar.vue';
import AppMain from './components/AppMain.vue';
Sidebar.name='Sidebar';

</script>
  
<style scoped>
/* sidebar上的初始化样式 */
.main {
    position: absolute;
    top: 0;
    left: 250px;
    height: 100vh;
    width: calc(100% - 250px);
    background-color: var(--body-color);
    transition: var(--tran-03);
}

.main .text {
    font-size: 30px;
    font-weight: 500;
    color: var(--text-color);
    padding: 12px 60px;
}

.sidebar.close~.main {
    left: 88px;
    height: 100vh;
    width: calc(100% - 88px);
}

body.dark .main .text {
    color: var(--text-color);
}

.content {
    padding: 20px;
    width: 100%;
    height: calc(100% - 45px);
    color: var(--text-color);
}
</style>