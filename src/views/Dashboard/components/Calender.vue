<template>
    <el-calendar v-model="currentDate">
        <template #header="{ data }">
            <span>{{ data }}</span>
        </template>
        <template #date-cell="{ data }">
            <div class="date-content">
                <span class="text" :class="data.isSelected ? 'is-selected' : ''">
                    {{ getDay(data.day) }}
                    {{ data.isSelected ? '✔️' : '' }}
                </span>
                <span v-if="isWeek(data.date)" class="rest">休</span>
            </div>

        </template>
    </el-calendar>
</template>
  
<script setup lang="ts" name="Calender">
import { ref } from 'vue';
const currentDate = ref(new Date());
const getDay = (value: string) => {
    const day = value.split('-')[2];
    return day.startsWith('0') ? day.slice(1) : day;
}
const isWeek = (date: Date) => {
    return date.getDay() === 6 || date.getDay() === 0;
}
</script>
  
<style lang="scss" scoped>
::v-deep(.my-button),
::v-deep(.my-button span) {
    width: 120px;
    background-color: var(--sidebar-color);
    color: var(--text-color);
    font-size: 12px;

}

::v-deep(.el-calendar__header),
::v-deep(.el-calendar__body) {
    background-color: var(--sidebar-color);
    color: var(--text-color) !important;
}

.date-content {
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    background-color: var(--sidebar-color);
    color: var(--text-color);
}

.date-content .rest {
    color: #fff;
    border-radius: 50%;
    background: rgb(250, 124, 77);
    width: 20px;
    height: 20px;
    line-height: 20px;
    display: inline-block;
    font-size: 12px;
    margin-left: 10px;

}

.date-content .text {
    width: 20px;
    height: 20px;
    line-height: 20px;
    display: inline-block;
    background-color: var(--sidebar-color);
    color: var(--text-color);
}

.is-selected {
    color: #1989fa;
}
</style>
