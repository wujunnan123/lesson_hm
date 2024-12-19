- react 学习路径
  - react 基础语法 过一遍  (b站|文档)
  - hooks 相关
  - 全家桶
  - 状态管理
  - react 源码
  - Antd ....
  - ts

- AI Coding 
  - VUE + react 一起搞
  - 自然语义编程
    tailwindcss  语义
    antd 组件

  - 给AI一张设计稿 -> 生成组件 

- http (CDN 更快) 引入前端组件库
  - vue
    vue

- 挂载点
  <div id="root"></div>  将前端工作交给vue/react,在HTML只需要一个挂载点 #root
  挂载Vue App 应用实例
- vue 开发哲学  让我们foucs 业务开发 的前端框架
  - html 界面上升到应用的复杂程度,现在的前端复杂度越来越高
  - Web 应用是数据驱动的界面
  - vue 事件机制 方便 @event="handler"
  - 响应式编程 数据变化 会自动更新界面
    - ref(0) 包装 简单数据类型成为一个响应式对象
    - .value = "" 修改value  值改变的同时,界面热更新
    - 规避DOM 编程
    - 不再为API 编程 而focus 业务开发

- App 和传统编程的区别
  - 使用createApp 函数创建应用实例 创建 Vue App
  - #root 结合
  - #root 里面就是vue 的世界了
    {{count}}
  - {{}} vue 的数据占位符
    可以改变的
    不需要document.querySelector("")
    {{date}}
    setup() {

    }