// 기본 제공 타입
// number, string, boolean, object

// let num : number = 1;
let num = 1;
num = 10;

let str = "Hello";
str = "World";

let bol = true;

let obj = {
  name: "YEJI",
}


// 다양한 종류의 타입 가운데, 치트키 역할
// any는 모든타입 수용가능
let sample: any = 0;
sample = "H3llo";

// 엄격함의 끝판왕 타입
// undefined
let sample01: undefined = undefined;
sample01 = undefined;

// 배열타입
const numArr: number[] = [1,2,3];
const strArr: string[]  = ["YEJI", "WONBIN"];
const boolArr: Array<boolean> = [true, false];

// 유니온타입
const multiArr: (string | number | boolean)[] = [1, "hello", true];

// 중첩배열
const doubleArr: number[][] =
[
  [1,2,3],
  [4,5,6],
]

// 길이 & 타입이 고정된 배열 = Tuple타입
let tup1: [number, number] = [1,2];

const users: [string, number][] = [
  ["YEJI", 1],
  ["SUNGCHAN", 2],
  ["WONBIN", 3],
  ["EUNSEOK", 4],
]
