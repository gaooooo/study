import React from 'react';
import ScrollLink from 'rc-scroll-anim/lib/ScrollLink';
import scrollScreen from 'rc-scroll-anim/lib/ScrollScreen';

export default class Link extends React.Component {
  componentDidMount() {
    scrollScreen.init({ docHeight: 4746 });
  }

  render() {
    return (
      <div id="list-wrapper">
        <ScrollLink className="list-point" location="banner" />
        <ScrollLink className="list-point" location="page1" />
        <ScrollLink className="list-point" location="page2" />
      </div>
    );
  }
}
