// @flow

import React, { Component } from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { blue, white } from '../constants/colors.js';

type Props = {
  primary?: boolean,
  children?: Node
};

const Button = styled.button`
  background-color: ${props => props.primary ? blue : white};
  border: 2px solid ${blue};
  border-radius: 3px;
  color: ${props => props.primary ? white : blue};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;

  &:focus {
    border-color: red;
    outline: 0;
  }
`;

export default (props: Props) =>
  <Button {...props}>
    {props.children}
  </Button>;
