// 표현식문 vs 실행문

// fetch함수를 통해 json데이터를 가져올때 오류 해결법
// 1) fetch() 데이터를 가져오는 함수 내부에서 이벤트를 부여한다.
// 2) Promise() // async(동시다발적으로 무언가를 처리해주는 것) & await(앞쪽의 데이터처리가 끝날동안 대기시켜주는) => 비동기방식으로 외부에서 데이터를 끌어온다.

let hi = "hello";

for(let ch of hi) {
  console.log(ch);
}

let chArray = [...hi];
console.log(chArray);

let [ch1, ch2, ch3, ch4, ch5] = hi;
console.log(ch1, ch2, ch3, ch4, ch5);

const arr = [1, 2, 3, 4, 5];
console.log(arr);

// 이터레이터 함수의 기원
let it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());  //{value: undefined, done: true}
 // done : 해당값을 찾아오는 타이밍

// 이터러블한 객체가 되려면 반드시 이터레이터 객체의 속성을 가지고 있어야 한다.
// 이터레이터 객체 속성은 반드시 next() 메서드 함수를 갖는다.
// next() > 반복문으로 무언가를 실행시키고자 할 때 실행되는 메서드 함수


// Generator 함수
function* fnc() {
  yield 1;
  yield 2;
  yield 3;
}

const g1 = fnc();
console.log(g1);

// console.log(g1.next());   // {value: 1, done: false}

for(let i of g1) {
  console.log(i);
}

// for문을 사용할 수 있다 => 이터러블한 객체