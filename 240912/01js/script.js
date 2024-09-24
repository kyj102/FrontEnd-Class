// // 자바스크립트 기본문법 정리

// // 병합연산자
// const numA = 10;
// const numB = 20;
// const numC = undefined;

// // 앞에있는 좌항의 존재여부를 체크
// // 존재하면 그 값을 출력해줌
// // 좌항의 값이 존재하지 않으면 우항의 값을 출력해줌
// console.log(numC ?? numB)

// // ==========================

// // 삼항조건연산자
// const strA = "안녕하세요!";

// typeof strA === "string" 
// ? console.log("문자자료형") 
// : console.log("문자자료형 아님");

// // ==========================

// // switch문
// const fruit = "apple";

// switch(fruit) {
//   case "apple": 
//   console.log("사과");
//   break;
//   case "banana": 
//   console.log("바나나");
//   break;
//   default:
//     console.log("찾는 과일 없음!");
// }

// // ==========================

// // object생성 및 온점, 대괄호표기법
// let objA = {};
// console.log(typeof objA);
// objA.numA = 1;
// objA["numB"] = 2;
// console.log(objA);

// let objB = new Object();
// console.log(objB);

// console.log(objA.numA)


// const person = {
//   name: "David",
//   age: 20,
//   location: "Seoul",
// };

// // 객체값을 반복실행하고자 할 때
// // 객체안에있는 키값을 배열로 반환
// const keyArrs = Object.keys(person);
// console.log(keyArrs)

// keyArrs.forEach((item) => {
//   let value = person[item];
//   console.log(item, value)
// });


// const testO = {
//   name: "David",
//   age: 20,
//   skill: "JS",
// };

// // 구조분해할당
// const {name, age, skill} = testO;

// console.log(name, age, skill);

// // ==========================

// // 단락회로평가
// const calcA = () => {
//   console.log("A");
//   return false;
// };

// const calcB = () => {
//   console.log("B");
//   return true;
// };

// console.log(calcA() && calcB());
// // > 좌항값이 true면 좌항값만 반환하고 끝냄
// console.log(calcA() || calcB());
// // > 좌항값이 true가 아니어도 우항값이 true라면 그 값을 반환

// // ==========================

// // 전개연산자
// const arrA = [1, 2, 3];
// const arrB = [4, 5, 6];

// const arrC = [arrA, arrB];
// const arrE = [...arrA, ...arrB];
// const arrD = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// console.log(arrC);
// console.log(arrE);


// const objA = {
//   a: 1,
//   b: 2,
// };

// const objB = {c: 3};

// const objC = {
//   ...objA, 
// };

// console.log(objC);

// 배열 메서드 특집
let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육");
// // 값을 추가하고, 추가되어진 새로운 배열의 총 길이를 반환
// console.log(food, newLength)

// // 제거하고자 하는 아이템이 무엇인지 반환
// const removedItem = food.pop();
// console.log(removedItem)
// console.log(food)

// const newLength = food.unshift("갈비찜");
// console.log(food, newLength)

// const removedItem = food.shift();
// console.log(food, removedItem)

// const sliced = food.slice(0, 2);
// console.log(sliced)

// const sliced = food.slice(1);
// console.log(sliced);


// const arrA = [1, 2];
// const arrB = [3, 4];

// const arrC = arrA.concat(arrB);

// console.log(arrC);

// console.log(food.indexOf("치킨"));

// console.log(food.includes("마라샹궈"));

// const arr = [
//   {name: "david"},
//   {name : "martin"},
//   {name : "romeo"},
//   {name : "juliet"},
// ];

// const element = arr.find((item) => item.name === "romeo");
// console.log(element)

const arr = [
  {name: "슛돌이", hobby: "축구"},
  {name: "통키", hobby: "피구"},
  {name: "강속구", hobby: "야구"},
  {name: "태백산", hobby: "피구"},
];

// const filteredArr = arr.filter((item) => item.hobby === "피구");

// console.log(filteredArr);
// console.log(arr);

// const newArr = arr.map((item) => item.name);
// console.log(newArr)
// console.log(arr)

// const arr1 = [10, 5, 3];
// arr1.sort(a - b);
// console.log(arr1)

// const compare = (a, b) => {
//   if(a > b) return 1;
//   else if (a < b) return -1;
//   else return 0;
// };

// arr1.sort(compare);

// console.log(arr1)

// // ""안에 있는 요소들을 찾아오는 대신, -로 구분시켜준다.
// console.log(food.join("-"));

// const arr3 = [1, 2, 3, 4, 5];
// const result = arr3.reduce((acc, item) => acc + item, 0)
// console.log(result)

// let num1 = 10;
// let num2 = 5;
// let result = 0;

// result = num1++ + --num2;
// console.log(`num1= ${num1}, num2=${num2}, result=${result}`);

// result = --num1 - num2++;
// console.log(`num1= ${num1}, num2=${num2}, result=${result}`);
