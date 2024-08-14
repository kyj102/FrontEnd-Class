// 변수 num1을 생성해서 숫자 10을 넣고 변수 num2를 생성해서 7을 넣은 후, 두 변수로 연산(더하기 빼기 곱하기 나누기 나머지) 한 결과를 캡쳐해주세요

let num1 = 10;
let num2 = 7;

const plus = num1 + num2;
const minus = num1 - num2;
const s = num1 * num2;
const n = (num1 / num2).toFixed(2);
const n1 = num1 % num2;

console.log(plus, minus, s, n, n1);