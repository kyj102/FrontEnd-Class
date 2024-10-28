import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  border: 4px solid ${({borderColor}) => borderColor};
  background: ${({bgColor}) => bgColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({bgColor, borderColor, text = "World!"}: CircleProps) => {
  const [counter, setCounter] = useState<number | string>(1);
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}  >
      {text} {counter}
    </Container>
  )
}

export default Circle
