import styled from 'styled-components';
import { darken } from 'polished';

const arr = ['blue', 'yellow', 'pink']

const theme = {
  primary: {
    color: 'white',
    backgroundColor: 'blue'
  },
  secondary: {
    color: 'white',
    backgroundColor: 'green'
  },
  default: {
    color: 'black',
    backgroundColor: 'white'
  }
};

function getColor(props, key) {
  if (props.primary) return theme.primary[key];
  if (props.secondary) return theme.secondary[key];
  return theme.default[key];
}

export const Button = styled.button`
  background-color: ${props => getColor(props, 'backgroundColor')};
  color: ${props => getColor(props, 'color')};

  border-radius: 20px;
  height: 50px;
  width: 200px;

  &:hover,
  &:active {
    background-color: ${props => darken(0.2, getColor(props, 'backgroundColor'))};
  }

  &.active {
    background-color: yellow;
  }

  .active & {
    background-color: pink;
  }
`;

export const Link = styled(Button)`
  background-color: red;
`;