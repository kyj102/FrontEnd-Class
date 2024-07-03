const bgImgs = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];

const bgImg = document.querySelector("#background_img");
console.log(bgImg);
bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)), url(./img2/${bgImgs[0]})`;

const topContents = document.querySelector("#top_contents");
const contentTit = topContents.querySelector(".top_contents_title");
const contentDesc = topContents.querySelector(".top_contents_decs");
