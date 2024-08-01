// 시용자로부터 세 개의 값을 받으세요!
// 교통비, 식대, 음료비
// 위 3개의 값이 10,000원을 초과한다면, "예산관리 잘해주세요!"
// 위 3개의 값이 10,000원 이하라면 "예산관리 잘하셨어요!"

// const name = prompt("이름을 말씀해주세요!", "ex.홍길동");
// const car = prompt("교통비는 얼마인가요?");
// const food = prompt("식대는 얼마인가요?");
// const coffee = prompt("음료비는 얼마인가요?");

// const normalCost = 10000;

// const cost = "car", + "food", + "coffee"

// let result = cost > normalCost && cost <= normalCost;

// result = result ? "예산관리 잘해주세요!" : "예산관리 잘하셨어요!";

// alert(`${name}님은 ${result}`);

// const traffic = Number(prompt("교통비 입력!"));
// const food = Number(prompt("식대 입력!"));
// const coffee = Number(prompt("음료비 입력!"));

// 반복문, 배열값 활용
let arr = [];
for (let i = 0; i < 3; i++) {
  const userNum = Number(prompt("교통비, 식대, 음료비 순으로 입력!"));
  arr.push(userNum);
}

// 구조분해할당
const [traffic, food, drink] = arr;
const sum = traffic + food + drink;

// 조건문 선언시 예외조항처리를 먼저 선언한다
// isNaN = 인자값이 숫자가 아니면 참, 숫자면 거짓
if(isNaN(sum) || sum === 0) {
alert("잘못 입력했습니다!");
} else if(sum <= 10000) {
  alert("예산관리 잘하셨습니다!");
} else {
  alert("예산관리 잘하세요!");
}