let obj = {
  name: "万齐磊",
  job: "前端工程师",
  company: "字节",
}

obj.hometown = "南昌"

let a = 1;
let b = a; // 拷贝
b = 3;
// 引用式赋值 把 obj 地址赋给 obj2
let obj2 = obj;
obj2.name = "肖青林";
console.log(a,b);
console.log(obj,obj2);