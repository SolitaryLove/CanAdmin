<template>
    <button class="my-button ellipis" :class="[size, type]" @click="emit('click')">
      <slot>按钮</slot>
    </button>
  </template>
  
  <script setup lang='ts'>
  
  const { size, type } = defineProps({
    size: {
      type: String,
      default: 'mini',
    },
    type: {
      type: String,
      default: 'default',
    }
  });
  const emit = defineEmits(['click']);
  
  
  </script>
  <style scoped>
  .my-button {
    margin: 10px;
    border: none;
    outline: none;
    background: #fff;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    color: rgb(255, 255, 255);
    position: relative;
    box-shadow: 2px 2px 4px #6a6a6a;
    letter-spacing: 2px;
    overflow: hidden;
  }
  .my-button::after{
    content:'';
    display: inline-block;
    width:110%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    border-radius: 10px;
  }
  .my-button:active::after {
    background-color: rgba(255,255,255,.3);
  }
  
  .ellipsis {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  .large {
    width: 240px;
    height: 50px;
    font-size: 24px;
  }
  
  .middle {
    width: 180px;
    height: 50px;
    font-size: 18px;
  }
  
  .small {
    width: 100px;
    height: 32px;
    font-size: 16px;
  }
  
  .mini {
    width: 60px;
    height: 32px;
    font-size: 14px;
  }
  
  .default {
    border-color: #e4e4e4;
    color: #666;
  }
  
  .primary {
    background: rgb(24, 160, 88);
  
  }
  
  .info {
    background: rgb(32, 128, 240)
  }
  </style>
  