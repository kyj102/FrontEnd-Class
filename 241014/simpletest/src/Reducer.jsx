import React from 'react'

let initialState = {
  count: 0,
  id: "",
  pw: "",
};

const Reducer = (state = initialState, action) => {
  // if(action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1 }; // if 조건문에 부합했을때 그 결과값의 반환
  // }
  // // 최종 reducer함수의 실행값을 store에 반환
  // return { ...state };

  switch(action.type) {
    case "INCREMENT" :
      return {...state, count: state.count + action.payload.num };
    case "DECREMENT" :
      return {...state, count: state.count - 1};
    case "LOGIN":
      return {...state, id:action.payload.id, pw: action.payload.pw};
      default:
        return {...state};
  }
}

export default Reducer
