import { PropTypes } from 'react';
import * as React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import variables from '../style/variables';
import ButtonProps from './ButtonPropsType';

export default class Button extends React.Component<ButtonProps, any> {
  static propTypes = {
    pressIn: PropTypes.bool,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
    type: PropTypes.oneOf(['primary', 'default']),
    ghost: PropTypes.bool,
    inline: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    pressIn: false,
    size: 'large',
    type: 'primary',
    ghost: false,
    disabled: false,
    inline: false,
    loading: false,
    onClick: (x: any) => {},
  };
  mTextColor: string;
  mBorderColor: string;
  mTextHighlightColor: string;
  mBorderHighlightColor: string;
  constructor(props) {
    super(props);
    this.state = {
      pressIn: false,
    };
  }

  pressTextColor() {
    if (this.state.pressIn) {
      return { color: this.mTextHighlightColor };
    }

    return { color: this.mTextColor };
  }

  pressBorderColor() {
    if (this.state.pressIn && this.mBorderHighlightColor) {
      return { borderColor: this.mBorderHighlightColor };
    }

    return {borderColor: this.mBorderColor};
  }

  onPressIn = (...args) => {
    this.setState({ pressIn: true });
  };

  onPressOut = (...args) => {
    this.setState({ pressIn: false });
  };

  render() {
    const size = this.props.size;
    const type = this.props.type;
    const disabled = this.props.disabled;
    const ghost = this.props.ghost;

    let height;
    let fontSize;
    let backgroundColor;
    let textColor;
    let borderWidth;
    let borderColor;
    let borderRadius;

    let highlightBackgroundColor;
    let highlightTextColor;
    let highlightBorderColor;
    let paddingLeft;
    let paddingRight;

    const largeHeight = 11 * variables.grid;
    const smallHeight = 7 * variables.grid;
    const largePadding = 4 * variables.grid;
    const smallPadding = 3 * variables.grid;
    const largeFontSize = variables.font_size_6;
    const smallFontSize = variables.font_size_3;

    switch (size) {
      case 'large':
        height = largeHeight;
        fontSize = largeFontSize;
        paddingLeft = paddingRight = largePadding;
        break;
      case 'small':
        height = smallHeight;
        fontSize = smallFontSize;
        paddingLeft = paddingRight = smallPadding;
        break;
      default:
        break;
    }

    if (type === 'primary') {
      backgroundColor = variables.brand_6;
      textColor = variables.neutral_1;
      borderWidth = 1;
      borderColor = variables.brand_6;
      borderRadius = variables.radius_2;

      highlightBorderColor = variables.brand_7;
      highlightTextColor = variables.neutral_1;
      highlightBorderColor = variables.brand_7;
      highlightBackgroundColor = variables.brand_7;

      if (disabled) {
        textColor = variables.neutral_1;
        backgroundColor = variables.brand_3;
        borderColor = variables.brand_1;
      }

      if (ghost) {
        backgroundColor = 'transparent';
        textColor = variables.brand_6;
        borderColor = variables.brand_6;
        highlightTextColor = variables.brand_7;
        highlightBackgroundColor = variables.brand_3_f_20;
        highlightBorderColor = variables.brand_7;

        if (disabled) {
          textColor = variables.brand_3_f_60;
          backgroundColor = variables.brand_3_f_20;
          borderColor = backgroundColor;
        }
      }
    } else if (type === 'default') {
      backgroundColor = variables.neutral_1;
      textColor = variables.neutral_10;
      borderWidth = 1;
      borderColor = variables.neutral_5;
      borderRadius = variables.radius_2;

      highlightBackgroundColor = variables.neutral_2;
      highlightTextColor = textColor;

      if (disabled) {
        textColor = variables.neutral_6;
        backgroundColor = variables.neutral_3;
        borderColor = variables.neutral_4;
      }

      if (ghost) {
        textColor = variables.neutral_10;
        borderColor = variables.neutral_4;

        highlightTextColor = variables.neutral_10;
        highlightBackgroundColor = variables.neutral_3_f_20;
        highlightBorderColor = variables.neutral_4;

        if (disabled) {
          textColor = variables.neutral_6_f_60;
          backgroundColor = variables.neutral_3_f_20;
          borderColor = textColor;
        }
      }
    }

    let touchableProps: any = {};
    if (!disabled) {
      touchableProps.onPressIn = this.onPressIn;
      touchableProps.onPressOut = this.onPressOut;
    }

    let style = {
      alignItems: 'center',
      height,
      paddingLeft,
      paddingRight,
      backgroundColor,
      borderRadius,
      borderWidth,
      borderColor,
      justifyContent: 'center',
    };

    this.mTextColor = textColor;
    this.mBorderColor = borderColor;
    this.mTextHighlightColor = highlightTextColor;
    if (highlightBorderColor) {
      this.mBorderHighlightColor = highlightBorderColor;
    }

    if (disabled) {
      return (<View {...this.props} style={[style, this.pressBorderColor(), this.props.style]}>
        <Text style={[{ fontSize }, this.pressTextColor()]}>
          {this.props.children}
        </Text>
      </View>);
    }

    return (
      <TouchableHighlight
        activeOpacity={1}
        onPress={() => this.props.onClick(this)}
        delayPressOut={1} { ...this.props } { ...touchableProps }
        style={[style, this.pressBorderColor(), this.props.style]}
        underlayColor={highlightBackgroundColor}
      >
        <Text style={[{ fontSize }, this.pressTextColor()]}>
          {this.props.children}
        </Text>
      </TouchableHighlight>
    );
  }
}
