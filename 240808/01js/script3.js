
const accent = document.querySelector(".accent");
const userAnswer = prompt("만보걷기 시작한지", "2024-01-01");

const now = new Date();
const firstDay = new Date(userAnswer);

const toNow = now.getTime();
const toFirst = firstDay.getTime();

const passedTime = toNow - toFirst;
const passedDate = Math.round(passedTime / (24*60*60*1000));

accent.innerText = `${passedDate}일 연속달성`;