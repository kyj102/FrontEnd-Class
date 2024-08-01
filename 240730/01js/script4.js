// let x = 10;
// let y = 4;

// x-- ;

// console.log(--x);

// y++ ;

// console.log(y);

// let result = x + y;
// console.log(result);

// result = x - y;
// console.log(result);

// result = x * y;
// console.log(result);

// result = x / y;
// console.log(result);

// result = x % y;
// console.log(result); 


// 복합대입연산자 || 할당연산자
// y = y + x;
// y += x;

// y = y / x;
// y / x;

// let str = "<table border='1'>";
// // 문자열과 변수는 자료의 형태가 다르기 떄문에 +, 결합연산자를 사용
// str += "<tr>";
// str += "<td>1</td><td>2</td><td>3</td><td>4</td>"
// str += "</tr>";
// str += "</table>";
// 위의 두 개는 같은개념

// console.log(2 != "2")

// let varTest = 2;

// varTest = "hi";

// if(조건식 공간 => 반드시 true가 되어야 실행가능) {
//   (실행문 공간)
// }

// const x = 10;

// if (x > 5) {
//   console.log(`${x}은 5보다 큽니다!`);
// };

// if (x < 20) {
//   console.log(`${x}은 20보다 작습니다!`);
// };

// if(조건식) {
//  //  조건식이 true
// } else {
//   // 조건식이 false
// }

const userInput = prompt("이름을 입력하세요!");


// 로그인페이지 - 조건문 활용
if(userInput === null) {
  // 취소버튼을 누르면 null 값을 반환한다.
alert("취소했습니다!")
} else {
alert(`${userInput}님 환영합니다!`)
}

const score = Number(prompt("자바스크립트 시험점수!"));

// if조건문 시작할땐 예외조항처리
// 중첩if문
if(score !== null) {
  if(score >= 90) alert("A학점");
  else if(score >= 80) alert("B학점");
  else alert("C학점");
  }

const num1 = 10;
const num2 = 20;


// 전역변수임을 선언
// 치트키이긴 하나 남발해서 사용하면 X
let small;

// if(num1 < num2) {
//   small = num1;
// } else {
//   small = num2;
// }

// console.log(small);

// 삼항조건연산자
small = num1 > num2 ? num1 : num2;