import React, { Component } from 'react';
import styled from 'styled-components';
import { blue, white } from '../constants/colors.js';

const ButtonWrapper = styled.button`
  color: ${white};
  background-color: ${blue};
`;

class Button extends Component {
  render() {
    return (
      <ButtonWrapper>
        Button
      </ButtonWrapper>
    );
  }
}

export default Button;
