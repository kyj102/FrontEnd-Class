const name = document.querySelector("#name");
const major = document.querySelector("#major");
const campList = document.querySelector("#campList");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
})

const liItem = document.createElement("li");

liItem.innerHTML = `${name.value} + ${major.value}`;

campList.appendChild(liItem);

name.value = "";
major.value = "";

