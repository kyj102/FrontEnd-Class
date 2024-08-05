// function greeting() {
//   console.log("안녕하세요!");
// }

// const timer = setInterval(greeting, 2000);

// clearInterval(timer);

// let counter = 0;

// const timer = setInterval(() => {
//   console.log("안녕하세요!");
//   counter++;
//   if(counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);


// // 재귀함수 호출

// let num = 0;

// // 함수가 실행되면 num가 증가되도록
// const testFnc = () => {
// num++;
// document.write(num, "<br/>");
// if(num === 10) return;
// testFnc(); 
// }

// testFnc();

// // return => 문장의 종결로만 생각하면 X
// // return => 반환값
// // 함수가 어떤 연산작업을 한 후, 값을 반환한다는것은
// // 함수가 가지고 있는 고유한 기능이 끝났다는 것.
// // 따라서 return문에는 "보이지않는 무의 반환값"이 존재한다.

setTimeout(() => {
console.log("3초가 지났습니다.");
}, 3000);