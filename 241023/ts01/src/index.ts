// // const numArr: number[] = [1,2,3];
// // const strArr : string[] = ["hello", "world"];
// // const boolArr : Array<boolean> = [true, false];

// // const multiArr: (string | number | boolean)[] = ["1", "hello", true];

// // let doubleArr: number[][] = [
// //   [1,2,3],
// //   [4,5],
// // ];

// // let tup1: [number, number] = [1,2];
// // tup1.push(6);

// // // 구조적 타입시스템 적용
// // const user: {
// //   id?: number;    // 선택적 타입 => 있어도 되고 없어도 되는 타입
// //   name: string;
// // } = {
// //   name: "YEJI",
// // };

// // let config: {
// //   readonly apikey: string,
// // } = {
// //   apikey: "13131312312342",
// // }


// // // 타입별칭(구조적 타입시스템을 한번에)
// // type User = {
// //   id: number;
// //   name: string;
// //   location: string;
// // };

// // // 타입별칭 적용
// // let user1 : User = {
// //   id: 1,
// //   name: "Yeji",
// //   location: "Seoul",
// // };
// // let user2 : User  = {
// //   id: 1,
// //   name: "Wonbin",
// //   location: "Incheon",
// // };

// // // 동일한 타입 식별자는 지역요소에서 사용 가능하다. 
// // const fnc = () => {
// //   type User = {};
// // }

// // // 인덱스 시그니처
// // type ContryCodes = {
// //   [key: string]: string;
// // }

// // const contryCodes: ContryCodes = {
// //   Korea: "ko",
// //   UnitedState: "us",
// //   UnitedKingdom: "uk",
// // }


// // // 인터페이스 타입
// // interface User01 {
// //   id: number;
// // }

// // interface Person {
// //   name: string;
// //   age: number;
// //   etc?: boolean;
// // }

// // const person: Person = {
// //     name: "Yeji",
// //     age: 24,
// // }

// // // 클래스 자체가 하나의 타입으로써 작용한다.
// // class Person1 {
// //   name: string;
// //   age: number;
// // }

// // const person03: Person1 = new Person1();
// //   person03.name = "Yeji";
// //   person03.age = 24;

// // console.log(person03)


// // // // 바닐라 JS에서의 클래스 정의
// // // class Person02 {
// // //   name: string;
// // //   age: number;
// // //   // 생성자함수
// // //   constructor(name: string, age: number) {
// // //     this.name = name;
// // //     this.age = age;
// // //   }
// // // }


// //   // 접근제어자 public을 활용하면 필드값 생략가능
// // class Person2 {
// //   constructor(public name:string, public age?: number) {}
// // }

// // const person04 = new Person2("Romeo");
// // console.log(person04);

// // interface Person5 {
// //   name: string;
// //   age: number;
// // }

// // // implements : 뒤에 오는 인터페이스의 값을 무조건 실행하도록 약속된 키워드
// // class Person6 implements Person5 {
// //   constructor(public name: string, public age: number) {}
// // }

// // const person05 = new Person6("Juliet", 20);
// // console.log(person05);


// // 추상클래스
// // 어떤 클래스를 정의하기 위해서 추상적인 개념을 만들어 놓고 해당 추상적인 개념을 모티브로 클래스를 선언 및 생성하는 것
// abstract class Person7 {
//   constructor(public name: string, public age: number) {}
// }

// // extend: 확장, super필수
// class Person8 extends Person7 {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
// }

// const person06 = new Person8("Yeji", 20);
// console.log(person06)

// // static속성
// class TestA {
//   static initialValue = 1;
// }

// const test01A = TestA.initialValue;

// console.log(test01A);



// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 1,
// }

// const user1 = {
//   name: "Yeji",
//   role: Role.ADMIN,
// };

// const user2 = {
//   name: "Yeji",
//   role: Role.USER,
// };

// const user3 = {
//   name: "Yeji",
//   role: Role.GUEST,
// };

let test01: any = 10;
test01 = "Hello";

let test02: unknown;

test02 = "World";
test02 = 1;
test02 = () => {};

let test03 = test01;
test03 = test02;

let test04: number = 20;

// unknown 오류해결 : 타입제한적용
if(typeof test02 === "number") {
  test04 = test02;
}

// 함수가 시작되는 매개변수의 반환값 앞에 타입을 정의
const func1 = (): string => {
  return "hello";
};

const fun2 = (): void => {
  console.log("world");
}

let test05: void;
test05 = undefined;


// 어떤 값도 정의할 수 없는 경우
let test06: never;
// test06 = 1;
// test06 = "Hello";
// test06 = true;
// test06 = undefined;
// test06 = any;
// test06 = null;

// 예) 결과값의 타입이 무엇인지 인지할 수 없는 경우
const fun3 = (): never => {
  while (true) {}
}


// 타입단언
let obj: object = {
  name: "Yeji",
};

interface Nameable {
  name: string
}

let name1 = (<Nameable>obj).name;
let name2 = (obj as Nameable).name

console.log(name1, name2)


// 함수의 타입을 정하는 기본 방식
const add = (a: number, b: number) => {
  return a + b;
};

// // 매개변수의 타입은 존재하지만 반환값의 타입이 없을 때
let printMe = (name: string, age: number):void => {
  console.log(`name: ${name}, age: ${age}`);
};


// 타입별칭을 활용한 함수시그니처
type PrintMeFnc = (name: string, age: number) => void;


// 함수 시그니처
// 함수의 형태를 미리 정의했기 때문에 void로 반환된 값의 타입을 일일이 정의할 필요가 없음
const printMe1: PrintMeFnc = (name, age) => {
  console.log(`name: ${name}, age: ${age}`);
};


// 타입가드
interface Nameable02 {
  name: string;
}

const getName = (o: Nameable02) => {
  return o !== undefined ? o.name : "Loading..." ;
};


const dataResult = getName(undefined);
console.log(dataResult);
console.log(getName({ name: "YEJI"}));


// 유니온타입을 활용한 타입가드
const getName1 = (o: Nameable02 | undefined) => {
  return o !== undefined ? o.name : "Loading..." ;
}