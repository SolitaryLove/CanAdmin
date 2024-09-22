<template>
    <Tree :items="treeData" />
</template>

<script setup lang='ts'>
import Tree from '../components/Tree/index.vue';
const treeData = [
    {
        id: 1,
        content: 'Item 1',
        children: [
            {
                id: 2,
                content: 'Item 1.1',
                children: [
                    {
                        id: 3,
                        content: 'Item 1.1.1',
                    },
                    {
                        id: 4,
                        content: 'Item 1.1.2',
                    },
                ],
            },
            {
                id: 5,
                content: 'Item 1.2',
            },
        ],
    },
];

</script>
<style scoped></style>
