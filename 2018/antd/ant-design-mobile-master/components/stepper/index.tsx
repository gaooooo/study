import * as React from 'react';
import RcInputNumber from 'rc-input-number/lib';
import StepProps from './StepPropTypes';
import styles from 'rc-input-number/lib/styles';
import { Platform } from 'react-native';

export default class Stepper extends React.Component<StepProps, any> {
  static defaultProps = {
    step: 1,
    readOnly: true,
    disabled: false,
    styles,
  };

  render() {
    const restProps = Object.assign({}, this.props);
    const inputAndroidStyle = Platform.OS === 'android' ? {
      top: 6,
      paddingTop: 0,
    } : {};
    const inputStyle = Object.assign({}, inputAndroidStyle, this.props.inputStyle);
    delete restProps.inputStyle;

    return (
      <RcInputNumber {...restProps} inputStyle={inputStyle} />
    );
  }
}
