// // 일반함수
// const displayHello = () => {
//   console.log("Hello!");
// }

// displayHello();



// const displayHello = async () => {
//   console.log("Hello!");
// }

// console.log(displayHello());



// const whatsYourFavorite = () => {
//   const fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// };

// const displaySubject = (subject) => {
//   return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
// }

// whatsYourFavorite().then(displaySubject).then(console.log);



const whatsYourFavorite = async () => {
  const fav = "Javascript";
  return fav;  // 프로미스 형태값 반환
};

const displaySubject = async (subject) => {
  return `Hello, ${subject}`;
};   // 프로미스 형태값 반환



// 프로미스의 형태값을 반환하지 않고 직접적인 프로미스 객체의 결과값을 반환하고 싶을때
const init = async () => {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);  
};

init();