# Prompt 设计模式

- 吴恩达 Prompt Engineering 

- LLM 开发的模板
  - 代码工程
    1. npm init -y
    2. 将dependencies：{} 部分拷贝过去
       npm i
       node 后端项目的依赖

- dotenv 的理解
  - peocess.env 对象
  - key 不能咋代码中以明文出现
  - 项目根目录下添加 .env 文件  包含 key 等的信息
  - 不能提交到github  .gitignore 中添加这类文件的申明
  - dontenv.config() 方法  将 .env 文件中的信息加载到 process.env 对象中