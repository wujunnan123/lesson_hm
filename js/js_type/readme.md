# js 数据类型

- js 有哪些数据类型？ 
  **内存分配机制**
  **简单数据类型 拷贝，复杂数据类型 引用**
  - 高手会讲八种
  - 高高手会将七种
  - 简单数据类型 
    numeric(number + bigint) string boolean undefined null symbol 
  - 依据变量内存的分配机制 简单数据类型存在栈内存中 复杂数据类型栈里存的是指向堆内存的地址
  - 简单数据类型拷贝，复杂是引用
  - 复杂数据类型
    object 

  - null？
    null 表示一个空值或不存在的对象，是一个可以赋给变量的特殊值
    没有？
    显示回收内存

  - undefined 未定义的(类型)
  - symbol 唯一值   es6 提供的新数据类型
    - 以函数的形式创建，简单值
    - 打个标签
    - 哪怕标签一样，值绝对不一样
  - bigint 大整数
  - 

- 简单数据类型 Primitive(原始)
  一眼就能看出其值

  函数，数组等很多特性无法表达

## 对象
  
  - 丰富，复杂，笼统
  - 函数？ 函数对象，一等对象 ？ 函数是可执行对象
    - 函数有属性，方法
    - 函数可以形参传递
  - 数组  可迭代的对象

  - ECMAScript 是 js 的标准

  - 如何区分这么多种对象？
  - 得到变量的确切类型
    typeof 除了 null 之外的 primitive 都可以得到正确的结果
    null 得到的结果为 object  当初设计的bug
    数值前三位 类型的描述  null object 前三位为000 
    "123"  123