# 星球大战

- <!DOCTYPE html>
  html5 版本申明头
- *
  css 通配符，所有元素
  margin 0 padding 0 所有元素初始化一致
  由于有不同的浏览器厂商，默认值不同
  需要在页面样式开始之前，做一个样式的reset 让任何浏览器访问，我们的页面都是一张白纸
  在所有浏览器上体验一致

  * 性能不太好，所以我们宁愿列出所有的标签

- 居中
  - 定位 position:absolute 绝对定位
    - 百分比相对于父元素
  - transform 变基属性
    - translate 移动
      x 左平移（负） 右平移（正）
      y 上平移（负） 下平移（正）
  - 背景大法
    盒子在页面的占位会显现出来

- css动画
  - animation 动画
  - keyframes 动画关键帧
  - transform scale  translate
  - 飞船模拟动画，逼真
  - 1% 时间差，画龙点睛
  - transfrom-style: preserve-3d;  开启3d
    perspective: 800px;  视点，眼睛离屏幕的距离

      