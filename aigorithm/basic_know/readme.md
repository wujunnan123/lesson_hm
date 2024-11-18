# 算法 + 小黄书 = 大厂实习

- 怎么学习算法
  - leetcode 热题 100   200+ 题目
  - 代码随想录

- 算法的核心效率
  装机和品牌机  性价比 
  衡量算法   时间复杂度 空间复杂度

- 不要急于刷题，先打好算法基础
  - 大O  时间复杂度  空间复杂度
    O(1)  O(n)  O(logn)  O(n*m)  O(n^2)  O(2^n)  O(2^n)
  
  - 时间复杂度是怎么计算的？
    - 计算的方法？
    - 代码的执行次数 T(n)  Time 次数
    - 抓住主要矛盾，O(n) 就是执行的趋势极限...
      所以系数不重要，可以省略
    - 由执行次数T(n)  可推导出算法的复杂度 
      - 由边界理论，输入规模无限大，时间复杂度表达的是执行次数的增长**趋势**
        所以，系数可以忽略，抓主要矛盾

    - 算法不是解法，而是使用恰当或更优的时间复杂度或空间复杂度，解决之
      排序 冒泡排序 O(n^2)  快速排序 O(nlogn)
      
- 空间复杂度
  算法在运行过程中占用的**额外**空间的大小


## 用js刷leetcode 

- 数据结构
  - 线性
    - 数组 最简单最好用的
      - 内置方法很多，开箱即用
        建议优先考虑数组，节点 + 指针 比较复杂 []
        除非 不连续
      - 有丰富的API， 栈，队列的 push pop 
    - 栈，队列，链表
  - 非线性
    - 树
    - 图

- 算法中如何定义一个数组
  [1,2,3,4,5,6,7]
  (new Array(7)).fill(1)

- 访问和遍历
  arr[index] O(1) 链表  O(n)
  - 遍历
    for循环
    forEach
    map