const userDataList = [
  {name: "곰", age: 18},
  {name: "여우", age: 27},
  {name: "사자", age: 32},
  {name: "얼룩말", age: 41},
  {name: "기린", age: 56},
];

const btns = document.querySelectorAll(".button");

const onClickBtn = (e) => {
  console.log(e.target.dataset.age);
};

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    onClickBtn(e);
  });
});