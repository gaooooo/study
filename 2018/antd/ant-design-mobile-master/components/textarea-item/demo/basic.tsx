import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { TextAreaItem } from 'antd-mobile';

export default class BasicTextAreaItemExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      value1: '默认带value',
      text: '',
      height: 0,
    };
  }

  onChange = (e) => {
    // console.log('onChange');
    // console.log(e.text);
  }

  onFocus = () => {
    // console.log('onFocus');
  }

  onBlur = () => {
    // console.log('onBlur');
  }

  handleError = () => {
    // console.log('onErrorClick')
  }

  render() {
    return (
      <View style={{ padding: 10, backgroundColor: '#f1f1f1', flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={{marginTop: 20}}>
            <TextAreaItem
              rows = {4}
              placeholder="固定行数"
              onChange={(e) => this.onChange(e)}
              onFocus={(e) => this.onFocus()}
            />
          </View>

          <View style={{marginTop: 20}}>
            <TextAreaItem
              rows = {5}
              count = {100}
              placeholder="多行带计数"
              onChange={(e) => this.onChange(e)}
              onFocus={(e) => this.onFocus()}
            />
          </View>

          <View style={{marginTop: 20}}>
            <TextAreaItem
              keyboardType="email-address"
              value={this.state.value1}
              onChange={(e) => this.onChange(e)}
            />
          </View>

          <View style={{marginTop: 20}}>
            <TextAreaItem
              placeholder="高度自适应"
              autoHeight = {true}
              onChange={(e) => this.onChange(e)}
            />
          </View>

          <View style={{marginTop: 20}}>
            <TextAreaItem
              value="不可编辑 editable = {false}"
              editable = {false}
            />
          </View>

          <View style={{marginTop: 20}}>
            <TextAreaItem
              clear={false}
              placeholder="最大长度10，不带清除clear={false}"
              count = {10}
            />
          </View>

          <View style={{marginTop: 20}}>
            <TextAreaItem
              error
              value="报错样式 error={true}"
              count = {200}
              onErrorClick = {this.handleError}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
