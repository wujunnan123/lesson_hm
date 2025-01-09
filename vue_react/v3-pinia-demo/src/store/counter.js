// 中央 状态管理 login userInfo
// count 收归中央
// 定义一个仓库
import { defineStore } from "pinia";
import { ref } from "vue";
// 仓库名counter 函数
export const useCounterStore = defineStore('counter',() => {
  const count = ref(0);
  // 定义一个方法
  const increment = () => {
    count.value++;
  }
  return {
    count,
    increment
  }
})