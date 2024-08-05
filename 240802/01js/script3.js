const button = document.querySelector("button");
const body = document.querySelector("body");
button.addEventListener("click", () => {
document.body.classList.toggle("dark");
});

if (document.body.classList.contains("dark")) {
  button.innerText = "라이트모드로 바꾸기" 
} else {
  button.innerText = "다크모드로 바꾸기" 
}

// const changeBtn = document.querySelector("#toggleBox")
// console.log(changeBtn);
// changeBtn.addEventListener("click", function () {
//   this.innerHTML = "라이트모드로 바꾸기";
// })