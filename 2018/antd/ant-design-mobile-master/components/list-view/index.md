---
category: Components
type: Components
chinese: 长列表
english: ListView
---

### 定义／Definition
react-native 核心组件。

高性能列表：节点分步渲染；无尽列表。

### 规则 / Rule
常用在渲染长列表中


## API
same as [React Native ListView](https://facebook.github.io/react-native/docs/listview.html#content)
(v0.26).

#### 不支持的特性
> 一般情况下，不支持“平台特有”的API，例如`android`endFillColor、`ios`alwaysBounceHorizontal。
另外，使用 css 代替 react-native 的 style 设置方式。

- onChangeVisibleRows
- stickyHeaderIndices

- [ScrollView](https://facebook.github.io/react-native/docs/scrollview.html#props) props:
- keyboardDismissMode (not support control keyboard)
- keyboardShouldPersistTaps (not support control keyboard)
- onContentSizeChange (use onLayout instead)
- removeClippedSubviews
- showsHorizontalScrollIndicator (use css style instead)
- showsVerticalScrollIndicator (use css style instead)

- [View](https://facebook.github.io/react-native/docs/view.html#props) props: **注意：只支持`onLayout` prop**

#### 新增API
- stickyHeader 固定区块标题到页面顶部 (注意: 设置后，ScrollComponent 将被渲染到 body 的第一个元素里)
    - stickyProps / stickyContainerProps (see [react-sticky](https://github.com/captivationsoftware/react-sticky))
- renderBodyComponent 渲染自定义的 body 组件

### ListView.IndexedList (beta)
> 注意：由于需要直接scroll到任意位置、只支持分两步渲染，所以列表数据量过大时、性能会有影响

支持右侧导航功能

- quickSearchBarTop (object{value:string, label:string}, 默认为'#') - 快捷导航栏置顶按钮
- quickSearchBarStyle (object) - quickSearchBar 的 style
- onQuickSearch (function()) 快捷导航切换时触发
- delayTime (number) - 默认 100ms, 延迟渲染时间设置（用于首屏优化，一开始渲染`initialListSize`数量的数据，在此时间后、延迟渲染剩余的数据项、即`totalRowCount - initialListSize`）
- delayActivityIndicator (react node) - 延迟渲染的 loading 指示器
