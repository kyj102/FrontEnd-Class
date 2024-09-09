import React from 'react'
import "./Body.css"

// const Body = ({name, location, favList}) => {
//   // console.log(props)
//   const num = 19;
//   return (
//     <div>
//       <h1>Body</h1>
//       <h2>{name}는 {location}에 거주하고 있습니다.<br/>
//       {name}는 {favList.length}개의 음식을 좋아합니다!
//       </h2>
//       {/* <h2>
//         {num}는 {num % 2 === 0 ? "짝수" : "홀수"}입니다
//       </h2> */}
//     </div>
//   );
// };

const Body = ({children}) => {
  console.log(children)
  return 
    <div>child component</div>;
};

// 데이터를 가져오지 못했을 때를 대비한 백업데이터 (값이 반영되지 않은 0개 상태)
Body.defaultProps = {
  favList: [],
};

export default Body;