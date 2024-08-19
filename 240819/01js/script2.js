// 1. 매개변수 기본값
// 사용자가 어떤 값을 전달하지 못했을 때, 매개변수에 기본값을 할당해서 undefined오류가 나지 않을 수 있도록 하는 것

const hello = (name, message = "안녕하세요") => {
  console.log(`${name}님, ${message}!`)
}

hello("원빈", "반갑습니다");
hello("원빈");

// 2. 전개연산자
// 1) 함수의 매개변수 - 딱 받은 매개변수의 갯수만큼만 값을 출력해주는 것
const addNum = (num01, num02) => {
  const result = num01 + num02;
  return result;
};

console.log(addNum(1, 2, 3, 4, 5));   // 결과값: 3

// =======================================================

// 2) 이터러블 객체(무언가를 반복실행시켜줄 수 있는 속성)
// 2-1) 인자값이 아무리 늘어나도 이터러블 객체로 재정의해서 출력값이 유동적으로 변한다.
// 2-2) 재활용이 가능한 코드
const addNum2 = (...numbers) => {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(addNum2(1, 2, 3, 4, 5));   // 결과값 : 15

// =======================================================

// 3. 참조타입 변수값의 독립화
// const fruits = ["apple", "banana", "cherry"];
// const favorite = fruits;

// favorite[1] = "grape";   // 원본타입값도 변경됨

// console.log(fruits, favorite);
// (3) ['apple', 'grape', 'cherry']
// (3) ['apple', 'grape', 'cherry']

// =======================================================

const fruits = ["apple", "banana", "cherry"];
const favorite = [...fruits];  // 1. 전개연산자 구문 사용

favorite[1] = "grape";   // 2. 원본형태는 그대로 둔 상태에서 아예 새로운 형태의 데이터값을 만든다.

console.log(fruits, favorite);
// (3) ['apple', 'banana', 'cherry']
// (3) ['apple', 'grape', 'cherry']

// =======================================================

// 4) 서로다른 2개의 배열을 하나로 병합시키는 역할
const animal = ["bird", "cat"];
const fruits01 = ["melon", "pineapple"];

console.log(animal.concat(fruits01));
// 중첩배열 > 하나의 배열로 병합시켜야 할 때 전개연산자 구문 사용
console.log([...animal, ...fruits01]);

// =======================================================

// 4. 구조분해할당, 전개연산자 구문
// 나머지를 모아서 한번에 값을 할당해주고 싶을때
let [teacher, ...students] = ["Kim", "Lee", "Park", "Choi"];
console.log(teacher, students)

// =======================================================

// 5. 객체 key 접근방법
// 대괄호표기법
const book = {
  title: "Javascript",
  pages: 500,
};

book.published = "2024-08-19";

console.log(book)

console.log(book["title"]);

// =======================================================

// 객체 key 생성방법
const fn = () => {
  return "result";
};

const add = (a, b) => {
  return a + b;
}

// 함수에 대한 결과값을 문자열로 출력
// 인자값을 통해 함수의 키값을 만들어낸다.
const obj = {
  [fn()]: "함수 키",
  [`${add(10, 20)}`]: "계산 키",
};

console.log(obj);   // {30: '계산 키', result: '함수 키'}

// =======================================================

// 객체 축약법
// 객체 선언시, key네이밍 === value값으로 할당하고자하는 매개변수 동일, 한번만 선언해도 무리없이 출력된다.

let user = {
  name: "슛돌이",
};

user.age = 25;   // 온점표기법

console.log(user)

const makeUser = (name, age) => {
return {
  name: name,
  age: age,
  };
};

const user1 = makeUser("영심이", 20);

console.log(user1);

// =======================================================

// 객체에 심볼키 사용방법
let id1 = Symbol();
let id2 = Symbol();

console.log(id1 === id2)  // false

const id = Symbol("id");
const tel = Symbol("telephone number");

const member = {
  name: "David",
  age: 20,
  // 심볼키를 가져올땐 반드시 대괄호로 묶어서 가져와야 한다.
  [id]: 1234,
  [tel]: () => {
    prompt("당신의 전화번호는?");
  },
};

console.log(member);

for(let item in member) {
  console.log(`${item}`);
}

// Symbol = 객체안에 있는 key값을 은폐하고 싶을 때 사용가능
console.log(member[id]);
// console.log(member[tel]());

// =======================================================

// 6. 구조분해할당
// JS 컴포넌트화 => 함수형 컴포넌트

const fruits02 = ["사과", "복숭아"];

// const apple = fruits02[0];
// const peach = fruits02[1];

// 값을 분해하고자 하는 원본데이터의 자료형태를 따라감
const [apple, peach] = fruits02;   // fruits02라는 배열을 할당한다. 

console.log(apple, peach);


const member03 = {
  name: "David",
  age: 20,
};

const {name: userName, age} = member03;
console.log(userName,age);

// =======================================================

// 7. 배열 메서드
// map // filter // reduce
// map : 배열안에 있는 아이템(*요소)들에게 특정 함수 안에 있는 기능을 동일하게 실행 및 적용 => 새로운 배열로 재생성