import { createVNode, render } from 'vue';
import ProgressBar from './ProgressBar.vue';

// 创建虚拟DOM
const ProgressBarVnode=createVNode(ProgressBar);
// 挂载到页面
render(ProgressBarVnode, document.body);

export default ProgressBarVnode;