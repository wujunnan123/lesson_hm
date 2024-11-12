# 魔搭社区
> 国内最大AI模型开发平台

## 大模型 LLM Large(参数) Language Model
- 输入 -> code(编程) -> 输出    传统开发方式
- 输入(prompt) -> LLM -> 输出  最酷的开发方式
- 参数规模单位是？  LLM 训练出来的参数 上百亿 全球的知识 72B  720亿

- 首选大模型
  为了业务，选择合适的大模型
    openai 闭源 花钱
    coze 豆包模型，千问，kimi    开源的
- 魔搭社区 
  国内最大的开源大模型社区

- 云端AI环境
- 机器学习  nlp
  情感分析例子
- python 的语法
  - module 模块化  复用、职责分离的能力
    from madelscoe.pipelines import pipelines
    modelscope 魔搭社区 功能很多  pipelines 管道 (nlp 派出管道，水管)

- damo/nlp_structbert_sentiment-classification_chinese-base
  模型有很多种，达摩院/ 情感分析/分类/支持中文
  医疗模型/ 金融模型/ 法律模型

  pipeline(Tasks.text_classification,
'damo/nlp_structbert_sentiment-classification_chinese-base')
  pipeline 打开管道
  选择一项任务 Tasks.text_classification
  选择模型 damo/nlp_structbert_sentiment-classification_chinese-base

  - 模型训练完后就不成长了，新的知识没有，不太准确 
    微调大模型 喂一些新的数据，并对数据进行标注  

- 前后端为什么要学习大模型LLM？
  - 端模型的时代到来了
    小尺寸模型越来越强  AI手机 AI汽车(Robotaxi) AI具身智能 
  - MarsCode 提高学习和开发效率
  - 很多工作可以交给大模型
    输入 -> LLM -> 输出

- LLM 需要算力 算力来自GPU  