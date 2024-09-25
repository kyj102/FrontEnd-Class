import './App.css';
import styled, {css} from 'styled-components';

const baseShadow = css`
  box-shadow: ${({color}) => `5px 8px 10px ${color || "red"}`};
`;

const font = ({color, size, family}) => `
  color: ${color || "red"};
  font-size: ${size || "1rem"};
  font-family: ${family || "serif"};
`;

// 반복적으로 사용되어지는 간단한 속성의 스타일요소는 변수로 미리 값을 만들어놓는다.
const Container = styled.div`
  font-size: 2rem;
  width: 50%;
  background: #ccc;
  margin: 0 auto;
  padding: 10px 20px;
  // 달러와 중괄호 형태로 가져온다.
  ${baseShadow}
  ${font({color: "white", size: "2rem"})}
`;

function App() {
  return (
    <div className="App">
      <Container color={'pink'}>styled Component</Container>
    </div>
  );
}

export default App;
