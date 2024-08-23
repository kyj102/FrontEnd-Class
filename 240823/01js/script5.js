// // 콜백함수
// const step1 = (callback) => {
//   setTimeout(() => {
//     console.log("피자도우 준비");
//     callback();                    // 3. step2를 인자값으로 받고 콜백실행
//   }, 2000);
// };

// const step2 = (callback) => {
//   setTimeout(() => {
//     console.log("토핑완료");        // 4. step3를 인자값으로 받고 콜백실행
//     callback();         
//   }, 2000);
// };

// const step3 = (callback) => {
//   setTimeout(() => {
//     console.log("굽기완료");
//     callback();
//   }, 2000);
// };

// console.log("피자를 주문합니다!");  // 1. 제일 먼저 출력

// step1(() => {                  // 2. 함수 호출
//   step2(() => {  
//     step3(() => {
//       console.log("피자가 준비되었습니다!");
//     });
//   });
// });

// 위 함수를 Promise구문으로 변경
const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve("피자를 주문합니다!");
  });
};

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("피자도우 준비");
    }, 3000);
  });
};  // step1이 종료되는 시점에서 step2에 resolve값 전달 

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("토핑완료");
      }, 3000);
  });
};

const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("굽기완료");
      }, 3000);
  });
};

// // 두번째 result: 피자도우 준비
// pizza()
// .then(result => step1(result))
// .then(result => step2(result))
// .then(result => step3(result))
// .then(result => console.log(result))
// .then(() => console.log("피자가 준비되었습니다!"));

// 두번째 result: 피자도우 준비
// promise구문의 소비코드 문법
pizza()
.then(step1)
.then(step2)
.then(step3)
.then(console.log)
.then(() => console.log("피자가 준비되었습니다!"));