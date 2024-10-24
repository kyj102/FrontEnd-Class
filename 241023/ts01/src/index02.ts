// // let num1: number = 10;
// // let num2: 10 = 10;

// // num1 = num2;
// // // num2 = num1;

// // interface Animal {
// //   name: string;
// //   color: string;
// // };

// // let animal: Animal = {
// //   name: "고양이",
// //   color: "white",
// // };


// // interface Dog {
// //   name: string;
// //   color: string;
// //   breed?: string;
// // };

// // let dog: Dog = {
// //   name: "강아지",
// //   color: "brown",
// //   breed: "진돗개"
// // };

// // // animal은 dog보다 슈퍼타입
// // // dog는 상대적으로 animal보다 서브타입

// // // 슈퍼타입이 되려면 밑의 타입을 다 받아들일 수 있어야 한다
// // animal = dog;
// // dog = animal;

// // interface Book {
// //   name: string;
// //   price: number;
// // }

// // let book: Book;

// // interface ProgrammingBook {
// //   name: string;
// //   price: number;
// //   skill: string;
// // }

// // let programmingBook: ProgrammingBook = {
// //   name: "TS",
// //   price: 33000,
// //   skill: "TypeScript",
// // };

// // book = programmingBook;
// // // programmingBook = book;


// // // 초과 프로퍼티검사
// // let book3: Book = programmingBook;


// // 대수타입
// let a: string | number;

// a = 1;
// a = "Hello";


// type Dog = {
//   name: string;
//   color: string;
// }

// type Person = {
//   name: string;
//   language: string;
// }

// type Union1 = Dog | Person;

// let union1: Union1 = {
//   name: "",
//   color: "",
// }

// let union2: Union1 = {
//   name: "",
//   language: "",
// }

// let union3: Union1 = {
//   name: "",
//   color: "",
//   language: "",
// }

// // let union4: Union1 = {
// //   name: "",
// // }

// type Intersection = Dog & Person;

// let intersection: Intersection = {
//   name: "",
//   color: "",
//   language: "",
// }

// interface Person01 {
//   name: string;
//   age: number;
// }

// let person01 = {} as Person01;

// person01.name = "";
// person01.age = 20;

type Dog = {
  name: string;
  color: string;
}

// 타입단언으로 Dog라는 타입의 캡슐을 씌워놓음으로 인해 오류 해결
let dog = {
name: "뽀삐",
color: "brown",
breed: "똥개",
} as Dog;                                                                           

// 타입단언은 any 다음으로 치트키
// 최초값이 어떤 타입이더라도 as를 사용해 타입을 단언하는순간 새로운 타입이 정의됨
// 남발하는순간 일관성이 없어지기 시작
let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string; 
let num4= 10 as const; // 리터럴타입


// 타입가드 = 타입 좁히기
const fnc = (value: number | string) => {
  if(typeof value === "number") {
    value.toFixed(2);
  } else if (typeof value === "string") {
    value.toUpperCase();
  }
};