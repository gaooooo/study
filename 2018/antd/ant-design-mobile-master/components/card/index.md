---
category: Components
type: Components
chinese: 卡片
english: Card
---

### 定义／Definition

卡片可以控制和组织信息，通常是更复杂或详细信息的切入点。

### 规则 / Rule

- 卡片是矩形，可定义为任何高度。
- 卡片可以包含自己的页头，页脚，列表视图，图像，和里面的任何元素。
- 卡头和内容可以是HTML。

## API

### Card

| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
|无| | | |

### Card.Header
| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|------------------|--------------|
|prefixCls (web only)| 样式类名前缀 | String | `am-card` |
|title| 卡片标题 | React.Element、String | |
|thumb| 卡片标题图片 | String |  |
|thumbStyle| 标题图片样式 | Object | {} |
|extra| 卡片标题辅助内容 | React.Element、String |  |

### Card.Body
| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
|无| | | |

### Card.Footer

| 成员        | 说明           | 类型        |   默认值       |
|-------------|----------------|--------------------|--------------|
|content|尾部内容 | React.Element、String | |
|extra| 尾部辅助内容 | React.Element、String |  |
