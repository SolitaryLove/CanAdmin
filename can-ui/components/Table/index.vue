<template>
    <table>
        <thead>
            <tr>
                <th v-for="column in columns">{{ column }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows">
                <td v-for="column in columns">{{ row[column] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang='ts'>
const { columns, rows } = defineProps({
    columns: Array as () => string[],
    rows: Array as () => Record<string, unknown>[],
})

</script>
<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    border: 3px solid pruple;
}

table thead tr {
    font-size: 13px;
    color: #2e3b45;
    text-align: center;
    background-color: rgba(252, 173, 70, 0.92);
    font-weight: bold;
}

table tr{
    height:40px;
}

table td {
    line-height: 20px;
    text-align: center;
    padding: 4px 10px 3px 10px;
    height: 18px;
    border: 0px solid #ffffff;
}

table tbody tr {
    background: #fff;
    font-size: 13px;
    color: #393939;
}

table tbody tr:nth-child(2n) {
    background: #f3f3f3
}
</style>
