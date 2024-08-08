// 첫 날짜에서 현시점까지의 경과일
const accent = document.querySelector(".accent");
const userAnswer = prompt("우리 공부한지", "2024-06-14");

// 현재 날짜값 가져오기
const now = new Date();
const firstDay = new Date(userAnswer);

// 첫날짜, 현시점 밀리초 가져오기
const toNow = now.getTime();
const toFirst = firstDay.getTime();

// 첫날짜에서 현시점까지의 경과 밀리초
const passedTime = toNow - toFirst;
// 밀리초를 날짜로 변환하기 위해 밀리초상태인 passedTime을 1일의 밀리초로 나누기
// round수학객체를 써서 소수점 반올림
// round와 24*60*60*1000은 상관없음
const passedDate = Math.round(passedTime / (24*60*60*1000));

accent.innerText = `📆 ${passedDate}일`;


// function
// 경과일수를 매개변수인 days로 할당
// 화살표함수 => 호이스팅 기능 사용 불가 // 반드시 선언부 먼저, 호출부 나중에
// function함수 => 기명함수에서는 호이스팅 기능 사용 가능

// 함수의 선언부
const calcDate = (days) => {
future = toFirst + days * (24*60*60*1000);
someday = new Date(future);
year = someday.getFullYear();
month = someday.getMonth() + 1;
date = someday.getDate();

document.querySelector(`#date${days}`
).innerText = `${year}년 ${month}월 ${date}일`;
};

// 함수의 호출부
calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);