const nums = document.querySelectorAll(".number");

for(let i = 0; i < nums.length; i++) {

  // nums[i] + 1 => 실제로 어떤 숫자인지를 체크
  if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;

  const angle = (i + 1) * (Math.PI / 6);

  const x = 142 + 142 * Math.abs(Math.sin(angle)) - nums[i].offsetWidth / 2;
  const y = 142 - 142 * Math.abs(Math.cos(angle));

  if(i + 1 > 6) nums[i].style.right = `${x}px`;
  else nums[i].style.left = `${x}px`;

  if((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3)) nums[i].style.top = `${y}px`;
  else nums[i].style.bottom = `${y}px`;
}

const hourPointer = document.querySelector("#hour");
const minutePointer = document.querySelector("#minute");
const secondPointer = document.querySelector("#second");
const digitalClock = document.querySelector(".digital-clock");

const clock = () => {
  const currentTime = new Date();

  let second = currentTime.getSeconds();
  let secondAngle = second * 6;
  let secondAngleValue = `rotate(${secondAngle}deg)`;

  let minute = currentTime.getMinutes();
  let minuteAngle = minute * 6;
  let minuteAngleValue = `rotate(${minuteAngle}deg)`;

  // 시침은 분침에 따라서도 움직이기 때문에 분침의 움직임을 고려해서 각도를 제어해야 한다.
  // 시계는 1~12밖에 없기 때문에 hour에서 12를 빼도록 하는 삼항조건연산자를 넣어준다.
  let hour = currentTime.getHours();
  let hourAngle = (hour > 12 ? (hour - 12) * 30 : hour * 30) + (minute / 60) * 30;
  let hourAngleValue = `rotate(${hourAngle}deg)`;

  minutePointer.style.transform = minuteAngleValue;
  secondPointer.style.transform = secondAngleValue;
  hourPointer.style.transform = hourAngleValue;

  let period = "오전";
  if(hour === 0) hour = 12;
  else if(hour > 12) {
    hour -= 12;
    period = "오후";
  }

  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  digitalClock.innerText = `${period} ${hour}시 ${minute}분 ${second}초`;

};

setInterval(clock, 1000);
