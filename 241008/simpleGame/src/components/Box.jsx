import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 500px;
  height: 500px;
  border: 1px solid #ff9dc4;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #ff9dc4;
  font-weight: 600;
  text-align: center;
`;

const Img = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 50%;
  object-fit: cover;
`;

const Result = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const Box = ({title, item, result}) => {
  if(title === "Computer" && result !== "tie") {
    result = result === "" ? "" : "win" ? "lose" : "win"
  };
  return (
    <Wrapper>
      <Title>{title}</Title>
      {/* useState의 최초값이 null일때, 아이템에 이미지가 있을 시 각 값에 맞는 이미지 출력 */}
      <Img src={item && item.img} alt={"title"}
      />
      <Result>{result}</Result>
    </Wrapper>
  )
}

export default Box
