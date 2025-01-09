<template>
  <div>
    <h2>COMPA</h2>
    <p>count: {{ counterStore.count }}</p>
    <button @click="counterStore.increment">+</button>
    <CompSubA />
  </div>
</template>

<script setup>
// 引入中央模块
import { useCounterStore } from '../store/counter'; 
import CompSubA from './CompSubA.vue';
const counterStore = useCounterStore();
</script>

<style scoped>

</style>