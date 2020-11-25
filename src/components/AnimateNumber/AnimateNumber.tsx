import React, { Component } from 'react';
import anime from 'animejs';

const defaultFunction = () => {};

interface AnimatedNumberProps {
  value: string | number,
  duration: number,
  delay: number,
  formatValue: any,
  begin: any,
  complete: any,
  run: any,
  update: any,
  easing: string,
  className: string,
}

class AnimatedNumber extends Component<AnimatedNumberProps> {
  static defaultProps = {
    duration: 1000,
    formatValue: (value: number) => value.toFixed(0),
    easing: 'easeInOutSine',
    run: defaultFunction,
    complete: defaultFunction,
    update: defaultFunction,
    begin: defaultFunction,
    delay: 0,
    className: null,
  };

  state = {
    animatedValue: 0,
  };

  componentDidMount = () => {
    this.animateValue();
  };

  componentDidUpdate = (prevProps: { value: any; }) => {
    if (prevProps.value !== this.props.value) this.animateValue();
  };

  target = {
    animatedValue: 0,
  };

  updateValue = (anima: any) => {
    this.props.update(anima);
    const { animatedValue } = this.target;
    this.setState({ animatedValue });
  };

  animateValue = () => {
    const {
      duration, begin, easing, complete, run, delay, value,
    } = this.props;

    anime({
      targets: this.target,
      animatedValue: value,
      duration,
      update: this.updateValue,
      easing,
      begin,
      complete,
      run,
      delay,
    });
  };

  render() {
    return (
      <span className={this.props.className}>
        {this.props.formatValue(Number(this.state.animatedValue))}
      </span>
    );
  }
}

export default AnimatedNumber;