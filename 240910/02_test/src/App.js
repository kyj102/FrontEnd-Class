import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.h2`
// 속성정의
font-size: 24px;
font-weight: bold;
text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
    <MainTitleText>미니블로그</MainTitleText>
    <Routes>
      {/* element = a태그의 href느낌 */}
      <Route path="/" element={<MainPage />} />
      <Route path="/post-write" element={<PostWritePage />} />
      {/* /post/:postId : 가변값으로 두겠다는 뜻 */}
      <Route path="/post/:postId" element={<PostViewPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;