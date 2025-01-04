import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 自动导入index.js 文件
import router from './router' // 路由对象

const app = createApp(App)
console.log(app)
// focus 业务开发
// vue 周边生态就起来了
app // vue跟组件 ->  
  .use(router) // 插件使用路由功能
  .mount('#app') // -> 挂载点
