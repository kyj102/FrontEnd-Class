const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const form = document.querySelector("form");

const current = document.querySelector("#current");
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
const currentDate = today.getDate();

current.innerText = `오늘은 ${currentYear}년 ${currentMonth}월 ${currentDate}일 입니다.`; 

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const birthDay = new Date(
    birthYear.value,
    birthMonth.value-1,
    birthDate.value
  );

    const resultDays = document.querySelector("#days");
    const resultHours = document.querySelector("#hours");

    const passed = today.getTime() - birthDay.getTime();
    const passedDays = Math.floor(passed / (24*60*60*1000));
    const passedHours = Math.floor(passed / (60*60*1000));
    const passedAges = Math.round(passedDays / 365);

    resultDays.innerText = `현재 나이는 ${passedAges}`
    resultHours.innerText = `현재까지 ${passedHours}의 시간이 흘렀습니다!`
});


// "2002-01-01" > 문자열 하나로 통으로 넣을때는 그대로 인식한다.
// 년, 월-1, 일 > 하지만 연월일로 쪼개넣으면 월을 +1로 인식하기 때문에 -1을 해준다.