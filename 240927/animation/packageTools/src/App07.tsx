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
  flex-direction: column;
  gap: 20px;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 280px;
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const box = {
  initial: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3
    }
  },
  exits: (back:boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3
    }
  }),
}

const App07 = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const prevPlz = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  const nextPlz = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  return (
    <>
      <GlobalStyle/>
      <Wrapper>
        {/* 두 버튼을 연타했을때 크로스되지 못하도록 wait mode 설정(한 요소가 끝나야 다음 요소가 나오도록)
          자식요소의 back값을 animate에게도 줘서 boolean값의 변화를 인지하게끔 */}
      
        <AnimatePresence mode="wait" custom={back}>
          {boxArray.map((i) => ( 
            i === visible 
            ? <Box 
            custom={back}
            variants={box} 
            initial="initial"
            animate="visible"
            exit="exits"
            key={visible}
            >
              {visible}
            </Box>
            : null
          ))}
        </AnimatePresence>
        <Buttons>
          <Button onClick={prevPlz}>PREV</Button>
          <Button onClick={nextPlz}>NEXT</Button>
        </Buttons>
      </Wrapper>
    </>
  );
};

export default App07