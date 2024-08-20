// let bag = new Map();
// bag.set("color", "red");
// console.log(bag);

// 인스턴스객체가 생성됨과 동시에 안에 들어가 있는 프로퍼티값 생성
let myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

console.log(myCup)  // Map(3) {'color' => 'white', 'material' => 'ceramic', 'capacity' => '300ml'}

// 프로퍼티 값을 추가하고 싶을 때
// myCup.set("type", "mini");
// myCup.set("purpose", "daily");


// 메서드 체이닝
// myCup객체를 두번쓰지 않고도 .온점 으로 끌고와서 연결할 수 있다.
myCup.set("type", "mini").set("purpose", "daily");
console.log(myCup)  // Map(5) {'color' => 'white', 'material' => 'ceramic', 'capacity' => '300ml', 'type' => 'mini', 'purpose' => 'daily'}

console.log(myCup.get("color"));
console.log(myCup.size);
console.log(myCup.has("mini"));

console.log(myCup.delete("type"));
// console.log(myCup.clear());

console.log(myCup.keys());
console.log(myCup.values());
console.log(myCup.entries());

for(let key of myCup.keys()) {
  console.log(key);
}
for(let key of myCup.values()) {
  console.log(key);
}
for(let key of myCup.entries()) {
  console.log(key);
}