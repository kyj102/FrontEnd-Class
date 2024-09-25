import './App.css';
import styled from 'styled-components';

// 반복적으로 사용되어지는 간단한 속성의 스타일요소는 변수로 미리 값을 만들어놓는다.
const baseShadow = `box-shadow: 0 10px 6px #777`;

const Container = styled.div`
  font-size: 2rem;
  width: 50%;
  background: #ccc;
  margin: 0 auto;
  padding: 10px 20px;
  // 달러와 중괄호 형태로 가져온다.
  ${baseShadow}
`;

function App() {
  return (
    <div className="App">
      <Container>styled Component</Container>
    </div>
  );
}

export default App;
