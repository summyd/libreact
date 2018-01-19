import {Component, createElement as h} from 'react';
import {isClient} from '../util';

export interface IWindowScrollSensorProps {
  children?: (scroll: IWindowScrollSensorState) => React.ReactElement<any>;
}

export interface IWindowScrollSensorState {
  x: number,
  y: number,
}

export class WindowScrollSensor extends Component<IWindowScrollSensorProps, IWindowScrollSensorState> {
  frame;

  constructor (props, context) {
    super(props, context);

    if (isClient) {
      this.state = {
        x: window.scrollX,
        y: window.scrollY
      };
    } else {
      this.state = {
        x: 0,
        y: 0
      };
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll, {
      capture: false,
      passive: true
    } as any);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      this.setState({
        x: window.scrollX,
        y: window.scrollY
      });
    });
  };

  render () {
    return this.props.children(this.state);
  }
}
