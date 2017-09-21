// @flow

import React, { Component } from 'react';
import Button from 'src/components/button';

type State = {
  counter: number
};
class App extends Component<{}, State> {
  state = {
    counter: 0,
  };

  onButtonClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { counter } = this.state;
    return [

      <Button
        key="containers-app-btn"
        primary
        onClick={this.onButtonClick}
      >
        Click Me!
      </Button>,

      <span key="containers-app-span">{counter}</span>,
    ];
  }
}

export default App;
