import * as React from 'react';
import { View, Text, Platform } from 'react-native';
import { ActionSheet, Button } from 'antd-mobile';

const BUTTONS = [
  '操作 0',
  '操作 1',
  '操作 2',
  '删除',
  '取消',
];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

export default React.createClass({
  getInitialState() {
    return {
      clicked: 'none',
      text: '',
    };
  },
  render() {
    return (
      <View>
        <View style={[{ padding: 8 }]}>
          <Button type="primary" onClick={this.showActionSheet}>默认状态操作列表</Button>
        </View>
        <Text style={[{ padding: 8 }]}>
          点击过的按钮: {this.state.clicked}
        </Text>
        <View style={[{ padding: 8 }]}>
          <Button type="primary" onClick={this.showShareActionSheet}>带分享功能的操作列表</Button>
        </View>
        <Text style={[{ padding: 8 }]}>
          {this.state.text}
        </Text>
      </View>
    );
  },
  showActionSheet() {
    ActionSheet.showActionSheetWithOptions({
      title: '标题',
      message: '我是描述我是描述',
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  },
  showShareActionSheet() {
    const opts = {
      url: 'https://www.alipay.com/',
      message: 'message to go with the shared url',
      excludedActivityTypes: [
        <Text>excludedActivityTypes</Text>,
      ] as any[],
      subject: null as string,
    };
    if (Platform.OS === 'ios') {
      opts.subject = 'a subject to go in the email heading';
      opts.excludedActivityTypes = [
        'com.apple.UIKit.activity.PostToTwitter',
      ];
    }
    ActionSheet.showShareActionSheetWithOptions(opts,
    (error) => alert(error),
    (success, method) => {
      let text;
      if (success) {
        text = `通过 ${method} 分享`;
      } else {
        text = '您没有分享';
      }
      this.setState({text});
    });
  },
});

export const title = 'ActionSheet';
export const description = 'ActionSheet example';
