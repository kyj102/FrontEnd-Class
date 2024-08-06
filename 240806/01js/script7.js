const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");

const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];
const newVideo = document.createElement("video");
const srcVideo = document.createAttribute("src");
const widthVideo = document.createAttribute("width");
const autoplayVideo = document.createAttribute("autoplay");

srcVideo.value = `./videos/${videos[0]}`;
widthVideo.value = "700";

newVideo.setAttributeNode(srcVideo);
newVideo.setAttributeNode(widthVideo);
newVideo.setAttributeNode(autoplayVideo);
container.appendChild(newVideo);

// 비디오 클릭시 일시정지
newVideo.addEventListener("click", function() {
  if(newVideo.paused) {
    this.play();
// 일시정지 비디오 클릭시 다시 재생
  } else {
    this.pause();
  }
});

let i = 0;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    // 마지막 비디오에서 처음 비디오로
  if(e.target.id === "right") {
    i++;
    if(i >= videos.length) {
      i = 0;
    }
    // 처음 비디오에서 마지막 비디오로
  } else if (e.target.id === "left") {
    i--;
    if(i < 0) {
      i = videos.length - 1;
    }
    }
  srcVideo.value = `./videos/${videos[i]}`;
  });
});