import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue, 
  useTransform, 
  useScroll, 
  AnimatePresence
} from "framer-motion"
import { createGlobalStyle, styled } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Source Sans 3", sans-serif;
    background: linear-gradient(135deg, #fff, pink);
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: lightpink;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
`;

const App08 = () => {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };
  return (
    <>
      <GlobalStyle/>
      <Wrapper onClick={toggleClicked}>
        {/* 다크모드 라이트모드 버튼 방향전환
        <Box style={{
          justifyContent: clicked ? "center" : "flex-start", 
          alignItems: clicked ? "center" : "flex-start"
          }}>
          <Circle/>
        </Box> */}
        {/* layoutId로 같은 아이디값을 부여해서 두개의 요소가 이 범위 내에서 같은 속성값으로 움직이도록 */}
        <Box>
          {clicked ? <Circle layoutId="circle" style={{borderRadius: 50}} /> : null}
        </Box>
        <Box>
        {!clicked ? <Circle layoutId="circle" style={{borderRadius: 0, scale: 2}} /> : null}
        </Box>
      </Wrapper>
    </>
  );
};

export default App08