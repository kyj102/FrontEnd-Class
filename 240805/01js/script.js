// Sticky Event
window.addEventListener("scroll", () => {
const hashList = document.querySelector(".hashList")
const scrollY = window.scrollY;
if(scrollY > 310) {
  hashList.classList.add("active");
} else {
  hashList.classList.remove("active");
}
// console.log(scrollY);
});

// Touch Event
const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listScrollWidth = hashContent.clientWidth + 200;

// 최초 터치 및 마우스다운 지점을 알려주는 좌푯값
let startX = 0;

// 현재 이동중인 지점을 알려주는 좌푯값
let nowX = 0;

//터치종료지점
let endX = 0;

// 두번째 터치가 시작되어지는 시점
let listX = 0;

// 사용자의 손가락 터치 여부
const getClientX = (e) => {
  // const isTouches = e.touches ? true : false;
  // // 몇 개의 손가락을 터치했는지 => 인덱스값으로 찾아온다.
  // // 제일 최초로 손가락이 짚인 지점의 인덱스값 => [0]
  // // clientX : 사용자가 현재 보고있는 디바이스 매체의 너비를 의미
  // // 디바이스 너비를 0~300이라고 가정했을때 손가락이 최초로 찍힌 지점과 떼어진 지점의 차이를 알아야 한다 why? ► 두번째로 손가락을 짚고 뗀 지점은 그 차이를 뺀 상태에서의 나머지 전체너비값에서부터 시작해야하기 때문에
  // return isTouches ? e.touches[0].clientX : e.clientX;
  return e.touches ? e.touches[0].clientX : e.clientX;
};

// getComputedStyle: css에서 정의한 스타일값을 정의해서 찾아오는 함수
// hashContent가 움직인 최종적인 값을 찾아오는 역할을 한다.
// split: 문자열에 있는 아이템을 특정한 규칙에 의해 배열에 있는 아이템으로 재구성하는 함수
const getTranslateX = () => {
  return parseInt(getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]);
}

// hashcontent가 왼쪽으로 이동될 때의 함수
const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

//손가락이나 마우스가 이동되었을 때의 이벤트값
const onScrollMove = (e) => {
nowX = getClientX(e);
// 전체너비값-처음 손가락으로 왼쪽으로 이동시긴 값
// setTranslateX(nowX - startX);
setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if(listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s`;
    listX = 0;
  } else if(listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listScrollWidth;
  }

  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mousemove", onScrollMove);
  window.removeEventListener("touched", onScrollEnd);
  window.removeEventListener("mouseup", onScrollEnd);
  window.removeEventListener("touchstart", onScrollStart);
  window.removeEventListener("mousedown", onScrollStart);
};

const onScrollStart = (e) => {
  startX = getClientX(e);



//손가락이나 마우스가 이동되었을 때의 값을 찾아오기 위한 함수
  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);
  // 손가락이나 마우스를 디바이스에서 뗐을 때 종료되었음을 알리는 함수
  window.addEventListener("touched", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart);


// console.log(hashContent);