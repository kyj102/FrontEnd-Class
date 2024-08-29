const canvas = document.querySelector("canvas");
const button = document.querySelector("button");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Cricle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = Math.floor(Math.random() * 4) + 1;
    this.dy = Math.floor(Math.random()* 4) + 1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  animate() {
    this.x += this.dx;
    this.y += this.dy;

    if(this.x + this.radius > canvas.width || this.x - this.radius < 0) this.dx = -this.dx;

    if(this.y + this.radius > canvas.height || this.y - this.radius < 0) this.dy = -this.dy;

    this.draw();
  }
}



const circleOne = new Cricle(100, 100, 50, "red");
console.log(circleOne)
// const circleTwo = new Cricle(100, 200, 20, "blue");
// circleOne.draw();
// circleTwo.draw();

const objs = [];

for(let i = 0; i < 20; i++) {
  // 반지름의 최솟값(10), 최댓값(50) 정의
  const radius = Math.floor(Math.random() * 50) + 10;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const x = Math.random() * (canvas.width - radius * 2) + radius;  
  // 무조건 지름만큼의 간격을 확보하기 때문에 원이 자연스럽게 겹쳐지면서 공간을 자연스럽게 사용한다.
  const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)
  })`;
  objs.push(new Cricle(x, y, radius, color));
}

console.log(objs);

// objs.forEach((obj, index) => {
//   objs[index].draw();
// });

// 리퀘스트프레임(재귀함수)의 대상
// 애니메이트 함수가 실행될 요소
const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < objs.length; i++) {
    let obj = objs[i];
    obj.animate();
  }
  requestAnimationFrame(update);
};

update();