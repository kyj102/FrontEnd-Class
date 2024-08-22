const frame = document.querySelector("section");
const lists = document.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audios = frame.querySelectorAll("audio");

const deg = 45;
let i = 0;
let num = 0;

// 각각의 컨텐츠를 동일한 간격으로 돌려 100vh안에 360도를 기준으로 배치
lists.forEach((list) => {
  const pic = list.querySelector(".pic");
  list.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url("./img/member${i+1}.jpg")`;
  i++;

  const pause = list.querySelector("ul li:nth-child(1)");
  const play = list.querySelector("ul li:nth-child(2)");
  const load = list.querySelector("ul li:nth-child(3)");

  play.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    e.target.closest("article").querySelector(".audio").play();
  });

  pause.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.remove("on");
    e.target.closest("article").querySelector(".audio").pause();
  });

  load.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    e.target.closest("article").querySelector(".audio").load();
    e.target.closest("article").querySelector(".audio").play();
  });
});


const initMusic = () => {
for(let audio of audios) {
  audio.pause();
  audio.load();
  audio.parentElement.previousElementSibling.classList.remove("on");   // 지나간 해당 음원에 대한 클래스값을 찾아와서 제거
  }
};

let active = 0;
// prev // next 버튼클릭 시 회전, 전체 총 갯수를 기준으로 몇번째에 회전을 하고 있는지 체크
// 존재하지 않은 공간까지의 무한회전을 막기위한 "len" 변수설정
const len = lists.length - 1;  // 마지막 아티클의 인덱스값
const activation = (index, lists) => {
  for(let list of lists) {
// 이미 지나간 아티클은 클래스가 활성화되면 안되기 때문에 on클래스를 지우고 시작해라
    list.classList.remove("on");
  }

  lists[index].classList.add("on");
};

prev.addEventListener("click", () => {
  initMusic();
  num++;
  frame.style.transform = `rotate(${num * deg}deg)`;

  // 아이템들이 무조건 0~7번째까지의 인덱스값 안에서만 회전하도록 제어해주는 삼항조건연산자
  active === 0 ? (active = len) : active--;
  activation(active, lists);
});

next.addEventListener("click", () => {
  initMusic();
  num--;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === len ? (active = 0) : active++;
  activation(active, lists);
  });