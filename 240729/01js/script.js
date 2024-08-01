// tes1 > 변수선언
// mon > 변수할당
const test1 = "mon";

// 재선언 > const는 재선언 불가
const test2 = "tue";

// 재할당(불가)
test1 = "tue";

// 변하지 않는 고정값을 변수로 선언해야할 때
// > const 사용

// 스크롤을 내렸을 때, 내려진 값에 따라서 무언가를 변경해야 할 때
// > let 사용

// 할당 : 이미 선언되어진 변수를 let,const같은 선언문 없이 찾아만 오는 것
let test2 = "mon";
test2 = "tue";

// A조원
// 특정 카테고리 안에 있는 상품갯수 : 10개라고 선언
var category = 10;

// B조원
// 장바구니에 담긴 상품갯수 : 10개리고 선언
var category = 10;

// A, B가 var를 선언한 목적이 다름.
// 코드를 병합하는 과정에서 var는 재선언이 가능하기 때문에 웹브라우저는 어떤 선언문이 어떤 변수인지 판단하지 못한다.

// var의 유일한 장점: 호이스팅 기능
var x = 10;

var z = x + y;

var y = 20;

// NaN = Not a Number (자료의 형태 중 하나)

// DOM에서 변수를 찾아온다는것 = 이 변수를 다방면으로 쓸수있다는 것
const wrapper = document.querySelector("#wrapper")
document.querySelector("#wrapper").addEventListener("click" () => {
});

// 숫자 1을 할당
const num1 = 1;
const num2 = 2;

// 숫자형태를 할당받은 경우는 사칙연산이 가능하다.
const sum = num1 + num2;
console.log("num1 + num2");

// 문자형
// 따옴표로 감싸져 있으면 무조건 문자형으로 인식
const str1 = "1";

const num = 1000;
const str = "원";
const counter = "num + str";

console.log(typeof counter); > 1000원 (문자형)

const num1 = 1000;
const str1 = "2000";
const counter1 = num1 + str1
console.log(counter1); > 10002000
// 숫자형, 문자형이 만나면 문자가 우선이기 때문에 문자형으로 값이 할당된다.

prompt=("얼마를 원하세요?");