# react repos 项目列表

- 用户的仓库列表
  - repos 组件

- react 组件
  - .jsx 组件
  - components/  ->  挂载App.jsx
  - 相比于vue 的三部分清晰明了 react 函数即组件
    - 首字母大写
    - 返回一个html结构，JSX

  - vue 和 react 相同点和不同点
  - 相同点
    - 组件化思想
    - 现代前端编程框架  挂载点
    - 都有工程化配套
    - 数据绑定 {{}} {}
    - 响应式，数据驱动，不需要做DOM 耗性能操作
  - 区别
    - .vue  .jsx
    - template/script/style 三段式   函数及组件
    - vue 好入门，api丰富     react 难入门，但纯粹(JS 高手)
    - vue css 再组件内部   react css 单独文件
    - 组件 = 组(html + css + js)和起来完成一件功能的拆分
    - vue template      react jsx
      - JSX 是react 最漂亮的部分，在函数中最方便的表达UI 部分
        本身不可以的，react 回去解析JSX html(XML) in JS
      - 不能写class， 用className

  - 组件类
    - 封装 import + export default  功能的拆分
    - 函数(构造)组件， return html是必须的
    - 组件可以复用 
    - 封装的是 UI + 响应式数据
    - 只要写原生 JS 就可以了
