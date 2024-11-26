let a = null; // 储存早栈内存之中
console.log(a);
// 放在堆内存
let largeObject = {
  date: new Array(100000000).fill('a')
}
// 释放内存 垃圾回收
largeObject = null;