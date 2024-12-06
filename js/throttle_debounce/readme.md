- 认识几个url
  url 的设计模式 restful ap  一切皆资源的设计模式
  网站是用来暴露资源的 如何将资源暴露出去 
  - http://localhost:3001/posts/                  列表页的链接
  - http://localhost:3001/posts/:id  id 查询参数   详情页的链接
  - http://localhost:3001/users/:id               用户主页的链接

- 数据的查询 Read 
- 访问资源的方式
  - apiFox 是啥？ web 请求代理
    Get  http//localhost:3001/posts/1
    Patch  http//localhost:3001/posts/1
  - 资源 db.json    users   posts
  - HTTP 协议
    - 请求行 Method (动作 GET 查找 | PATCH 修改 | POST 新增 ) + url (资源)   
    - 请求头 Cookie  Content-Type: text/json。。。。 内容类型
    - 请求体    
  - Json-server
    - http 服务
    - db.json 数据资源向外提供访问 CRUD

- 会设计 restful api 接口
  - 需求
    - 新增一篇文章
      http://localhost:3001/posts   POST
      {
        ......
      }  

    - 删除文章2
      http://localhost:3001/posts/2   delete

- json-server 是一个支持 restful api 设计的数据服务器

- 全栈防抖
  - 前后端分离  解耦
    - 前端 live-server 5500
      fetch url
    - 后端 json-server 3001
      url 接口服务  restful 
    - 前后端的结合点主要是通过API（应用程序编程接口）来实现的

- filter   map   都会先遍历数组
  - 都是Array.prototype 上的方法，所有的数组都有
  - filter 会对数组进行过滤，回调函数中返回值是否为True 决定是否保留当前元素
  - map  数组映射，回调函数返回值为新的数组  原有数组不能满足需求
  - forEach  迭代每一项 不需要返回

- 防抖
  - 将要执行的函数交给一个debounce()高阶函数去优化
  - 减少执行次数 只执行连续输入的最后一次
  - 定时器   本次关掉上一次的定时器