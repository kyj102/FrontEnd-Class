import React from 'react'

const Viewer = ({count}) => {
  return (
    <div>
      <div>📟 현재 카운트 📟</div>
      <h1>{count}</h1>
    </div>
  )
}

// 1. 버튼을 클릭하게 되면, 해당 버튼에 입력된 값을 찾아온다.
// 2. 찾아온 해당값을 현재 카운트 영역으로 출력해준다.
// > state > useState
// > state를 관리하는 요소 : 최상위 부모
// 리액트를 코드로 작성할때
// VD > 코드입력 > UI출력 > 모든 코드를 파싱한다

export default Viewer
