import React from 'react'
import styled from 'styled-components'
import VideosList from './VideosList';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Wrapper = styled.div`
  width: 700px;
  height: 108px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
  padding: 0 16px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
  background: pink;
  text-decoration: underline;
  }
`;

const TitleText = styled.p `
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

const PostListItem = ({post, onClick}) => {
  return (
    <Container>
      <VideosList 
      thumbnailUrl={post.thumbnailUrl} 
      videoUrl={post.videoUrl}
      onClick={onClick}
      />
      <Wrapper onClick={onClick}>
        <TitleText>
          {post.title}
        </TitleText>
      </Wrapper>
    </Container>
  )
}

export default PostListItem;
