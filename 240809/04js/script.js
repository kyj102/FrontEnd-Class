const buttons = document.querySelectorAll("button");
const computerChoice = document.querySelector(".computerChoice");
const yourChoice = document.querySelector(".yourChoice");
const winner = document.querySelector(".result");

const result = ["가위", "바위", "보"];

let message = "";

const show = (user,computer,message) => {
  computerChoice.innerText = computer;
  yourChoice.innerText = user;
  winner.innerText = message;
};

const Game = (user, computer) => {
  if(user === computer) message = `무승부`;
  else {
    // + : 연결연산자
    switch(user + computer) {
      case `가위보` :
      case `바위가위` :
      case `보바위` :
        message = `나의 승리`;
        break;
      case `가위바위` :
      case `바위보` :
      case `보가위` :
        message = `컴퓨터의 승리`;
        break;
    }
  }

  show(user, computer, message);
};

const play = (e) => {
  const user = e.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  Game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});