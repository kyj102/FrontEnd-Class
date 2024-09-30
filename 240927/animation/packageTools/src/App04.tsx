import { useEffect } from "react";
import {motion, useMotionValue, useTransform, useScroll} from "framer-motion"
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
  height: 200vh;
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

const boxVariants = {};

const App04 = () => {
  // x라는 변수의 상태값이 변경되면 motionValue값 생성, 그 값을 useMotionValue로 찾아온다.
  // x의 값이 변경될때, 콜백함수로 특정이벤트를 실행한다. (의존성배열)
  const x = useMotionValue(0);
  // 현재 스크롤 y지표값, 현재 스크롤이 얼마나 되었는지 보여주는 정보값
  const {scrollY, scrollYProgress} = useScroll();
  useEffect(() => {
    scrollY.on("change", () => {
      console.log(scrollY.get(), scrollYProgress.get())
    })
  }, [scrollY, scrollYProgress]);
  // const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(x, [-800, 0, 800], [
    "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
    "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
    "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
  ]
);

  // 값을 찾아올땐 get, 값을 세팅할땐 set함수를 사용한다.
  // x값이 변경되면 transformer에 대한 값이 어떻게 변경되었는지 확인하기 위해 get함수를 사용한다.
  const scale = useTransform(scrollYProgress, [0,1], [1,5]);
  useEffect(() => {
    scale.on("change", () => console.log(scale.get()))
  }, [x]);

  return (
    <>
      <GlobalStyle/>
      <Wrapper style={{background: gradient}}>
          <Box 
          // Box라는 컴포넌트의 x좌표값을 x변수로 제어
          style={{x, scale: scrollYProgress, rotateZ}}
          drag="x"
          dragSnapToOrigin
          />
      </Wrapper>
    </>
  )
}

export default App04
