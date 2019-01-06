import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
import Checkbox from './Checkbox.web';
import List from '../list';
function noop() {}

const ListItem = List.Item;

export interface CheckboxItemProps {
  /** web only */
  prefixCls?: string;
  /** web only */
  listPrefixCls?: string;
  style?: React.CSSProperties;
  /** web only */
  className?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: Function;
  children?: any;
  extra?: any;
}

export default class CheckboxItem extends React.Component<CheckboxItemProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-checkbox',
    listPrefixCls: 'am-list',
    name: '',
    checked: false,
    disabled: false,
    onChange: noop,
  };

  render() {
    let {
      prefixCls, listPrefixCls, style, className, name, checked, disabled, children, extra, onChange,
    } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled === true,
      [className]: className,
    });

    return (<ListItem
      prefixCls={listPrefixCls}
      style={style}
      className={wrapCls}
      extra={extra}
      thumb={<Checkbox
        prefixCls={prefixCls}
        checked={checked}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />}
    >{children}</ListItem>);
  }
}
