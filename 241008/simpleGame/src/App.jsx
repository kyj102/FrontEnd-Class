import React, {useState} from 'react'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Box from './components/Box';

const GlobalStyles = createGlobalStyle`
  ${reset};

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const BoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  display: inline-block;
  width: 80px;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  background: #ff9dc4;
  color: #fff;
  cursor: pointer;
`;

const choice = {
  rock: {
    name: "rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors: {
    name: "scissors",
    img: "https://blog.kakaocdn.net/dn/czJAmq/btrUGroVxv2/oLJIepZaRevsA1r5Tm32hk/img.png",
  },
  paper: {
    name: "paper",
    img: "https://spaldingeducationstore.org/cdn/shop/products/paper-spalding-vertical-paper-5-8-inch-pa1_1000x.jpg?v=1683973391",
  },
}

const App = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]); // 내가 선택한 객체값
    let computerChoice = randomChoice(); // 컴퓨터가 선택한 랜덤객체값
    setComputerSelect(computerChoice);
    setResult(judgeMent(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgeMent = (user, computer) => {
    if(user.name === computer.name) {
      return "tie";
    } else if(user.name === "rock") {
      return computer.name === "scissors" ? "win" : "lose";
    } else if(user.name === "scissors") {
      return computer.name === "paper" ? "win" : "lose";
    } else if(user.name === "paper") {
      return computer.name === "rock" ? "win" : "lose";
    }
  };

  randomChoice();

  return (
    <>
    <GlobalStyles/>
      <Wrapper>
        <BoxGroup>
          <Box title={"You"} item={userSelect} result={result} />
          <Box title={"Computer"} item={computerSelect} result={result} />
        </BoxGroup>
        <ButtonGroup>
          <Button onClick={() => play("scissors")}>가위</Button>
          <Button onClick={() => play("rock")}>바위</Button>
          <Button onClick={() => play("paper")}>보</Button>
        </ButtonGroup>
      </Wrapper>
    </>
  )
}

export default App