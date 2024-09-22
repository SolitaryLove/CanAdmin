import { createApp } from 'vue'
import router from '@/router';// 路由配置
import pinia from '@/store';// 状态配置
import './style.css'// 全局样式
import 'element-plus/theme-chalk/el-message.css';// 引入 Elmessage 样式
import '@/mock/index';// mock 数据
import '@/permission';// 权限控制
import CanUI from '../can-ui';// CanUI组件库
import App from './App.vue'

const app = createApp(App); 

// 注册组件库
app.use(CanUI);

// 路由管理
app.use(router);
// 扩展路由元信息类型
declare module 'vue-router' {
    interface RouteMeta {
        title?: string
        hidden?: boolean
    }
}

// 状态管理
app.use(pinia);

app.mount('#app');
