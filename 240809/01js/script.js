const today = new Date();

// display Date
const displayDate = document.querySelector("#today");

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
let day = today.getDay();

switch(day) {
  case 0 :
    day = "일요일";
    break;
  case 1 :
    day = "월요일";
    break;
  case 2 :
    day = "화요일";
    break;
  case 3 :
    day = "수요일";
    break;
  case 4 :
    day = "목요일";
    break;
  case 5 :
    day = "금요일";
    break;
  case 6 :
    day = "토요일";
    break;
}

// day에 강조스타일을 부여하기 위해 innerHTML 속성 사용
displayDate.innerHTML = `${year}년 ${month}월 ${date}일 <span style="font-weight:bold">${day}</span>`;


// display Time
const displayTime = document.querySelector("#clock");

const clock = () => {
  const current = new Date();
  let hrs = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();

  // 12시를 초과하는 13시부터는 12를 뺀 숫자로 표현한다
    // 변수재할당을 활용해 오전, 오후 구분
  let period = "오전";
  if(hrs === 0) hrs = 12;
  else if(hrs > 12){
    hrs = hrs - 12;
  period = "오후";
  }

  // 삼항조건연산자를 사용해 시계의 모든 숫자가 한자리수일때 무조건 앞에 0이 붙도록 함
  mins = (mins < 10) ? `0${mins}` : mins;
  hrs = (hrs < 10) ? `0${hrs}` : hrs;
  secs = (secs < 10) ? `0${secs}` : secs;
  

  displayTime.innerText = `${period} ${hrs} : ${mins} : ${secs}`;
};

// 실행하고자 하는 인자값, 얼마주기로 반복할것인지에 대한 시간을 밀리초로 인자값
setInterval(clock, 1000);