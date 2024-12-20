// 1. 각 텍스트에 마우스를 올린다.
// 텍스트를 찾아온다.
// 텍스트는 4개이다.
// querySelectorAll
// forEach
// addEventListner
// mouseover || mouseenter
// mouseout || mouseleave

// 2. 텍스트에 마우스가 올라갈 때마다 이미지가 변경된다.
// 현재 이미지를 출력하고 있는 Node를 찾아온다.
// 해당 Node가 어떻게 이미지를 출력하고 있는지 확인한다.(*백그라운드 이미지 속성)
// 어떻게 하면 Node의 속성값을 변경할 수 있는지 고민한다.
// 스크립트에서 어떻게 css스타일속성을 제어할 수 있는지 생각한다.

// 3. 텍스트에서 마우스가 떠나면 원래 상태로 돌아온다.

const liItems = document.querySelectorAll("li");
const photo = document.querySelector(".photo");

liItems.forEach((liItems, index) => {
  liItems.addEventListener("mouseenter", function() {
    let changeImage = this.getAttribute("data-image");
    photo.style.backgroundImage = `url("${changeImage}")`
  });

  // 빈 문자열로 원래 있던 배경이미지로 돌아가기
  liItems.addEventListener("mouseleave", function() {
    photo.style.backgroundImage = ``;
  });


});