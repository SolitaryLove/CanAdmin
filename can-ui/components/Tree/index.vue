<template>
    <ul>
        <li v-for="item in items" :key="item.id">
            <span v-if="item.children" class="Arcicon">
                <svg v-if="item.open" t="1679493371053" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4811" width="200" height="200"><path d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z" p-id="4812"></path></svg>
                <svg v-else t="1679493350220" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4660" width="200" height="200"><path d="M288.791335 65.582671l446.41733 446.417329-446.41733 446.417329z" p-id="4661"></path></svg>
            </span>
            <span @click="toggle(item)" style="margin:5px">
                {{ item.content }}
            </span>
            <Tree :items="item.children" v-if="item.children && item.children.length > 0" class="li-children"
                v-show="item.open"></Tree>
        </li>
    </ul>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';

interface itemType {
    id?: number;
    content?: string;
    children?: itemType[];
    open?: boolean;
    level?: number;
}
const props = defineProps({
    items: {
        type: Array as () => itemType[],
        required: true,
    }
});
const items = reactive(props.items);

function toggle(item: itemType) {
    item.open = !item.open;
    // console.log(item.open);
}

/* function setLevel(items: itemType[], level = 0) {
    items.forEach((item) => {
        item.level = level;
        console.log(item.level);
        if (item.children && item.children.length > 0) {
            setLevel(item.children, level+1);
        }
    });
}
setLevel(props.items); */

</script>
<style scoped>
li {
    list-style-type: none;
}

.li-children {
    padding-left: 20px;
}

.Arcicon svg{
    width:10px;
    height:10px;
}
</style>
