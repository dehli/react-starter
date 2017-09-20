// @flow

import React, { Component } from 'react';
import Button from '../components/button.jsx';

type State = {
  counter: number
};

class App extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  _onButtonClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <Button primary onClick={this._onButtonClick}>
          Click Me!
        </Button>
        <span>{counter}</span>
      </div>
    );
  }
}

export default App;
