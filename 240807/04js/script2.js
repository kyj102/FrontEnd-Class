// 현 시점의 날짜정보데이터 생성함수
// 년, 월, 일, 시, 분, 초

const today = new Date();
const hrs = today.getHours();

const container = document.querySelector(".container");
const newImg = document.createElement("img");

container.appendChild(newImg);
newImg.src = (hrs < 12) ? "./images/morning.jpg" : "./images/afternoon.jpg";
console.log();

