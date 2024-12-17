# js 类型转换

- es6 之前，js 有多少种写法？
  - string
  - number
  - boolean
  - undefined
  - null
  - object






- js 是弱类型语言
- 变量的类型 是可以改变的
- 搞清楚变量的确切类型
  - Primitive 类型 -> 其他类型的转换
    - boolean 类型
  - Object 类型 -> 其他类型的转换


- Boolean 显示类型转换规则 (构造函数)
  - false 的情况
    - 为空 false
    - false
    - undefined
    - null
    - 0
    - +0
    - -0
    - NaN
  - 其他情况都为 true

- +0 和 -0 
  Object.is(+0, -0) // false
  1 / +0 // Infinity
  1 / -0 // -Infinity
- NaN
  类型仍然是 Number，表示一个特殊的数字 Not a Number

- Number()
  0 1 NaN