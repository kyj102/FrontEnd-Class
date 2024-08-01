// 사용자에게 숫자 한 개를 받습니다.
// 해당 숫자가 짝수인지 홀수인지 확인
// 짝수라면 알림창에 "짝수" 출력
// 홀수라면 알림창에 "홀수" 출력
// 단, 사용자가 취소버튼을 클릭할 수 있다는 것을 감안하여 예외조항처리를 반드시 해주세요.

// 짝수는 반드시 2로 나누어 떨어진다.
// 홀수는 2로 나눴을때 반드시 나머지가 존재한다.

// 반드시 삼항조건연산자로 하세요

// const num = Number(prompt("숫자를 입력하세요"));

// if(num !== null)  {
//   if(num / 2) alert("짝수");
//   else if(num % 2) alert("홀수");
// }


let userNumber = prompt("숫자를 입력하세요!");

// 예외조항처리
if(userNumber !== null) {
  // 정수변환
  userNumber = parseInt(userNumber);
  // 삼항조건연산자
  userNumber % 2  === 0
  ? alert(`${userNumber} : 짝수`)
  : alert(`${userNumber} : 홀수`);
}
