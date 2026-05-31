# 中国入境旅游平台需求文档（PRD）

项目代号：China Guide
版本：V1.0
文档类型：产品需求文档（PRD）
目标市场：美国及英语国家游客
参考网站：https://www.japan-guide.com/
商业模式：旅游内容 + 行程规划 + Trip.com 联盟分佣

---

# 版本记录

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| V1.0 | 2026-05-28 | 初始版本 |
| V1.1 | 2026-05-31 | 补充已实现功能：城市列表页(destinations.html)、城市详情页、重庆页(chongqing.html)、中英文i18n支持、本地城市图片、热门行程独立详情页 |
| V1.2 | 2026-05-31 | SEO优化：Structured Data、Open Graph、Twitter Card；修复热门城市Guilin/Hangzhou链接错误；成都页面内容扩充（景点详细描述、美食指南） |

---

# 一、项目背景

随着中国旅游逐渐恢复开放，越来越多的海外游客开始重新关注中国自由行市场。

但对于欧美用户而言，中国仍然存在大量“信息不透明”和“认知门槛”：

- 不知道中国是否适合自由行
- 不清楚哪些城市值得去
- 担心支付问题
- 担心语言沟通
- 不理解中国交通系统
- 不知道如何预定高铁和酒店
- 不知道 Google、WhatsApp 是否可用
- 担心安全与网络问题

目前市场上缺少一个专门为欧美游客提供“中国自由行全流程解决方案”的网站。

Japan Guide 在“日本自由行”领域已经验证了该模式的成功。

本项目目标是打造一个：

“帮助外国游客从第一次了解中国，到完成中国旅行的完整平台。”

---

# 二、项目目标

## 2.1 产品目标

打造英语世界中最专业的中国自由行门户网站。

帮助美国游客：

- 建立来中国旅游的兴趣
- 降低对中国的陌生感
- 消除旅行顾虑
- 完成行程规划
- 完成交通与酒店预订
- 获得旅行中的实用支持

最终形成：

内容 → 流量 → Trip.com 预订 → 联盟分佣的商业闭环。

---

## 2.2 商业目标

### 第一阶段（0-6个月）

目标：

- 完成 MVP 上线
- Google SEO 收录
- 每月 1 万 UV
- 建立基础内容库

---

### 第二阶段（6-12个月）

目标：

- 每月 10 万 UV
- 建立城市攻略体系
- 建立高铁路线体系
- 接入 Trip.com 联盟系统
- 建立邮件订阅系统

---

### 第三阶段（12个月+）

目标：

- 海外中国旅游头部内容站
- 建立 AI 行程规划
- 用户账户系统
- UGC 游记生态
- 视频内容生态

---

# 三、用户分析

# 3.1 核心用户画像

## 用户类型 A：第一次来中国的美国游客

年龄：25-45 岁

特点：

- 对中国感兴趣
- 没来过中国
- 有一定消费能力
- 英语母语
- 喜欢自由行

核心问题：

- 中国安全吗？
- 中国值不值得去？
- 不会中文怎么办？
- 支付是否方便？
- 能不能用 Google？
- 中国交通复杂吗？

核心需求：

- 安全感
- 行前指导
- 清晰路线
- 英语友好
- 一站式信息

---

## 用户类型 B：深度文化旅行者

特点：

- 喜欢历史文化
- 喜欢摄影
- 喜欢美食
- 喜欢长线旅行

核心需求：

- 深度路线
- 非传统景点
- 高铁旅行
- 地方文化
- 美食推荐

---

## 用户类型 C：亚洲区域游客

特点：

- 已在亚洲旅行
- 短期进入中国
- 偏数字游民

核心需求：

- 网络问题
- eSIM
- VPN
- 城市间交通
- 快速行程规划

---

# 四、产品定位

## 4.1 产品定位

一个专门服务英语国家游客的“中国自由行门户网站”。

核心定位：

- 中国旅游百科
- 中国自由行指南
- 中国路线规划工具
- 中国旅行问题解决平台

---

## 4.2 核心价值

解决外国游客来中国的核心障碍：

### 语言友好

- 中英文双语支持
- 语言切换器（导航栏）
- 重要术语中英对照

### 行前障碍
- 不知道怎么玩
- 担心签证
- 担心支付
- 担心网络
- 担心语言

### 行中障碍

- 不会坐高铁
- 不会打车
- 不知道如何支付
- 不知道如何订票

### 行后障碍

- 不会退税
- 不知道如何离境

---

# 四、SEO技术规范

## 4.1 元数据要求

每个页面必须包含：

- `<title>` 格式：`[城市名] Travel Guide - China Guide`
- `<meta name="description">` 页面描述（150-160字符）
- `<meta name="keywords">` 关键词（逗号分隔）
- `<meta name="robots">` 设置为 `index, follow`
- `<link rel="canonical">` 规范URL

## 4.2 社交分享标签

```html
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="图片URL">
<meta property="og:url" content="页面URL">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
```

## 4.3 Structured Data（结构化数据）

使用 JSON-LD Schema.org 格式：

- **首页**：`TravelWebsite` 类型，含 aggregateRating
- **城市页**：`City` 类型，含地理坐标 geo
- **组织**：`Organization` 类型

示例：
```json
{
  "@context": "https://schema.org",
  "@type": "TravelWebsite",
  "name": "China Guide",
  "url": "https://tourforchina.com/",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "256"
  }
}
```

## 4.4 SEO 已实现状态

| 页面 | keywords | og:image | canonical | Structured Data |
|------|----------|----------|----------|----------------|
| 首页 | ✅ | ✅ | ✅ | ✅ TravelWebsite |
| 城市页 | ✅ | ✅ | ✅ | ✅ City |
| 行程页 | 待补充 | 待补充 | 待补充 | 待补充 |

---

# 五、产品架构

# 5.1 网站结构

```text
首页 Home
├── Why China
├── Destinations
├── Itineraries
├── Transportation
├── Hotels & Booking
├── Travel Essentials
├── FAQs
├── Tax Refund
├── Blog
└── About
```

---

# 六、首页模块需求

# 6.1 首页目标

首页需要在 10 秒内完成以下目标：

- 吸引用户继续浏览
- 建立中国旅行兴趣
- 建立安全感
- 告诉用户“中国其实很好玩”
- 告诉用户“网站可以帮助解决问题”

---

# 6.2 首页模块结构

## 模块一：Hero Banner

内容：

- 中国城市夜景
- 长城
- 高铁
- 美食
- 自然景观

文案：

- Discover the Real China
- Ancient Culture Meets Future Cities
- Travel China With Confidence

CTA：

- Start Planning
- Explore Destinations

---

## 模块二：Why Visit China

展示中国吸引力：

- 世界级美食
- 高铁系统
- 历史文化
- 自然风景
- 安全城市
- 现代科技体验

---

## 模块三：热门路线推荐

展示（**每个卡片必须可点击跳转至单独路线详情页**）：

- First Time China Trip → `itineraries/first-time-china.html` ✅ 已实现
- China in 7 Days → `itineraries/china-7-days.html` ✅ 已实现
- High-Speed Rail Journey → `itineraries/high-speed-rail.html` ✅ 已实现
- Food Tour in Sichuan → 待实现
- Ancient China Route → 待实现

> ⚠️ 页面实现要求：每个行程卡片必须用 `<a href="...">` 包裹，支持点击跳转

每条路线展示：

- 天数
- 预算
- 最佳季节
- 适合人群
- 交通方式

---

## 模块四：首次来中国必看

内容：

- Visa Guide
- Alipay Setup
- VPN Guide
- Train Ticket Guide
- eSIM Guide

---

## 模块五：热门城市

展示：

- 北京 ⭐ 本地图片
- 上海 ⭐ 本地图片
- 西安 ⭐ 本地图片
- 成都 ⭐ 本地图片
- 桂林
- 张家界 ⭐ 本地图片
- 重庆 ⭐ 新增页面
- 杭州

> ⭐ 表示已使用本地高质量图片

---

## 模块六：FAQ 快速入口

例如：

- Is China safe?
- Can Americans use Alipay?
- Do I need a visa?
- Can I use Google in China?

---

# 七、城市模块需求

# 7.1 城市列表页

功能：

展示所有推荐旅游城市，支持城市图片展示。

已实现页面：`cities/destinations.html`

支持：

- 搜索
- 分类
- 标签筛选

筛选维度：

- 历史文化
- 美食
- 自然景观
- 现代城市
- 适合首次来中国
- 亲子旅行

---

# 7.2 城市详情页

每个城市需要包含以下模块。

已实现城市页面：

- `cities/beijing.html`
- `cities/shanghai.html`
- `cities/xian.html`
- `cities/zhangjiajie.html`
- `cities/chengdu.html`
- `cities/chongqing.html` ⭐ 新增

---

## 城市简介

每个城市包含城市特色图片（使用本地高质量图片）。

包括：

- 城市特点
- 为什么值得来
- 最佳季节
- 推荐停留时间
- 城市安全性
- 英语友好程度

---

## 必玩景点

每个景点包含：

- 图片
- 介绍
- 开放时间
- 门票
- 交通方式
- 游玩建议

> ⭐ 成都页面已实现详细景点描述（含交通指南、四季游览建议）和美食专区（含推荐餐厅、必点菜品）

---

## 城市路线推荐

例如：

### 北京 3 日路线

Day 1：

- 故宫
- 天安门
- 景山

Day 2：

- 长城
- 鸟巢

Day 3：

- 胡同
- 798

---

## 美食推荐

包括：

- 本地特色菜
- 推荐餐厅
- 外国人友好程度
- 点餐建议

---

## 实用信息

包括：

- 地铁系统
- 打车方式
- 支付方式
- 网络情况
- 常见注意事项

---

## Trip.com 导流

展示：

- 酒店推荐
- 机票搜索
- 火车票搜索

按钮：

- Book Hotel
- Find Flights
- Book Train Tickets

---

# 八、行程规划模块需求

# 8.1 模块目标

帮助用户：

- 快速理解中国地理距离
- 规划合理路线
- 对比交通方式
- 控制预算

---

# 8.2 行程列表页

展示：

- 热门路线
- 按天数分类
- 按预算分类

支持筛选：

- 3 天
- 7 天
- 14 天
- 历史文化
- 美食
- 自然风景
- 首次来中国

---

# 8.3 行程详情页

每条路线包含：

## 路线概述

包括：

- 天数
- 城市
- 预算
- 最佳季节
- 推荐人群

---

## Day by Day 行程

例如：

Day 1：抵达北京

Day 2：故宫 + 长城

Day 3：高铁去西安

---

## 交通方式对比

例如：

### 上海 → 张家界

高铁：

优点：

- 风景好
- 市区直达

缺点：

- 时间长

飞机：

优点：

- 更快

缺点：

- 机场距离远

---

## 预算估算

包括：

- 酒店
- 交通
- 门票
- 餐饮

---

## Trip.com 预订入口

支持：

- 酒店
- 航班
- 高铁票

---

# 九、交通模块需求

# 9.1 高铁指南

内容：

- 如何购买高铁票
- 如何进站
- 如何安检
- 如何查看车次
- 行李限制
- 商务座 / 一等座区别

---

# 9.2 飞机指南

内容：

- 中国国内航班说明
- 行李规则
- 值机流程
- 延误说明

---

# 9.3 地铁指南

内容：

- 如何购票
- 如何扫码
- 英文支持

---

# 9.4 打车指南

内容：

- DiDi 使用教程
- 支付方式
- 英文界面说明

---

# 十、Travel Essentials 模块需求

# 10.1 模块定位

这是网站最重要模块之一。

主要目标：

消除外国游客对中国旅行的不确定感。

---

# 10.2 Visa Guide

包括：

- 美国公民是否需要签证
- 签证申请流程
- 所需材料
- 144 小时过境免签
- 入境要求

---

# 10.3 支付方式

重点内容：

- 如何使用 Alipay
- 如何绑定 Visa/Mastercard
- 微信支付使用教程
- 是否还能使用现金

---

# 10.4 网络问题

包括：

- Google 是否可用
- VPN 是否需要
- eSIM 推荐
- 漫游方案

---

# 10.5 通讯方式

推荐：

- 微信
- Apple Translate
- Google Translate

---

# 10.6 必备 App 推荐

包括：

- Alipay
- WeChat
- DiDi
- Trip.com
- Amap
- Baidu Translate

---

# 十一、FAQ 模块需求

# 11.1 FAQ 分类

## Visa

问题示例：

- Do Americans need a visa for China?
- How long does China visa approval take?

---

## Payment

问题示例：

- Can foreigners use Alipay?
- Can I use Visa card in China?

---

## Internet

问题示例：

- Does Google work in China?
- Do I need a VPN?

---

## Safety

问题示例：

- Is China safe for solo travelers?
- Is China safe at night?

---

## Transportation

问题示例：

- How do I buy train tickets?
- Is DiDi available in English?

---

# 十二、退税模块需求

# 12.1 Tax Refund Guide

包括：

- 哪些商品支持退税
- 如何申请退税
- 机场退税流程
- 所需材料
- 退税比例

---

# 十三、Trip.com 联盟系统需求

# 13.1 商业模式

用户行为路径：

```text
用户阅读攻略
→ 查看路线
→ 点击 Trip.com
→ 跳转 Trip.com
→ 用户下单
→ 获得佣金
```

---

# 13.2 接入位置

## 酒店模块

展示：

- 酒店列表
- 酒店推荐

按钮：

- Book on Trip.com

---

## 航班模块

按钮：

- Find Flights

---

## 火车模块

按钮：

- Book Train Tickets

---

# 13.3 跳转逻辑

用户点击后：

自动拼接：

- 城市
- 日期
- 人数

生成对应 Trip.com 搜索链接。

---

# 十四、SEO 策略

# 14.1 SEO 目标

通过 Google SEO 获取自然流量。

---

# 14.2 SEO 核心关键词

## Why China

- Why visit China
- China travel guide
- Is China safe for tourists

---

## 城市类

- Beijing itinerary
- Shanghai travel guide
- Best places in China

---

## 实用类

- How to use Alipay in China
- China visa for Americans
- VPN for China travel

---

# 14.3 内容策略

重点：

- 超长英文攻略
- FAQ 内容
- 实拍图片
- 路线图
- 教程型内容

---

# 十五、后台 CMS 需求

# 15.1 内容管理功能

支持：

- 城市内容管理
- 景点管理
- FAQ 管理
- Blog 管理
- SEO 管理

---

# 15.2 SEO 设置

支持：

- Meta Title
- Meta Description
- OG Image
- URL Slug

---

# 十六、用户系统（后期）

# 16.1 用户功能

支持：

- 注册登录
- 收藏路线
- 收藏城市
- 保存行程
- 邮件订阅

---

# 十七、AI 功能（后期）

# 17.1 AI 行程规划

用户输入：

- 天数
- 预算
- 兴趣

自动生成：

- 行程
- 酒店建议
- 城市间交通
- Trip.com 跳转链接

---

# 十八、技术架构

# 18.1 前端

推荐：

- Next.js
- TypeScript
- TailwindCSS

原因：

- SEO 强
- SSR 支持
- 多语言友好
- 页面速度快

---

# 18.2 后端

推荐：

- Node.js
- NestJS
- PostgreSQL
- Redis

---

# 18.3 CMS

推荐：

- Strapi
- Sanity
- Notion API（初期）

---

# 18.4 地图系统

推荐：

海外用户：

- Google Maps

中国地图：

- 高德地图 API

---

# 十九、数据结构设计

# 19.1 城市数据结构

字段：

- 城市名称
- 英文名称
- 简介
- 推荐季节
- 推荐停留天数
- 景点列表
- 美食列表
- 交通信息
- SEO 信息

---

# 19.2 行程数据结构

字段：

- 行程名称
- 天数
- 城市列表
- 每日安排
- 预算
- 最佳季节
- Trip.com 跳转参数

---

# 二十、UI/UX 设计方向

# 20.1 风格方向

参考：

- Japan Guide
- Lonely Planet
- Airbnb Travel

风格关键词：

- 国际化
- 清晰
- 现代
- 高级感
- 图片驱动

---

# 20.2 用户体验原则

- 信息结构清晰
- 重点突出
- 大量 FAQ
- 强导航
- 移动端优先

---

# 二十一、MVP 范围

# 21.1 第一阶段必须完成

## 页面

- 首页
- 城市详情页
- FAQ
- Travel Essentials
- 行程详情页

---

## 城市

优先上线：

- 北京
- 上海
- 西安
- 成都
- 张家界

---

## 功能

- Trip.com 跳转
- SEO
- CMS
- 响应式布局

---

# 二十二、阶段规划

# Phase 1（1-2个月）

完成：

- UI 设计
- 技术架构
- CMS
- 首页
- 城市页

---

# Phase 2（2-4个月）

完成：

- 行程模块
- FAQ
- Travel Essentials
- SEO 内容

---

# Phase 3（4-6个月）

完成：

- AI 行程
- 用户系统
- 邮件系统
- 数据分析

---

# 二十三、数据分析需求

# 23.1 核心指标

包括：

- UV
- SEO 流量
- 页面停留时间
- Trip.com 点击率
- 转化率

---

# 23.2 分析工具

推荐：

- Google Analytics
- Google Search Console
- Hotjar

---

# 二十四、风险与挑战

# 24.1 内容挑战

- 英文内容质量要求高
- SEO 周期长
- 需要大量真实信息

---

# 24.2 技术挑战

- 中国地图与海外地图兼容
- Trip.com 参数拼接
- SEO SSR

---

# 24.3 用户信任挑战

外国用户对中国存在认知门槛。

因此网站必须：

- 专业
- 清晰
- 真实
- 安全感强

---

# 二十五、项目成功关键

项目成功的关键并不是“做一个旅游网站”。

真正的核心是：

“帮助外国游客低门槛地完成第一次中国自由行。”

核心价值：

- 降低陌生感
- 消除顾虑
- 提供真实信息
- 帮助完成规划
- 帮助完成预订

最终形成：

中国旅游内容入口 + 行程规划平台 + 旅行决策平台。

