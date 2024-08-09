// // Math수학객체

// let num = 2.1234;
// let num01 = 2.8765;

// let maxNum = Math.max(10, 5, 8, 30);
// let minNum = Math.min(10, 5, 8, 30);

// let roundNum = Math.round(num);
// let floorNum = Math.floor(num01);
// let ceilNum = Math.ceil(num);
// let rndNum = Math.random();
// let piNum = Math.PI;

// document.write(maxNum, "</br>");
// document.write(minNum, "</br>");
// document.write(roundNum, "</br>");
// document.write(floorNum, "</br>");
// document.write(ceilNum, "</br>");
// document.write(rndNum, "</br>");
// document.write(piNum, "</br>");

const character = document.querySelector(".character");

let degree = 0;

const loop = () => {
  // ★ 60분법을 호도법을 통해 radian값으로 변환
  const rotation = (degree * Math.PI) / 180;

  const targetX = window.innerWidth / 2 - 50 + 100 * Math.cos(rotation);
  const targetY = window.innerHeight / 2 - 50 + 100 * Math.sin(rotation);

  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;

  degree += 1;

  // 재귀함수를 통해 loop라는 함수를 무한으로 실행시키라는 명령을 했기때문에 계속 무한으로 돌 수 있다.
  // requestAnimationFrame(loop);
};

loop();