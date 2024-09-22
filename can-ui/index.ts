import type { App } from 'vue';
import Transfer from './components/Transfer/index.vue';
import Button from './components/Button/index.vue';
import Checkbox from './components/Checkbox/index.vue';
import DraggableList from './components/DraggableList/index.vue';
import Table from './components/Table/index.vue';
import Tree from './components/Tree/index.vue';

import Lazyload from './directives/lazyload';
import Draggable from './directives/draggable';
import Ripple from './directives/ripple';

import Loading from './components/Loading';

interface ObjectType {
    [propName: string]: any;
}

// 组件
const components: ObjectType = {
    Transfer,
    Button,
    Checkbox,
    DraggableList,
    Table,
    Tree,
}

// 指令
const directives: ObjectType = {
    Lazyload,
    Draggable,
    Ripple
}


export default {
    install(app: App) {
        for (let component in components) {
            app.component(component, components[component as keyof ObjectType]);
        }
        for (let directive in directives) {
            app.directive(directive, directives[directive as keyof ObjectType]);
        }
        app.use(Loading);
    }
}