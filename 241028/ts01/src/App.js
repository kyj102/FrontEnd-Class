import React from 'react';
import styled, { keyframes } from 'styled-components'; // keyframes 추가

const Container = styled.div`
background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.color};
`;

const rotationAni = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  /* animation: ${rotationAni} 1s linear infinite alternate; */
  display: flex;
  justify-content: center;
  align-items: center;

  ${Emoji} {
    &:hover {
      font-size: 36px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const App = () => {
  return (
    <Container>
      <Title>Hello, world!</Title>
      <Box>
        <Emoji>🤍</Emoji>
      </Box>
        <Emoji>🤍</Emoji>
    </Container>
  );
}

export default App;
