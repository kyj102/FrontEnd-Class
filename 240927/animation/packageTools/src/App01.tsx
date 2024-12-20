import {motion} from "framer-motion"
import { createGlobalStyle, styled } from "styled-components"
import reset from "styled-reset"

const GlobalStyle =createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Source Sans 3", sans-serif;
    background: linear-gradient(135deg, #e09, #d0e);
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const boxVariants = {
  // 초기값 설정
  start: {
    scale: 0.5,
    opacity: 0,
  },
  // 애니메이션이 실행된 이후 값 설정
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.5,
      delay: 0.5,
      staggerChildren: 0.2,
      delayChildren: 0.5,
    }
  }
};

// delay = 이 변수값을 받고있는 모든 요소들에 딜레이를 주는것
// staggerChidren : 자식요소들에게 순차적으로 요소가 적용되도록
const circleVariants = {
  start: {
    scale: 0,
    opacity: 0,
    y: 40,
  },
  end: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.8,
      duration: 0.5,
    }
  },
}

const Circle = styled(motion.div)`
  background: #fff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  place-self: center;
`;

const App01 = () => {
  return (
    <>
      <GlobalStyle/>
      <Wrapper>
        <Box 
        variants={boxVariants} 
        initial="start"
        animate="end"
        >
          <Circle variants={circleVariants}/>
          <Circle variants={circleVariants}/>
          <Circle variants={circleVariants}/>
          <Circle variants={circleVariants}/>
        </Box>
      </Wrapper>
    </>
  )
}

export default App01
