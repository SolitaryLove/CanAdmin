<template>
    <Table :columns="headers" :rows="tableData"></Table>
</template>

<script setup lang='ts'>
import Table from '../components/Table/index.vue';
const headers = ["id", "name", "age"];
const tableData = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Doe", age: 25 },
    { id: 3, name: "Bob Smith", age: 40 },
]

</script>
<style scoped></style>
