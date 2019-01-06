import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
import Flex from '../flex';
import Carousel from '../carousel/index.web';
function noop() {}

export interface DataItem {
  icon?: any;
  text?: any;
  [key: string]: any;
}

export interface GridProps {
  /** web only */
  prefixCls?: string;
  style?: React.CSSProperties;
  /** web only */
  className?: string;
  data?: Array<DataItem>;
  onClick?: Function;
  hasLine?: boolean;
  needActive?: boolean;
  isCarousel?: boolean;
}

export interface GridState {
  hover: boolean;
  hoverIndex?: number;
}

export default class Grid extends React.Component<GridProps, GridState> {
  static propTypes = {
    prefixCls: PropTypes.string,
    data: PropTypes.array,
    onClick: PropTypes.func,
    hasLine: PropTypes.bool,
    needActive: PropTypes.bool,
    isCarousel: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'am-grid',
    data: [],
    onClick: noop,
    hasLine: true,
    needActive: true,
    isCarousel: false,
  };

  clientWidth: any;

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  componentWillMount() {
    this.clientWidth = document.documentElement.clientWidth;
  }

  onTouchStart = (index) => {
    if (this.props.needActive) {
      this.setState({
        hover: true,
        hoverIndex: index,
      });
    }
  };

  onTouchEnd = () => {
    if (this.props.needActive) {
      this.setState({
        hover: false,
      });
    }
  };

  render() {
    let { className, data, prefixCls, hasLine, isCarousel, needActive } = this.props;

    const wrapCls = classNames({
      [prefixCls]: true,
      [`${prefixCls}-line`]: hasLine,
      [className]: className,
    });

    const itemCls = classNames({
      [`${prefixCls}-item-hover`]: needActive,
    });

    const dataLength = data.length;

    const FlexCount = Math.ceil(dataLength / 4);

    let gridContent = [];
    let carouselContent = [];

    const flexItemStyle = {
      height: `${this.clientWidth / 4}px`,
      paddingTop: `${(this.clientWidth / 4 - 40) / 2}px`,
    };

    for (let i = 0; i < FlexCount; i ++) {
      let flexContent = [];
      for (let j = 0; j < 4; j++) {
        if (i * 4 + j < dataLength) {
          flexContent.push(<Flex.Item
            className={itemCls}
            style={flexItemStyle}
            onClick={() => {this.props.onClick(data[i * 4 + j], (i * 4 + j));}}
            key={`griditem-${i * 4 + j}`}
          >
            <div className={`${prefixCls}-icon`} style={{ backgroundImage: `url(${data[i * 4 + j].icon})` }} />
            <div className={`${prefixCls}-text`}>{data[i * 4 + j].text}</div>
          </Flex.Item>);
        } else {
          flexContent.push(<Flex.Item style={flexItemStyle} key={`griditem-${i * 4 + j}`} />);
        }
      }

      gridContent.push(<Flex key={`fridflex${i}`}>{flexContent}</Flex>);
    }

    if (isCarousel) {
      const gridContentLength = gridContent.length;
      for (let k = 0, len = Math.ceil(gridContentLength / 2); k < len; k++) {
        if (k * 2 < gridContentLength) {
          carouselContent.push();
        }
        if (k * 2 + 1 < gridContentLength) {
          carouselContent.push(<div
            key={`carouselitem-${k * 2 + 1}`}
          >
            {gridContent[k * 2]}
            {gridContent[k * 2 + 1]}
          </div>);
        } else {
          carouselContent.push(<div
            key={`carouselitem-${k * 2}`}
          >
            {gridContent[k * 2]}
            <Flex>
              <Flex.Item className={itemCls} style={flexItemStyle} />
              <Flex.Item className={itemCls} style={flexItemStyle} />
              <Flex.Item className={itemCls} style={flexItemStyle} />
              <Flex.Item className={itemCls} style={flexItemStyle} />
            </Flex>
          </div>);
        }
      }
    }

    return (
      <div
        className={wrapCls}
      >{isCarousel ? <Carousel mode="banner" infinite={false}>
          {carouselContent}
        </Carousel> : gridContent}
      </div>
    );
  }
}
