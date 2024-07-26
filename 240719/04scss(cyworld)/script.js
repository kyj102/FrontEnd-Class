// console.log();

const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukeBox = document.querySelector("#menuJukeBox");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #fff; color: #55b2e4";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuJukeBox.style = "background: #55b2e4; color: #fff";
};
const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "background: #55b2e4; color: #fff";
  menuGame.style = "background: #fff; color: #55b2e4";
  menuJukeBox.style = "background: #55b2e4; color: #fff";
};
const jukeBoxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuHome.style = "background: #55b2e4; color: #fff";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuJukeBox.style = "background: #fff; color: #55b2e4";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukeBox.addEventListener("click", jukeBoxChange);