import { useState } from "react";
import {
  motion,
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

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 50vw;
  & > div:first-child, 
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  /* width: 400px; */
  height: 400px;
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxArray = ["1", "2", "3", "4"];

const App09 = () => {
  // const [clicked, setClicked] = useState(false);
  const [id, setId] = useState<null | string>(null);
  // const toggle = () => {
  //   setClicked((prev) => !prev);
  // };
  
  return (
    <>
      <GlobalStyle/>
      {/* Wrapper가 클릭되었는지의 여부에 따라 토글함수가 실행 */}
      <Wrapper>
        <Grid>
          {boxArray.map((i) => (
            // 특정박스 선택했을때 아이디값을 찾아오기 위해 setId로 아이디값 호출
            <Box onClick={() => setId(i)} key={i} layoutId={i} />
          ))}
        </Grid>
        <AnimatePresence>
          {id ? 
          (<Overlay 
          onClick={() => setId(null)} // 바깥부분 클릭했을시 모달창 사라짐
          initial={{opacity: 0}} 
          animate={{opacity: 1}} 
          exit={{ opacity: 0 }}>
            <Box 
            layoutId={id}
            style={{width: 400, height: 200}} />
          </Overlay>) : null}
          </AnimatePresence>
      </Wrapper>
    </>
  );
};

export default App09