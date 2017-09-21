// @flow

import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { blue, red, white } from 'src/constants/colors';

type Props = {
  primary?: boolean,
  children?: Node
};

const ButtonWrapper = styled.button`
  background-color: ${(props: Props) => (props.primary ? blue : white)};
  border: 2px solid ${blue};
  border-radius: 3px;
  color: ${(props: Props) => (props.primary ? white : blue)};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;

  &:focus {
    border-color: ${red};
    outline: 0;
  }
`;

export default function Button(props: Props) {
  return (
    <ButtonWrapper {...props}>
      {props.children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  primary: false,
  children: null,
};
Button.displayName = 'Button';
