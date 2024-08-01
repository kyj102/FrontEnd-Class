//  html에서 defer를 쓰지 않았을 시 DOMContentLoaded를 사용해서 연동시킨다.
// window.addEventListener("DOMContentLoaded", () => {
// });

// const num01 = 1;

// 변수명 선언 시, 유의사항
// 변수명으로는 예약어 사용 불가 ex)document, queryselector, window, location
// $, _, 영문자 => 이 세개만 변수명 첫단어에 사용 가능하다.
// 단, 변수명 중간 혹은 끝에는 숫자 가능하다. (처음에만 X)
// 변수명은 반드시 대소문자를 가린다.

// const boolean = true;
// console.log(typeof boolean);

// const test01 = null;
// const test02 = undefined;
// undefined = 값이 정의되지 않았다. 라는 값이 정의가 됨 (언제라도 값이 들어올 수 있는 것)
// null = 유효하지 않은 값 (값 X, 앞으로도 값이 들어올 수 없는 것)

const name = "현빈";

const classroom = 201;

// console.log(name + "님" + classroom + "호 강의실로 오세요!");
// 템플릿 리터럴 문법 ${} => 변수라는 것을 알려주는 것. 처음과 끝에 백틱 ` 사용
// console.log(`${name}님 ${classroom}"호 강의실로 오세요!`);

const jsBook = {
  // 속성 : property
  // key : value
  title: "지옥에서 온 깃허브",
  pages: 330,
};

// 온점표기법
const jsBookTitle = jsBook.title;
console.log(jsBookTitle)

// 대괄호표기법
const jsBookPages = jsBook["pages"];
console.log(jsBookPages)


// 변수 안에 담긴 객체의 속성을 바꿀 수도 있다.
jsBook.title = "천국에서 온 깃허브";
console.log(typeof jsBook)

// 배열
const arr = ["red", "green", "blue"];
console.log(arr[2]); //index값 확인하기//
console.log(arr.length); //전체 index갯수 확인하기//

// 심볼
// 심볼을 통해 생성된 값은 반드시 대괄호의 형태를 띄고 있어야 한다.
let test01 = Symbol();
let test02 = Symbol();
console.log(test01 === test02);

let id = Symbol("userId");

const member = {
  name : "David",
  [id]: 12345,
};

console.log(member);

// 함수
const fncTest = () => {
console.log("click");
};

let a = 10;
let b = a;
console.log(a, b);

// 객체
let obj1 = {
  c: 10,
  d: "ddd",
};

let obj2 = obj1;

console.log(obj1, obj2);

// 재할당
b = 15;
obj2.c= 20;

// 원본값만 바뀌고 복제값은 그대로이고,
// 원본값과 복제값이 모두 바뀌는 경우도 존재함
console.log(a, b);
console.log(obj1, obj2);

const fruits = ["apple", "banana", "cherry"];

// 원본데이터값을 유지시키고 새로운 배열을 만들어서 값을 부여하기 위한 속성
// 전개연산자
const favorite = [...fruits];

favorite[1] = "grape";

console.log(fruits);

const one = "20";
const two= 10;

const sum = one + two;

console.log(parseFloat("36.4"));

const num = 10;

console.log(typeof num.toString());
console.log(typeof String(num));

console.log(Boolean(0));

const json = "test.json";

if(json) {

}

const number = prompt("자연수를 입력해주세요!")
console.log(number);
