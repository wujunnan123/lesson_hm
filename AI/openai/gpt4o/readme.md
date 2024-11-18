# 面向 Openai 接口编程

- 多模态模型
  - 单模态
    chatgpt 文本 
  - 图片，视频，音频

- npm init -y  后端
  npm i openai    openai sdk

  - npm config set registry https://registry.npmmirror.com  国内镜像
    设置了npm 的源，npm 是国外的，慢，阿里在国内做了npm 的镜像  提速

  - 时间  占用空间
    npm i -g openai  全局安装
    npm i -g pnpm
    哪里去了？ 命令行直接调用 

  - 即不会重复安装，也不会污染全局，用一个符号链接去指向之前的安装 
    快了，省空间 pnpm

- main.mjs 主入口， 单点入口得到职责
  mjs es6 module import from