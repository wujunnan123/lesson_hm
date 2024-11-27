- 变量提升怎么来的 ？
  - 调用栈是js 的执行机制
  - 入栈的是执行上下文
    - 栈底是全局执行上下文
    - 其余都是函数
      - 块级作用域 栈的结构来维护

## 变量提升

- es6 通过 let/const 将 词法环境 和 变量环境 分开， 区别对待
- 变量申明前 处于 暂时性死区

## 词法作用域

  - 作用域 是变量查找的规则
  - 词法作用域是一个单独的作用域
    函数定义在哪个域，哪个就是词法作用域

调用栈 执行上下文 变量环境 词法环境 作用域 块级作用域 词法作用域（编译 通过outer 指向）作用域链（查找变量的轨迹）

- 简单作用域的理解 冒泡，从内到外
  - 但如果在函数中，还要考虑词法作用域 outer 指向谁