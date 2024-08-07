const container = document.querySelector(".container");
const newP = document.createElement("p");
const textNode = document.createTextNode("TypeScript");
newP.appendChild(textNode);

const newP02 = document.createElement("p");
const textNode02 = document.createTextNode("React.js");
newP02.appendChild(textNode02);

container.appendChild(newP);

// insertBefore : 어떤 값을 중간에 끼워넣을 수 있는 함수
const basisNode = document.querySelectorAll("p")[1];

container.insertBefore(newP02, basisNode);

const target = document.querySelectorAll("p")[0];

// target.addEventListener("click", function() {
//   this.remove();
// });

const items = document.querySelectorAll("p");
items.forEach((item) => {
  item.addEventListener("click", function() {
    this.parentNode.removeChild(this);
  });
});