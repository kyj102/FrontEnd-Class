// const today = new Date();
// const month = today.getMonth() + 1;
// // month의 정보는 0부터 시작하기 때문에 month값을 찾아올땐 현재 달에 +1
// const date = today.getDate();
// const day = today.getDay();

// document.write(`<h1>오늘 날짜정보</h1>`);
// document.write(`현재 월 : ${month}월`);
// document.write(`<br/>`)
// document.write(`현재 일 : ${date}일`);

// // 밀리초 변환 개념
// // 1초 = 1000밀리초
// // 1분 = 60초 = (60*10000) = 60,000밀리초
// // 1시간 = (60*60*1000) = 3,600,000밀리초
// // 1일 = (24*60*60*1000)

// 연말까지 남은 시간 알아보기
const today = new Date();
const year = today.getFullYear();

const lastDate = new Date(year, 11, 31);
const diffDate = lastDate - today;

// Math.round : 소수점반올림함수
const result = Math.round(diffDate / (24*60*60*1000)) ;

alert(`올 연말 마지막 날까지 ${result}일 남았습니다!`);