let pets = ["dog", "cat", "mouse"];
pets[0] = "hamster"
console.log(pets);

// 배열 = 이터러블 객체
// 이터레이터 요소
// 반복문

// 배열을 선언하고 값을 할당하고자 할 떄
// 1) 배열을 담을 변수값은 복수형으로 써주는것이 좋다.(보통 반복문으로 값을 빼주기 때문이다.)
// 2) 블록변수에 대한 값은 0부터 카운팅한다.

const colors = ["red", "green", "blue", "white", "black"];

// for(let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

colors.forEach((color, index) => {
  console.log(`color[${index}] : ${color}`);
});

colors.forEach((color, index, array) => {
  console.log(`${array}[${index}] : ${color}`);
});

// =====================================================

const vegitable = ["양상추", "토마토", "피클"];
const cheese = ["모짜렐라", "슈레드"];
const meat = ["불고기"];

// ES6 이전
// concat = 서로 다른 두 배열을 합쳐준다.
const meatBurger = vegitable.concat(meat, "빵");
console.log(meatBurger);

// ES6 이후
// 전개연산자 문법
const cheeseBurger = [...vegitable, ...cheese, "빵"];
console.log(cheeseBurger);

// =====================================================

let numbers = [6, 9, 3, 21, 18];
console.log(numbers);
console.log(numbers.reverse());


let week = ["sun", "mon", "tue"];
let values = [5, 20, 3, 11, 4, 15];

// 1. 배열선언할 때, 변수명을 복수로
// 2. 일반 for문 선언 시, 블록변수 0으로 시작
// 3. 배열을 담는 변수선언 시, const VS let
// => 배열의 특정 method 함수 > 새로운 배열을 생성해주는 함수들이 항상 존재하기 때문에
// => 빈배열 생성 => 값을 추가하는 행위

console.log(week);
console.log(week.sort()); // sort : 오름차순 기본값

console.log(values);
console.log(values.sort());


// sort => 개발자가 정의하고자 하는 함수를 반드시 콜백함수로 입력해야 한다.

values.sort((a,b) => {
  if(a > b) return 1;
  if(a < b) return -1;
  if(a === 0) return 0;
});

console.log(values);

// 위 구문의 축약형
values.sort((a, b) => {
  return a - b
});  // 오름차순


values.sort((a, b) => {
  return b - a
}); // 내림차순, 앞에 음수값이 올 수 없기 때문에 -b+a가 아닌 b - a

console.log(values);

// =====================================================

let animals = ["lion", "bear", "bird"];
console.log(animals);

// pop = 배열의 가장 막냇값을 제거하고 싶을 때
// => 사용빈도 : 상대적으로 높지 않음
animals.pop();
console.log(animals);

// push = 배열의 값을 뒤에서부터 추가하고 싶을 때
// => 사용빈도 : 개많음
animals.push("tiger");
console.log(animals);

let fruits = ["apple", "pear", "banana"];

// shift = 배열의 값을 앞에서부터 제거하고 싶을 때
fruits.shift();
console.log(fruits);

// unshift = 배열의 값을 앞에서부터 추가하고 싶을 때
fruits.unshift("cherry");
console.log(fruits);

// =====================================================

let subjects = ["html", "css", "javascript", "react", "typescript"];

// console.log(subjects.splice(2));

let weekly = ["sun", "mon", "tue", "wed", "thu", "fir", "sat"];
console.log(weekly.splice(1, 5, "holiday"));
// splice : 원본데이터값을 변경시킨다.
// 전개연산자로 원본데이터를 복사해서 복사한 데이터값을 변경한다.
// 첫번째 인자값 - 인덱스, 두번째 인자값 - 갯수를 의미
// 세번째 인자값- 1인덱스와 2인덱스 사이의 인자값을 없애고 그 사이에 추가되는 값(holiday)

console.log(weekly)  // ['sun', 'holiday', 'sat']

// =====================================================

let colorss = ["red", "green", "blue", "white", "black"];
console.log(colorss.slice(2));  // 'blue', 'white', 'black'
console.log(colorss.slice(1,4));  // 'green', 'blue', 'white'