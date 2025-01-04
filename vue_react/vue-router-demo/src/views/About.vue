<template>
  <div>
    About
    <button @click="goHome">回到首页</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
console.log(router)
const goHome = () => {
  // js 跳转 BOM API
  // window.location.href = '/'
  // vue-router API
  router.push('/')
}
</script>

<style scoped>

</style>