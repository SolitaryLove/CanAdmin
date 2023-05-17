<template>
    <nav class="sidebar" :class="{ close: isCollapse }">
        <header>
            <div class="image-text">
                <span class="image">
                    <svg viewBox="0 0 500 500" version="1.1" id="svg_null">
                        <g id="shape" transform="translate(140, 200)">
                            <polygon id="shape.secondary" fill-opacity=".02" fill="#4fc1e9"
                                points="85.089 99.343 85.089 79.769 94.916 89.557"></polygon>
                            <polygon id="shape.secondary" fill-opacity=".6" fill="#4fc1e9"
                                points="116.912 168 85.658 168 85.658 115.861 116.912 84.736"></polygon>
                            <polygon id="shape.secondary" fill-opacity=".8" fill="#4fc1e9"
                                points="159.455 168 128.201 168 128.201 80.341 159.455 49.217"></polygon>
                            <polygon id="shape.secondary" fill="#4fc1e9" points="202 168 170.746 168 170.746 31.123 202 0">
                            </polygon>
                            <polygon id="shape.secondary" fill-opacity=".4" fill="#4fc1e9"
                                points="74.367 127.105 74.367 168 33.301 168"></polygon>
                            <polygon id="shape.secondary" fill-opacity=".5" fill="#4fc1e9"
                                points="130.037 0 101 28.917 71.963 0">
                            </polygon>
                            <polygon id="shape.primary" fill-opacity=".5" fill="#7a57d1"
                                points="130.037 0 101 28.917 71.963 0">
                            </polygon>
                            <polygon id="shape.primary" fill-opacity=".8" fill="#7a57d1"
                                points="42.545 140.47 42.545 43.008 73.799 74.132 73.799 109.346"></polygon>
                            <polygon id="shape.primary" fill-opacity=".6" fill="#7a57d1"
                                points="85.089 99.343 85.089 79.769 94.916 89.557"></polygon>
                            <polygon id="shape.primary" fill="#7a57d1"
                                points="21.134 168 0 168 0 0 31.254 31.123 31.254 157.923">
                            </polygon>
                            <polygon id="shape.primary" fill-opacity=".6" fill="#7a57d1"
                                points="74.367 127.105 74.367 168 33.301 168">
                            </polygon>
                        </g>
                    </svg>
                </span>
                <div class="text logo-text">
                    <span class="name">CanAdmin</span>
                    <span class="profession">Web Developer</span>
                </div>
            </div>
            <i class="bx bx-chevron-right toggle"></i>
        </header>
        <div class="menu-bar">
            <div class="menu">
                <li class="search-box">
                    <i class="bx bx-search icon"></i>
                    <input type="text" placeholder="Search...">
                </li>
                <el-menu :collapse="isCollapse" class="el-menu-vertical-demo" background-color="var(--sidebar-color)"
                    :default-active="routes[2].path">
                    <!-- <el-sub-menu index="1">
                        <template #title>
                            <i class="bx bx-home-alt icon"></i>
                            <span>Navigator One</span>
                        </template>
                        <el-menu-item-group title="group one">
                            <el-menu-item index="1-1">item one</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-menu-item index="2">
                        <i class='bx bx-bar-chart-alt-2 icon'></i>
                        <template #title>
                            <span>Revenue</span>
                        </template>
                    </el-menu-item> -->
                    <SidebarItem v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
                </el-menu>
            </div>
            <div class="bottom-content">
                <li class="logout" @click="logout">
                    <a href="#">
                        <i class="bx bx-log-out icon"></i>
                        <span class="text nav-text">Logout</span>
                    </a>
                </li>
                <li class="mode">
                    <div class="sun-moon">
                        <i class="bx bx-moon icon moon"></i>
                        <i class="bx bx-sun icon sun"></i>
                    </div>
                    <span class="mode-text text">Dark Mode</span>
                    <div class="toggle-switch">
                        <span class="switch"></span>
                    </div>
                </li>
            </div>
        </div>
    </nav>
</template>

<script setup lang='ts'>
import { onMounted, ref, computed } from "vue";
import { useRouter } from 'vue-router';
import { usePersonStore } from "@/store/user";
import SidebarItem from './SidebarItem.vue';

onMounted(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    const toggle = body.querySelector('.toggle') as HTMLElement;
    const searchBtn = body.querySelector('.search-box') as HTMLElement;
    const modeSwitch = body.querySelector('.toggle-switch') as HTMLElement;
    const modeText = body.querySelector('.mode-text') as HTMLElement;

    toggle.addEventListener('click', () => {
        isCollapse.value = !isCollapse.value;
    });
    searchBtn.addEventListener('click', () => {
        isCollapse.value = false;
    });
    modeSwitch.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            modeText.innerText = "Light mode"
        } else {
            modeText.innerText = "Dark mode"
        }
    });
});

// 侧边栏折叠状态
const isCollapse = ref<boolean>(true);

const router = useRouter();
const routes = computed(() => router.options.routes);// 路由表
console.log(routes.value);

const store = usePersonStore();
const logout = () => {
    store.logout().then(() => router.push('/login'));
}


</script>
<style scoped>
.sidebar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    padding: 10px 14px;
    background: var(--sidebar-color);
    transition: var(--tran-03);
    z-index: 100;
    position: fixed;
}

.sidebar.close {
    width: 88px;
}

.sidebar li.search-box,
.sidebar li.logout,
.sidebar li.mode {
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.sidebar header .image,
.sidebar .icon {
    min-width: 60px;
    border-radius: 6px;
}

.sidebar .icon {
    min-width: 60px;
    border-radius: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.sidebar .text,
.sidebar .icon {
    color: var(--text-color);
    transition: var(--tran-03);
}

.sidebar .text {
    font-size: 17px;
    font-weight: 500;
    white-space: nowrap;
    opacity: 1;
}

.sidebar.close .text {
    opacity: 0;
}

/* header部分样式 */
.sidebar header {
    position: relative;
}

.sidebar header .image-text {
    display: flex;
    align-items: center;
}

.sidebar header .logo-text {
    display: flex;
    flex-direction: column;
}

header .image-text .name {
    margin-top: 2px;
    font-size: 18px;
    font-weight: 600;
}

header .image-text .profession {
    font-size: 16px;
    margin-top: -2px;
    display: block;
    color: rgba(0, 0, 0, .3);
}

body.dark .profession {
    color: white;
}

.sidebar header .image {
    display: flex;
    align-items: center;
    justify-content: center;
}

.sidebar header .image img {
    width: 40px;
    border-radius: 6px;
}

.sidebar header .toggle {
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-40%) rotate(180deg);
    height: 25px;
    width: 25px;
    background-color: var(--primary-color);
    color: var(--sidebar-color);
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
    transition: var(--tran-03);
}

body.dark .sidebar header .toggle {
    color: var(--text-color);
}

.sidebar.close .toggle {
    transform: translateY(-40%) rotate(0deg);
}

.sidebar .menu {
    margin-top: 10px;
}

.sidebar li.search-box {
    border-radius: 6px;
    background-color: var(--primary-color-light);
    cursor: pointer;
    transition: var(--tran-03);
    margin-bottom: 6px;
}

.sidebar li.search-box input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    background-color: var(--primary-color-light);
    color: var(--text-color);
    border-radius: 6px;
    font-size: 17px;
    font-weight: 500;
    transition: var(--tran-03);
}

::v-deep(.el-menu) {
    border-right: 0;
    background-color: transparent;
}

::v-deep(.el-sub-menu>div) {
    padding-left: 0 !important;
}

:deep(.el-menu-item) {
    padding: 0 !important;
}

::v-deep(.el-menu-item-group .el-menu-item) {
    padding-left: 40px !important;
}

::v-deep(.el-menu-tooltip__trigger) {
    padding-left: 0px;
}

.sidebar.close::v-deep(.el-sub-menu__icon-arrow) {
    display: none;
}

::v-deep(.el-sub-menu__title) {
    color: var(--text-color);
    font-size: 16px;
    font-weight: bold;
}

::v-deep(.el-menu-item) {
    color: var(--text-color);
    font-size: 16px;
    font-weight: bold;
    transform: scaleY(0.93);
}

.sidebar li.logout a {
    list-style: none;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
    transition: var(--tran-03);
}

.sidebar li a:hover,
::v-deep(.el-sub-menu__title):hover,
::v-deep(.el-menu-item):hover {
    background-color: var(--primary-color) !important;
    color: var(--active-color);
    border-radius: 6px;
}

::v-deep(.el-sub-menu__title):hover i,
::v-deep(.el-menu-item):hover i,
::v-deep(.el-sub-menu__title):hover span {
    color: var(--active-color);
}

::v-deep(.el-menu-item.is-active) {
    background-color: var(--primary-color);
    color: var(--active-color);
    border-radius: 6px;
}

::v-deep(.el-menu-item.is-active i) {
    color: var(--active-color);
}

::v-deep(.el-menu--popup-container) {
    border: 2px solid red;
}

.sidebar li a:hover .icon,
.sidebar li a:hover .text {
    color: var(--sidebar-color);
}

body.dark .sidebar li a:hover .icon,
body.dark .sidebar li a:hover .text {
    color: var(--text-color);
}

.sidebar .menu-bar {
    height: calc(100% - 55px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
}

.menu-bar::-webkit-scrollbar {
    display: none;
}

.sidebar .menu-bar .mode {
    border-radius: 6px;
    background-color: var(--primary-color-light);
    position: relative;
    transition-timing-function: var(--tran-03);
}

.menu-bar .mode .sun-moon {
    height: 50px;
    width: 60px;
}

.mode .sun-moon i {
    position: absolute;
}

.mode .sun-moon i.sun {
    opacity: 0;
}

body.dark .mode .sun-moon i.sun {
    opacity: 1;
}

body.dark .mode .sun-moon i.moon {
    opacity: 0;
}

.menu-bar .bottom-content .toggle-switch {
    position: absolute;
    right: 0;
    height: 100%;
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
}

.toggle-switch .switch {
    position: relative;
    height: 22px;
    width: 40px;
    border-radius: 25px;
    background-color: var(--toggle-color);
    transition: var(--tran-03);
}

.switch::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background-color: var(--sidebar-color);
    transition: var(--tran-03);
}

body.dark .switch::before {
    left: 20px;
}
</style>
