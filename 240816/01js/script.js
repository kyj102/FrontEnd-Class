function Book (title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function() {
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다!`);
};

// 생성자함수를 할당받을 변수선언(new예약어)
const book1 = new Book("자바스크립트", 10000)
book1.buy();



function Textbook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}

Textbook.prototype.buyTextbook = function() {
  console.log(`${this.major}전공서적, ${this.title}을(를) 구매하였습니다!`);
};

Object.setPrototypeOf(Textbook.prototype, Book.prototype);

const book2 = new Textbook("타입스크립트", 20000, "컴퓨터공학");

book2.buyTextbook();
book2.buy();

//extneds 
// implement (*TS) : 특정값을 상속받는다면, 반드시 필수적으로 상속받은 값을 사영해야한다.

// class를 통한 프로토타입 객체생성
class BookC {
  constructor(title,price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다!`);
  }
}

const book3 = new BookC("자료구조", 10000);
book3.buy();

// textbookC = BookC의 확장적 개념
// super = call : 상속을 받아오고자 하는 속성들을 찾아온다. (this를 적지 않아도 된다.)
class TextbookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }

  // 메서드함수 선언
  buyTextbook() {
    console.log(`${this.major}전공서적, ${this.title}을(를) 구매했습니다!`);
  }
}

const book4 = new Textbook("알고리즘", 5000, "컴퓨터공학");
book4.buyTextbook();
book4.buy();
