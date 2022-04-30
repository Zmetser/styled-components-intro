import styled, { keyframes } from 'styled-components';

import logo from './logo.svg';

import { Button, Link } from './components/Button';
import { Input } from './components/Input';

const Container = styled.div`
  text-align: center;
  background-color: #bada55;

  button {
    background-color: yellow;
  }
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  ${Button} {
    background-color: white;
  }

  /* ${Button}:hover span {} */
`;

function App() {
  const isInvalid = true;
  return (
    <Container>
      <Button>Learn React</Button>
      <Header>
        <Button>Learn React</Button>
        <Input type="text" value="hello" invalid={isInvalid} />
      </Header>
    </Container>
  );
}

export default App;
