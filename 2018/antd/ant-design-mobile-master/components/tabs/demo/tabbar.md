---
order: 2
title: APP型选项卡
---

多用于页面的内容区块，起着控制小范围内的大块内容的分组和隐藏，起着保持界面整洁的作用。

````jsx
import { Tabs, Icon, WhiteSpace } from 'antd-mobile';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

let TabExample = React.createClass({
  render() {
    return (
      <div>
        <Tabs type="tabbar" defaultActiveKey="1" onChange={callback}>
          <TabPane tab={<span><Icon type="home" />首页</span>} key="1">选项首页内容</TabPane>
          <TabPane tab={<span><Icon type="team" />好友</span>} key="2">选项好友内容</TabPane>
          <TabPane tab={<span><Icon type="setting" />设置</span>} key="3">选项设置的内容</TabPane>
        </Tabs>
        <WhiteSpace />
        <Tabs type="tabbar" mode="dark" defaultActiveKey="2" onChange={callback}>
          <TabPane tab={<span><Icon type="home" />首页</span>} key="1">选项首页内容</TabPane>
          <TabPane tab={<span><Icon type="team" />好友</span>} key="2">选项好友内容</TabPane>
          <TabPane tab={<span><Icon type="setting" />设置</span>} key="3">选项设置的内容</TabPane>
        </Tabs>
      </div>
    );
  },
});

ReactDOM.render(<TabExample />, mountNode);
````
