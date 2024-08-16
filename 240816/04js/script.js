// // ES6 문법적용전
const str5 = "Hello, everyone";
// const arr5 = str5.split("");
const arr5 = [...str5];
const str6 = arr5.join("");

console.log(arr5);
console.log(str6);

const string = prompt("영문 소문자로 된 문자열을 입력하세요.");

// const firstCh = string[0].toUpperCase(); // 해당 인덱스 값의 첫번째 문자열을 대문자로
// const remainStr = string.slice(1) // 인자값을 하나만 쓰는 경우 : 해당 인덱스 끝까지
// const result = firstCh + remainStr;

const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
document.write(result);

// 배열
// 1. 생성자함수
let arr = new Array();

arr[0] = "first";
arr[1] = "second";

console.log(arr)

let obj = new Object();

// 2. 변수에 빈 배열 할당 및 선언

let season = [];

season[0] = "spring";
season[1] = "summer";
season[2] = "fall";
season[3] = "winter";

console.log(season);

// 3. 직접 배열을 선언 // 값을 할당
const pets = ["dog", "cat", "lion"];
console.log(pets)