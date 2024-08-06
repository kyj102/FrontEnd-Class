const openBtn = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");

openBtn.addEventListener("click", function() {
  this.classList.add("btnActive");
  modalBox.classList.add("active");
});

const closeBtn = modalBox.querySelector("#profile > button");

closeBtn.addEventListener("click", function() {
  openBtn.classList.remove("btnActive");
  modalBox.classList.remove("active");
});

// 1. 최초에 보여줘야하는 UI디자인
// 2. 모달창이 오픈되었을 떄에 보여줘야하는 UI 디자인
// 3. JS를 활용해서 위 2개의 디자인요소를 어떻게 크로스시킬 것인가?