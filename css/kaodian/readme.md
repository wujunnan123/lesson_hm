## 层叠上下文

## 页面渲染规则

- 文档流
  body 开始从上到下，从左到右
- 盒子本身大小
  - box-sizing  border + padding + content
  - 盒模型 
    - 标准盒模型   content-box
    - IE盒模型   border-box
      其中 width 和 height 包含了内边距和边框。

- 块级元素 block
- 行内元素 inline  不用于做盒子  不能设置宽高，宽高由内容决定
- 块级元素为何默认宽度是100%？
  - html 是第一个BFC 元素，body 参与html的BFC 元素
    - 页面显示由html 负责 页面的布局 块级元素从上到下，行内元素从左到右 

- display

- BFC Block Formatting Context 块级格式化上下文
  - html 是根元素，也是最大的块级元素
  - context 块级元素从上到下，行内元素从左到右

- 格式上下文？ Formatting Context  我跟着谁混
  - 为何弹性布局 打破了html BFC 的规则
    - BFC 不是某个元素的特例，弹性布局，创立了一个新的BFC
    - BFC 不受外界影响，全新的独立的渲染区域 FFC Flex Formatting Context
      flex-direction: row|column;
  - GFC 网格布局 

# BFC

- html 是最顶级的BFC
- block level box 垂直方向，一个接一个的放置，且宽度为100%
- 盒子垂直方向的距离由margin决定，同一个的BFC 的相邻盒子margin会重叠，大的说了算
- 每个元素的margin 左边，与包含块border的左边相接触，即使存在浮动也是如此
- BFC 区域不会与浮动元素区域float box 重叠
- BFC 内部是独立的渲染区域，不受外界影响
- 计算BFC的高度时，浮动元素也参与计算

- 如何新建一个BFC 
  - overflow: hidden|auto  不为visible
  - 
