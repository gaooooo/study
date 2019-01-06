---
order: 1
title: 圆圈颜色
---

圆圈颜色，绿色用于已完成、成功状态，橙色表示告警或错误状态，蓝色可表示正在进行或其他默认状态。

````jsx
import { Timeline, WingBlank, WhiteSpace } from 'antd-mobile';

let App = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace size={32} />
        <WingBlank size={32}>
          <Timeline>
            <Timeline.Item color="green">创建服务现场 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">创建服务现场 2015-09-01</Timeline.Item>
            <Timeline.Item color="orange">
              <p>初步排除网络异常1</p>
              <p>初步排除网络异常2</p>
              <p>初步排除网络异常3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item>
              <p>技术测试异常1</p>
              <p>技术测试异常2</p>
              <p>技术测试异常3 2015-09-01</p>
            </Timeline.Item>
          </Timeline>
        </WingBlank>
      </div>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````

<style>
  .demo-preview-wrapper .demo-preview-scroller * { box-sizing: border-box; }
</style>
