<template>
    <div class="counter">
        <p>Count: {{ count }}</p>
        <button @click="increment">+1</button>
    </div>
</template>
<script setup>
import { 
    ref,

} from 'vue';

const count = ref(0);

function increment() {
    count.value++;
}
</script>
<style>
.counter {
    text-align: center;
    margin-top: 50px;
    color: aqua;
}
button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
}
</style>