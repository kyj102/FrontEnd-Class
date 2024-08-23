// Promise
// 콜백함수를 매개변수로 받는다
// 매개변수로 들어온 콜백함수의 인자값: 약속할 두개의 함수
// 정상적으로 처리가 되었을때 실행시킬 함수, 만약 에러가 발생됐을떄 실행시킬 함수

const likePizza = true;

// producing code = 제작코드 영역
const pizza = new Promise((resolve, reject) => {
  if(likePizza) resolve("피자를 주문합니다!");
  else reject("피자를 주문하지 않습니다!");
});

// consuming code = 실행코드 영역
pizza
.then((result) => console.log(result))
.catch ((err) => console.log(err))
.finally(() => console.log("완료"));