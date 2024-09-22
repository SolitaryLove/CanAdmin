<template>
    <div id="container" class="container sun">
        <label for="input" class="switch">
            <input type="checkbox" id="input" v-model="checkedState">
            <span class="slider"></span>
        </label>
    </div>
</template>

<script setup lang='ts'>
import { useVModel } from '../../hooks/useVModel';
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(['update:modelValue']);
/* function change(e:Event){
    emit("update:modelValue",(e.target as HTMLInputElement).checked);
} */
// 用计算属性包一层，保证Props单向数据流
/* const checkedState=computed({
    get(){
        return props.modelValue;
    },
    set(value){
        emit('update:modelValue',value)
    }
}); */
const checkedState = useVModel(props, 'modelValue', emit);


</script>
<style scoped>
#container{
    position: relative;
    width: 80px;
    height: 40px;
}
.container input[type="checkbox"] {
    visibility: hidden;
    display: none;
}

.container *,
.container::after,
.container::before {
    box-sizing: border-box;
}

.container .switch {
    position: absolute;
    width: 80px;
    height: 40px;
    display: inline-block;
    filter: drop-shadow(0 4px 4px #ccc);
}

.container .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #f4f4f5;
    transition: .4s;
    border-radius: 20px;
}

.container .slider:before {
    position: absolute;
    content: "";
    width: 36px;
    height: 36px;
    left: 3px;
    top: 50%;
    border-radius: 20px;
    transform: translateY(-50%);
    background: linear-gradient(40deg, #ff0000, #ff8c00 70%);
    transition: .4s;
}

.container input:checked+.slider {
    background: #444;
}

.container input:checked+.slider:before {
    left: calc(100% - (38px + 3px));
    background: #444;
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafa;
}

.sun {
    /* background-color: #ddd; */
}

.moon {
    background-color: #444;
}
</style>