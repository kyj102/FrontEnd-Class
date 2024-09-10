import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div className='Header'>
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1> 
    </div>
  );
};

export default React.memo(Header);
// header는 react.memo로 인해 고차컴포넌트화가 되었다.
// 따라서 횡단관심사로부터 벗어나게 되었다.
// 다른 형제요소들의 state값이 업데이트되어도 그 값에 영향을 받지 않는다.