import styled, { keyframes } from 'styled-components';

import logo from './logo.svg';

import { Button, Link } from './components/Button';

const Container = styled.div`
  text-align: center;
  background-color: #bada55;
`;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    & {
      animation: ${spinAnimation} infinite 20s linear;
    }
  }
`;

function App() {
  return (
    <Container>
      <Header>
        <AppLogo src={logo} alt="logo" />
        {/* <img src={logo} alt="logo" className={styled-components-magic-classname} /> */}
        <p>
          asd
        </p>
        <Button className='active'>Learn React</Button>

        <Button
          as="a"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">Learn React Link</Button>

        <Button as="div">Learn React Div</Button>

        <Link>Learn React Link</Link>

        <div className='active'>
          <Button>Learn React</Button>
        </div>
        <button>Nem lesz stilusozva</button>
      </Header>
    </Container>
  );
}

export default App;
