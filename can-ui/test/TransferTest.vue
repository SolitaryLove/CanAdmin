<template>
    <Transfer :data="data" right-title="已选择机型"></Transfer>
</template>

<script setup lang='ts'>
const data = [
    {
        title: '华为',
        data: [
            {
                id: 1,
                phone_name: 'Mate40 Pro',
                disabled: false
            },
            {
                id: 2,
                phone_name: 'P40 Pro',
                disabled: true
            },
            {
                id: 3,
                phone_name: 'P50 Pro',
                disabled: false
            },
            {
                id: 4,
                phone_name: 'MateXs 2',
                disabled: false
            },
        ]
    },
    {
        title: '小米',
        data: [
            {
                id: 5,
                phone_name: 'XiaoMi 12 Pro',
                disabled: false
            },
            {
                id: 6,
                phone_name: 'XiaoMi 12s Pro',
                disabled: false
            },
            {
                id: 7,
                phone_name: 'XiaoMi 12s',
                disabled: false
            },
            {
                id: 8,
                phone_name: 'XiaoMi 12',
                disabled: true
            },
        ]
    },
    {
        title: '苹果',
        data: [
            {
                id: 9,
                phone_name: 'iPhone 12 Pro',
                disabled: false
            },
            {
                id: 10,
                phone_name: 'iPhone 12',
                disabled: false
            },
            {
                id: 10,
                phone_name: 'iPhone 12 mini',
                disabled: true
            },
        ]
    },
]

</script>
<style scoped></style>
