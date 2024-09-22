<template>
    <div class="container">
        <div class="select">
            <select name="" id="" @change="setTargetIndex(($event.target as HTMLSelectElement).value)">
                <option v-for="(title, index) of options" :key="index" :value="index">
                    {{ title }}
                </option>
            </select>
        </div>
        <div class="transfer">
            <div class="box left-list">
                <h1 class="list-title">{{ leftTitle }}</h1>
                <div>
                    <div v-for="item of leftListData" :key="item.id"
                        :class="['list-item', item.disabled ? 'disabled' : '']">
                        <input type="checkbox" :disabled="item.disabled" :id="'__checkbox__'+item.id"
                            @click="setCheckedData(($event.target as HTMLInputElement).checked, 'left', item)">
                        <label :for="'__checkbox__'+item.id">{{ item.phone_name }}</label>
                    </div>
                </div>
            </div>
            <div class="box button-group">
                <button :disabled="transferButtonDisabled.left"
                    @click="typeof removeRightListData === 'function' ? removeRightListData((checkedData as any).right) : ''">&lt;</button>
                <button :disabled="transferButtonDisabled.right"
                    @click="typeof addRightListData === 'function' ? addRightListData((checkedData as any).left) : ''">&gt;</button>
            </div>
            <div class="box right-list">
                <h1 class="list-title">{{ rightTitle }}</h1>
                <div>
                    <div v-for="item of (rightListData as any)" :key="item.id"
                        :class="['list-item', item.disabled ? 'disabled' : '']">
                        <input type="checkbox" :disabled="item.disabled" :id="'__checkbox__' + item.id"
                            @click="setCheckedData(($event.target as HTMLInputElement).checked, 'right', item)">
                        <label :for="'__checkbox__'+item.id">{{ item.phone_name }}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { Ref } from 'vue';
import propsDefination from './extends/props';
import { useTargetIndex, useComputedData, useRightListData, useCheckedData } from './extends/hooks';
const props = defineProps(propsDefination);
const options = props.data.map((item: any) => item.title);

interface dataType {
    id: number,
    phone_name: string,
    disabled: boolean
}

const [targetIndex, setTargetIndex] = useTargetIndex(0);
const [checkedData, addCheckedData, removeCheckedData] = useCheckedData();
const [rightListData, addRightListData, removeRightListData] = useRightListData([], checkedData);
const { leftTitle, leftListData, transferButtonDisabled } = useComputedData(props.data, targetIndex, rightListData as Ref<Array<dataType>>, checkedData);


const setCheckedData = (checked: boolean, leftOrRight: string, item: any) => {
    checked
        ? typeof addCheckedData === 'function' ? addCheckedData(leftOrRight, item) : ''
        : typeof removeCheckedData === 'function' ? removeCheckedData(leftOrRight, item.id) : ''
}

</script>

<style scoped>
.transfer {
    display: flex;
    flex-direction: row;
    width: 450px;
    height: 250px;
    border: 1px solid #ddd;
}

.transfer .box {
    width: 150px;
    height: 100%;
}

.transfer .box .list-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    font-weight: normal;
    margin: 0;
    color: #666;
    border-bottom: 1px solid #ddd;
    background-color: #efefef;
    font-size: 14px;
}

.transfer .box .list-item {
    display: flex;
    align-items: center;
    height: 30px;
    font-size: 12px;
    color: #666;
    margin-left: 7px;
}

.transfer .box .list-item input {
    margin-right: 5px;
}

.transfer .box .list-item.disabled {
    opacity: .6;
}

.transfer .box.button-group {
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
}

.transfer .box.button-group button {
    border: none;
    outline: none;
    width: 38px;
    height: 38px;
    background: gray;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
}

/* .transfer .box .button-group button.disabled {
    opacity: .6;
} */

.transfer .box.button-group button:nth-child(2) {
    margin-left: 10px;
}
</style>
