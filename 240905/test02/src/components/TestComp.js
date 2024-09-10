import React, {useReducer} from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case "DECREASE":
      return state - action.data;
    case "INCREASE":
      return state + action.data;
    case "INIT":
      return 0;
      default:
        return state;
  }
};

const TestComp = () => {
  // 상태변화촉발함수 :  dispatch()
  // 상태변화 요소의 트리거에 의해 촉발된다
  const [count, dispatch] = useReducer(reducer, 0);  // 0: 초깃값
  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div>
      {/*  dispatch안에 들어오는 인자값 : 액션객체(무언가를 인지시키는 역할) */}
      {/* type은 필수값(반드시 문자열의 형태로만), data값은 옵션 */}
        <button onClick={() => dispatch({type: "DECREASE" , data : 1})}>-</button>
        <button onClick={() => dispatch({type: "INIT"})}>0으로 초기화</button>
        <button onClick={() => dispatch({type: "INCREASE" , data : 1})}>+</button>
      </div>
    </div> 
  );
};

export default TestComp;
