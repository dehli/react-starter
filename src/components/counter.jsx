// @flow

import React, { Component } from 'react';
import Aux from './aux';
import Button from './button';

type State = {
  value: number
};
class Counter extends Component<{}, State> {
  state = {
    value: 0,
  };

  onPlusClick = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  }

  render() {
    const { value } = this.state;
    return (
      <Aux>
        <Button primary onClick={this.onPlusClick}>
          +
        </Button>
        <span>{value}</span>
      </Aux>
    );
  }
}

export default Counter;
