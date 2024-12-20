import React from 'react'
import styled from 'styled-components';
import PostListItem from './PostListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const PostList = ({posts, onClickItem}) => {
  return (
    <Wrapper>

      {/* 함수를 전달하는 것이기 때문에 중괄호 아닌 소괄호 안에 넣어줘야한다 */}
      {posts.map((post) => (
        <PostListItem 
        key={post.id} 
        post={post}
        onClick={() => onClickItem(post)
        }
        />
      )
      )}
    </Wrapper>
  )
}

export default PostList;