import * as React from 'react';
import { View } from 'react-native';
import RNTimelineItem from './TimelineItem';
import TimelineProps from './TimelinePropsType';

export default class Timeline extends React.Component<TimelineProps, any> {
  static Item: any;

  static defaultProps = {
    color: 'blue',
  };

  render() {
    const children = this.props.children;
    return (
      <View>
      {
        React.Children.map(children, (ele: any, idx) =>
          React.cloneElement(ele, {
            last: idx === children.length - 1,
          })
        )
      }
      </View>
    );
  }
}

Timeline.Item = RNTimelineItem;
