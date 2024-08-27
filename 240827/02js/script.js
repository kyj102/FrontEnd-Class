const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.strokeStyle = "rgb(0, 0, 0)";

ctx.fillRect(10, 10, 200, 100)
// ctx.strokeRect(10, 20, 200, 100);

ctx.fillStyle = "rgb(0, 0, 200)";
ctx.fillRect(50, 50, 120, 100);
ctx.clearRect(70, 80, 80, 45);

// 1. 60분법: 인간에 편의에 의해 원을 360도 간주하고, 몇 도씩 나눌것인가?
// 2. 호도법 : 자연의 법칙에 의해 발견된 계산법
// 부채꼴 = 밑변(반지름) = 호의 둘레와 같다면, 무조건 해당 부채꼴의 내각은 57.296도 = 1래디언
// a) 3.14 = 180도 = 파이
// 3래디언 = 171.888
// b) 180 - 171.888 = 8.112 / 57.296 = 0.14158...
// > 3래디언이 돌고나서 살짝 부족한 값(a)을 1래디언으로 환산한 값(b) = 3.14

// 사각형을 만들고자 할 때 사용할 수 있는 메서드함수
// fillRect(x, y, width, height) : 사각형 요소의 색상을 채워줄 수 있도록 하는 함수
// strokeRect(x, y, width, height) : 사각형 아웃라인 선을 그려주도록 하는 함수 
// clearRect(x, y, width, height) : 사각형 형태의 특정요소만큼을 지우고자 할 때 사용하는 함수
// fillStyle = "색상" : 해당 도형의 색상을 채울 때 사용할 수 있는 속성
// strokeStyle = "색상" : 해당 도형의 외곽선의 색상을 지정하고자 할 때 사용하는 속성