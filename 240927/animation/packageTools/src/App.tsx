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
`;

const myVars = {
  start: {scale: 0},
  // 실제 애니메이션이 실행된 상태의 트랜지션은 독립화시킬 수 없기 때문에, 애니메이션이 실행되고 있는 상태에서 트랜지션의 속성을 중첩객체의 형태로 값을 넣어준다.
  end: {scale: 1, rotateZ: 360, transition: {type: "spring", delay: 0.5}},
}

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Wrapper>
        {/* <Box
        transition={{duration: 3}} 
        animate={{borderRadius: "100px"}}/> */}
        {/* <Box 
        // damping : 스프링을 억제하는 기능, 0으로 가면 갈수록 무중력
        // 값이 커질수록 중력이 커져 스프링을 멈추고자 하는 반대의 힘이 생김

        // mass : 스프링의 무게감 제어, 숫자가 커질수록 무게감이 커짐

        // delay : 애니메이션을 진행하고자 할 때, 특정시간만큼 지연 후 실행
        transition={{
          duration: 3, 
          type: "spring", 
          // damping: 4,
          mass: 10,
          delay: 0.5
        }}
        initial={{scale: 0}}
        animate={{scale: 1, rotateZ: 360}}
        /> */}
        <Box 
        variants={myVars} 
        initial="start" 
        animate="end" 
        
        />
      </Wrapper>
    </>
  )
}

export default App
