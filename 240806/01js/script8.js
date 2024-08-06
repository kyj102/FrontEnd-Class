document
.querySelector("p")
.addEventListener("click", () => {
  console.log("p");
});

document
.querySelector("section")
.addEventListener("click", () => {
  console.log("section");
});

document
.querySelector("div")
.addEventListener("click", () => {
  console.log("div");
});

//웹브라우저가 실행 => react, js 파싱 (*문서를 읽으면서 기본적으로 실행될 수 있는 요소를 실행)

// // 함수선언
// function testFnc () {
//   alert("시작!");
// }

// // 함수호출
// testFnc();

// // 이벤트 버블링
// //* : 작성한 모든 node들을 찾아와서 순번을 매기는 배열의 형태를 띈다.
// const elements = document.querySelectorAll("*");
// elements.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     console.log(`e.target: ${e.target.tagName}, e.currenTarget : ${e.currentTarget.tagName}`);
//   });
// });

// 이벤트 캡쳐링
//* : 작성한 모든 node들을 찾아와서 순번을 매기는 배열의 형태를 띈다.
const elements = document.querySelectorAll("*");
elements.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(`e.target: ${e.target.tagName}, e.currenTarget : ${e.currentTarget.tagName}`

    );
  },
  true
);
});