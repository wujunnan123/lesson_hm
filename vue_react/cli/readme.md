# vue + react  cli 命令行

- vue-cli commend line
  - 比较复杂的大型项目，不是简单的页面开发
    web app ，而非page
  - npm init vite
    vite  快速构建前端项目，vite 是一个前端基建工具(工程化的核心套件)
    npm init 初始化项目  将初始化交给vite 这个工程化巨佬
    - 标准项目模板
      - 没必要每次都搞

    - 项目的结构
      - package.json
        - dependencies 依赖
        - vue 3^ 开发和上线都要
        - vite 开发阶段采用，上线后不需要 它是(前端基建工具)，是包工头

    - 工程的不同生命周期(阶段)
      - dev 开发阶段
      - text 测试阶段
      - build 上线阶段
      - online 运营维护

    - npm run dev   vite
      - http协议 5173接口渲染 index.html 
      - 首页 website
      - 挂载点 #app
      - src/main.js 入口文件

    - src/main.js
      - src 开发目录
        开发的主战场
      - main.js 入口文件
        createApp().mount('#app')
      - App.vue 组件
        .vue 专属后缀
        - 三段式
          - template 模板 html结构
          - script 脚本 js逻辑   响应式 事件 。。。。
          - style 样式 css
        - .vue 太好了，和胶囊一样，很方便
        - 组件就是 > html 的页面构建模块
          组件时现代前端的开发新单元 (比html大)
          组件 = 由一堆逻辑单元的html构成 + css + js 组成一个vue文件
      - 现代前端开发拥抱组件思维 vue前端组件库  
      - 组件按功能划分
      - 组件 = html(一堆) + css(一堆) + js(一堆)
      - .vue 三段式组合这个组件
      - 轮播图 功能属性凸显 是一个经典的组件
      - 前端的开发单位是组件，不是页面(页面可能会重复组件 轮播图)
        不能以html为单位？ 单个功能弱小
      - 从工程化角度理解组件
        - 按功能块划分组件，好安排工作
        - 组件可以复用 (.vue)  import 引入
        - 好维护
      - 组件以标签的方式嵌入页面
        可读性非常强