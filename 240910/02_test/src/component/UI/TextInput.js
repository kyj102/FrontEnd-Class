import React from 'react'
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  width: calc(100% - 32px);
  // 해당 변수의 값을 인자값으로 찾아옴, 해당 인자값이 실제로 존재하면 우항을 실행시키라는 AND단락회로평가
  ${({height}) => height && `height: ${height}px`};
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
`;

const TextInput = ({height}) => {
  return (
    <StyledTextArea height={height}></StyledTextArea>
  )
}

export default TextInput
