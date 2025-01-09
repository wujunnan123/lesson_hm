<template>
  <div>
    <h2>COMPSUBA</h2>
    <p>count: {{ count }} </p>

  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { useCounterStore} from '../store/counter';
const counterStore = useCounterStore();
const { count } = toRefs(counterStore);
</script>

<style scoped>

</style>