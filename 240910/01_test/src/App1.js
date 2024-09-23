import './App.css';
import { useState } from 'react';

function App1() {
  const [count, setCount] = useState(0);

  const plus = () => {
    // setCount(count + 1);
    // setCount(count + 2);
    // setCount(count + 3);     // 비동기 작동 > 동시출발하기때문에 위의함수는 무시 > 결과값 3출력
    setCount((count) => count + 1);
    setCount((count) => count + 2);
    setCount((count) => count + 3);   // 함수의 호출타이밍을 제어하는 콜백을 사용해서 결과값 6출력
    console.log(count)
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default App1;