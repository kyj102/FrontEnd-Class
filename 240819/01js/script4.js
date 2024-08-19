// JS ES6 => Map & Set
// 배열의 장점 : 인덱스 // 갯수 // 넣고, 빼고가 자유롭다
// 객체의 장점 : 프로퍼티 형태 (*어떤 자료가 무슨 의미인지 알 수 있다)
// 배열 + 객체 => map
// 배열의 형태를 띄고있는 이터러블한 객체의 자료구조들의 공통적 약점
// => 중복되어지는 값을 제어하지 못한다.

// const bag = new Map();
// bag.set("color", "red")
// console.log(bag)

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"], 
  ["capacity", "300ml"]
]);

console.log(myCup);

// map안에 값을 추가하려면 반드시 set을 거쳐가야 한다
// * map,set함수에서의 set함수와 다른 속성이다.
myCup.set("type", "mini");
console.log(myCup);