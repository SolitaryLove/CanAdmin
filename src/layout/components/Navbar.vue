<template>
    <div class="headBar">
        <span>hello world</span>
        <el-dropdown @command="handleCommand">
            <el-avatar shape="square" :size="35" :src="store.avatar">
                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
            </el-avatar>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="a">Action 1</el-dropdown-item>
                    <el-dropdown-item command="b">Action 2</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang='ts'>
import { usePersonStore } from '@/store/user';
const store = usePersonStore();

const handleCommand = (command: string | number | object) => {
    alert(`${command}`)
}

</script>
<style scoped>
.main .headBar {
    width: 100%;
    height: 45px;
    background-color: var(--sidebar-color);
    color: var(--text-color);
    padding: 0 20px;
    /* border-left: 1px dashed rgba(0,0,0,.3); */
    border-left: 1px dashed rgba(105, 92, 254, .3);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0px;
}

.el-dropdown-menu {
    background-color: var(--sidebar-color);
    color: var(--text-color);
}
</style>
