// 생성자함수
function Book(title, pages, done = false) {

  // field
  this.title = title;
  this.pages = pages;
  this.done = done;

  // Method
  this.finish = function() {
    let str = "";
    // 삼항조건연산자를 통해 값을 반환한다.
    this.done === false ? (str = "읽는중") : (str = "완독");
    return str;
  };
};

const book1 = new Book("자바스크립트", 648, true);
console.log(book1)


// class를 사용해 생성할때는 반드시 method 함수만 들어갈 수 있다.
class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  };

  finish() {
    let str = "";
    this.done = false ? (str = "읽는중") : (str = "완독");
    return str;
  };
};