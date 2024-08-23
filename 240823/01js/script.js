// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   console.log("B");
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();



// // 멀티스레드 => 비동기방식인것처럼
// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   setTimeout(() => console.log("B"), 2000);  //특정시간이후 실행(물리적시간지연)
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();           // A C(가 실행되고 2초 뒤) B


const displayA = () => {
  console.log("A");
};
const displayB = (callback) => {
  setTimeout(() => {
    callback();
    console.log("B");
  }, 2000);
};

const displayC = () => {
  console.log("C");
};

displayA();
displayB(displayC);  