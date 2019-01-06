import { PropTypes } from 'react';
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from '../modal';
import SwipeActionProps from './SwipeActionPropsType';
import SwipeStyle from './style/index';

export interface ButtonProps {
  text?: string;
  onPress?: () => void;
  style?: {};
}

class SwipeAction extends React.Component<SwipeActionProps, any> {
  static propTypes = {
    autoClose: PropTypes.bool,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    left: PropTypes.arrayOf(PropTypes.object),
    right: PropTypes.arrayOf(PropTypes.object),
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.any,
  };

  static defaultProps = {
    title: '请确认操作',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen() {},
    onClose() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  setModalVisible(visible) {
    this.setState({
      showModal: visible,
    });
  }

  onClose() {
    this.props.onClose();
    this.setState({
      showModal: false,
    });
  }

  onAndroidBtnClick(btn) {
    const onPress = btn.onPress;
    if (onPress) {
      onPress();
    }
    if (this.props.autoClose) {
      this.onClose();
    }
  }

  onLongPress = () => {
    this.setState({
      showModal: true,
    });
  }

  renderAndroidBtn = () => {
    const { left, right } = this.props;
    const actions = [...left, ...right];
    return (
      <View style={[SwipeStyle.actions]}>
        {
          actions.map((btn: ButtonProps, i: number) => {
            return (
              <View key={i} style={[SwipeStyle.buttonWrap]}>
                <TouchableOpacity onPress={() => {this.onAndroidBtnClick(btn);}}>
                  <Text style={[SwipeStyle.button]}>{btn.text || 'Click'}</Text>
                  </TouchableOpacity>
              </View>
            );
          })
        }
      </View>
    );
  }

  _renderAndroidModal() {
    return (
      <Modal
        visible={this.state.showModal}
        transparent
        maskClosable
        onShow={this.props.onOpen}
        onClose={this.props.onClose}
        title={this.props.title}
        onRequestClose={() => {this.setModalVisible(false);}}
        footer={this.renderAndroidBtn()}
      />
    );
  }

  render() {
    const { style, children } = this.props;
    return (
      <View style={style}>
        <TouchableOpacity onLongPress={this.onLongPress}>
          <View>{children}</View>
        </TouchableOpacity>
        { this.state.showModal ? this._renderAndroidModal() : null}
      </View>
    );
  }
}

export default SwipeAction;
