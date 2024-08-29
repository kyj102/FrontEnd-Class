const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

// createLinearGradient( ) : 선형 그라디언트를 만드는 함수
// > 그라디언트를 적용하는 데에 있어서 시작점 좌표 x,y  끝나는 지점의 x, y좌표
// createRadialGradient( ) : 원형 그라디언트를 만드는 함수
// addColorSto( 비율, 색상 ) : 그라디언트를 생성할 때 사용할 수 있는 중단점 생성함수

// const linGrad = ctx.createLinearGradient(0, 0, 0, 200);
// linGrad.addColorStop(0, "#000");
// linGrad.addColorStop(0.6, "#fff");
// linGrad.addColorStop(1, "eee");

// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 100, 200);

ctx.shadowColor = "#ccc";
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;

const radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "whtie");
radGrad.addColorStop(0.4, "yellow");
radGrad.addColorStop(1, "orange");

ctx.beginPath();
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fillStyle = radGrad;
ctx.fill();

// const img = new Image();

// img.onload= function() {
//   const pattern = ctx.createPattern(img, "repeat");
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0, 0, 20, 200);
// }

// img.src = "./pattern.jpg";