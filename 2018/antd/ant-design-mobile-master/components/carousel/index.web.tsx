// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
if (typeof window !== 'undefined') {
  const matchMediaPolyfill = function matchMediaPolyfill(): any  {
    return {
      matches: false,
      addListener() {
      },
      removeListener() {
      },
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

import * as React from 'react';
import SlickCarousel from 'react-slick';
import assign from 'object-assign';
import CarouselProps from './CarouselPropTypes';

export default class Carousel extends React.Component<CarouselProps, any> {
  static defaultProps = {
    dots: true,
    arrows: false,
  };

  render() {
    let props = assign({}, this.props);

    if (props.effect === 'fade') {
      props.fade = true;
      props.draggable = false;
    }

    let className = 'am-carousel';
    if (props.vertical) {
      className = `${className} am-carousel-vertical`;
    }
    if (props.mode === 'banner') {
      className = `${className} am-carousel-banner`;
    }
    if (props.mode === 'card') {
      className = `${className} am-carousel-card center slider variable-width`;
      props.centerMode = true;
      props.infinite = true;
      props.slidesToShow = 1;
      props.slidesToScroll = 1;
      props.variableWidth = true;
    }

    return (
      <div className={className}>
        <SlickCarousel {...props} />
      </div>
    );
  }
}
