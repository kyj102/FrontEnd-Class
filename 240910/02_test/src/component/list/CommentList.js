import React from 'react'
import CommentListItem from './CommentListItem';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justigfy-content: center;
  align-items: flex-start;
  & * {
  margin-bottom: 16px;
  }
`;

const CommentList = ({comments}) => {
  console.log(comments)
  return (
    <Wrapper>
      {/* 실행 || 실행한 결과값을 반환 */}
      {comments.map((comment) => {
        return <CommentListItem 
        key={comment.id} 
        comment={comment.content}
        />;
      })}
      <CommentListItem/>
    </Wrapper>
  )
}

export default CommentList
