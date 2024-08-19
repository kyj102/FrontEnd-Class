const playBtn = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");

const play = () => {
  playBtn.innerText = "||";
  video.play();
};

const pause = () => {
  playBtn.innerText = "►";
  video.pause();
}

const togglePlay = () => {
  video.paused ? play() : pause();
};

const setVolume = (e) => {
  video.volume = e.target.value;
};

const formatting = (time) => {
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hrs = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hrs = hrs < 10 ? `0${hrs}` : hrs;

  return `${hrs}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");
  
  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
}

playBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
volumeBar.addEventListener("change", setVolume);