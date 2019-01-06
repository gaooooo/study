import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Drawer, List, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { DefaultRenderer, Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default class DrawerExample extends React.Component<any, any> {
  static drawer: any;
  drawer: any;
  onOpenChange = (isOpen) => {
    /* tslint:disable: no-console */
    console.log('是否打开了 Drawer', (isOpen).toString());
    Actions.refresh({ key: this.props.navigationState.key, open: isOpen });
  }
  render() {
    const sidebar = (<View style={[styles.container, { backgroundColor: '#fff' }]}>
      <List>
        <List.Body>
          <List.Item>仅可进行收款、退款及查账操作</List.Item>
          <List.Item>仅可进行收款、退款及查账操作</List.Item>
          <List.Item>仅可进行收款、退款及查账操作</List.Item>
          <Button inline onPress={() => this.drawer.drawer.closeDrawer()}>关闭 drawer</Button>
        </List.Body>
      </List>
    </View>);

    const drawerProps = {
      position: 'left',
      onOpenChange: this.onOpenChange,
    };

    return (
      <Drawer sidebar={sidebar} {...drawerProps} ref={d => {
        this.drawer = d;
        DrawerExample.drawer = d;
      } }>
        <DefaultRenderer
          navigationState={this.props.navigationState.children[0]}
          onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}

export class DrawerMain extends React.Component<any, any> {
  drawer: any;
  componentDidMount() {
    setTimeout(() => {
      this.drawer = this.props.drawerComponent.drawer.drawer;
    }, 20);
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 114 }}>
        <View>
          <WingBlank size={16}>
            <Button type="primary" inline onPress={() => this.drawer && this.drawer.openDrawer() }>打开 drawer</Button>
          </WingBlank>
          <Text style={{ color: 'red', textAlign: 'center', marginTop: 40 }}>主内容</Text>
          <WhiteSpace size={60} />
          <WingBlank size={16}>
            <Button ghost inline onPress={() => {
              Actions.pop();
            }}>返回 demo list</Button>
          </WingBlank>
        </View>
      </View>
    );
  }
};
