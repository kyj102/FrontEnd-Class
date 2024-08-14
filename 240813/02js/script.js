// // // 객체생성 => 선언

// // const book1 = {
// //   title: "자바스크립트",
// //   level: "normal",
// //   study: "done",
// // };

// // // 객체 안에 담긴 데이터를 찾아와야 한다
// // //> property(속성)에 접근
// // // 1. 온점표기법(8,90%)
// // // 2. 대괄호표기법(10%)

// // console,log(book1.title);
// // console.log(book1["level"]);

// // book1.study = "ready";

// // console.log(book1);

// // book1.master = "David";

// // console.log(book1);


// // // 자바스크립트 어딘가에 class라는 생성자함수를 활용해서 이미 누군가가 객체를 만들어 놓았다는 뜻
// // // class 생성자함수를 통해서 이미 생성되어진 요소를 가져와서 사용할 때에는 반드시 new라는 예약어 + prototype함수 활용해야 함.
// // // prototype을 통해서 생성된 값 = 인스턴스 객체
// // // 최초에 선언한 변수의 값으로 할당된다.
// // let book2 = new Object();
// // // console.log(typeof book2);

// // book2.title = "타입스크립트";
// // book2.author = "김지선";
// // book2.bestSeller = "Yes";
// // console.log(book2);


// // // let book3 = new Array();
// // // console.log(typeof book3);

// // // 객체 안의 프로퍼티 값을 삭제하는 속성
// // delete book2.bestSeller;
// // console.log(book2);

// // 객체중첩
// const student = {
//   name: "전진우",
//   age: 20,
//   favorite: "game",
//   score: {
//     history: 85,
//     science: 90,
//     average: function() {
//       return (this.history + this.science) / 2;
//     },
//     like() {
//       alert(`전진우님은 컴퓨터를 좋아합니다!`);
//     },
//   },
// };
// // function // 화살표함수
// // 화살표함수는 현재 이벤트가 실행되고있는 직계부모를 찾아오지 못한다.
// // 따라서 익명함수인 function을 활용해서 this를 사용해 부모요소인 student.score를 찾아온다.


// console.log(student.score.history);
// console.log(student.score.average());

// // 객체 안에 property의 일부로서 탄생된 함수는 method라고 칭한다.

// student.score.like();


// // 객체구조
// const window = {
//   document : {
//     html: {
//       head: {
//         meat: "a",
//         link: "./",
//       },
//       body: {
//         h1: "안녕하세요",
//         p: "반갑습니다.",
//       },
//     },
//   },
//   alert () {

//   }
//   prompt() {

//   }
//   scrollY() {

//   },
// };