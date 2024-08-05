// const main = document.querySelector("main");
// // const profile = main.querySelector("main > #profile");
// const profile = document.getElementById("profile")
// const h1 = main.querySelector("h1");
// const desc = document.querySelector("#desc");
// const user = desc.querySelectorAll(".user");
// const img = document.getElementsByClassName("image")

// console.log(user[user.length-1]);
// // console.log(profile);

// user.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("click");
//   });
// });

// // 유사배열
// // 99% 배열이 가지고 있는 속성을 가진다.
// // But 유사배열은 배열과 다른 1%의 속성을 가진다.

// const desc = document.querySelector("#desc");
// // const iu = desc.querySelectorAll(".user")[0];
// console.log(desc.textContent);

const title = document.querySelector("#title");

title.addEventListener("click", function () {
  this.innerText = "나의 프로필";
  this.style.backgroundColor = "#000";
  this.style.color = "#fff";
});

const pfImg = document.querySelector("#profile img");

pfImg.addEventListener("click", function () {
  this.src = "./dom/pf2.png";
});

const firstP = document.querySelector("#desc > p:first-child")
console.log(firstP);
firstP.addEventListener("click", function () {
  this.innerHTML = "이름 : <b>태연</b>";
});

const secondP = document.querySelector("#desc > p:nth-Child(2)");
console.log(secondP);

secondP.addEventListener("click", function () {
  // this.classList.add("active");
  // if(!this.classList.contains("active")) {
  //   this.classList.add("active");
  // } else {
  //   this.classList.remove("active");
  // }
  this.classList.toggle("active");
});