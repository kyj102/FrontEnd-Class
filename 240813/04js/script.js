// Class : 자바스크립트 안에서 반복적으로 사용될 특정 요소를 간직한 객체의 형태를 템플릿화하기위한 목적으로 클래스를 사용한다.

// 교보문고 F/E => 매일매일 신간 책이 들어온다 => 신규 객체데이터로 만들어서 B/E서버에 데이터를 등록할 수 있도록 지원해주세요

// 신간 300권

// const newBook1 = {
//   title: "당신이 누군가를 죽였다",
//   authour: "히가시노 게이고",
//   price: 17820,
//   category: "미스터리 스릴러",
// }

// Class 생성하는 2가지 방법
// 1) 생성자함수를 만들어 사용

function Book(title, author, price, category) {
  this.title  = title;
  this.author = author;
  this.price = price;
  this.category = category;
}

const book1 = new Book("당신이 누군가를 죽였다", "히가시노 게이고", "17820", "미스터리스릴러");

console.log(book1)