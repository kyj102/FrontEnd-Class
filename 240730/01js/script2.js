// 사용자의 몸무게가 적정 체중인가?를 확인하고 싶다.
// 적정체중 = (본인의 키 - 100) * 0.9
// 오차범위 : 5

const name = prompt("이름을 말씀해주세요!", "ex.홍길동");
const height = parseFloat(prompt("키가 어떻게 되시나요?", "ex.182.4"));
const weight = parseFloat(prompt("몸무게를 말씀해주세요!", "ex.54.7"));

// 정상체중을 정의
const normalWeight = (height - 100)*0.9;

// 정상체중인지 아닌지 판단
// && => 앞의 항도 참이어야 하고, 뒤의 항도 참이어야 하는 앤드연산자
// 왼쪽 항 : 정상체중에서 -5에 부합하면 정상
// 오른쪽 항 : 정상체중에서 +5에 부합해도 정상
let result = weight >= normalWeight - 5 && weight <= normalWeight + 5;

// 조건식을 굉장히 쉽고 간편하게 사용할 수 있는 3항조건연산자
// 세가지 항을 가지고 조건식을 따진다.
// : > 두 개의 항 중 하나라도 false가 나왔을때
// result 결과값에 재할당
result = result ? "적정체중입니다!" : "적정체중이 아닙니다!";

// 최종적으로 판단하기
alert(`${name}님은 ${result}`);