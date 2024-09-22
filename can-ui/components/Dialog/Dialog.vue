<template>
    <div class="wrapper">
      <header>{{ title }}</header>
      <main>{{ content }}</main>
      <footer>
        <button @click="dialogProp.cancel">cancel</button>
        <button @click="confirm">confirm</button>
      </footer>
    </div>
  </template>
  
  <script setup lang='ts'>
  interface DialogOptionsType {
    title: string;
    content: string;
    confirm: () => void;
    cancel: () => void;
  }
  const dialogProp = defineProps<DialogOptionsType>();
  function confirm(){
    dialogProp.confirm();
    dialogProp.cancel();
  }
  
  
  </script>
  <style scoped>
  .wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 25vw;
    height: 20vh;
    min-width: 240px;
    min-height: 120px;
    background: #f6fcfc;
    border-radius: 10px;
    box-shadow: 5px 5px 15px #949697,
      -5px -5px 15px #c8c9ca;
    padding: 10px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    grid-gap: 5px;
    z-index: 111;
  }
  
  .wrapper header {
    font-weight: 600;
  }
  
  .wrapper footer {
    justify-self: center;
  }
  
  .wrapper footer button {
    border-radius: 5px;
    border: 0;
    width: 60px;
    height: 25px;
    background: rgb(240, 240, 240);
    margin: 0 20px;
    color: grap;
  }
  </style>
  