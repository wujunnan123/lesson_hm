<template>
  <main>
    Main
    <h1>你的评分是{{ score }}</h1>
    <Rate :value="score" />
    <item />
    <item />
  </main>
</template>

<script setup>
import Item from './Item.vue';
import Rate from './Rate.vue';
import { ref } from 'vue';
// 将数据从父组件传递到子组件
const score = ref(3)

</script>

<style scoped>
main {
  flex: 1;
  background-color: yellow;
}
</style>