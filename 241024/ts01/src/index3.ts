// // 업캐스팅
// type A = () => number;
// type B = () => 10;

// let a: A = () => 10;
// let b: B = () => 10;

// a = b;
// // b = a;



// // 다운캐스팅
// type C = (value: number) => void;
// type D = (value: 10) => void;

// let c: C = (value) => {};
// let d: D = (value) => {};

// // c = d;
// d = c;



// type Animal = {
//   name: string;
// }

// let animalFunc = (animal: Animal): void => {
//   console.log(animal.name);
// }

// type Dog = {
//   name: string;
//   color: string;
// };

// let dogFunc = (dog: Dog) => {
//   console.log(dog.name);
//   console.log(dog.color);
// };

// dogFunc = animalFunc;

// // 함수 매개변수의 값은 거의 유일하게 다운캐스팅이 허용되는 부분


// type Func1 = (a: number, b: number) => void;
// type Func2 = (a: number) => void;

// let func1: Func1 = (a, b) => {};
// let func2: Func2 = (a) => {};

// func1 = func2;


// // 함수시그니처를 실제 구현되는 함수 위에다가 사전 작성 => 함수오버로딩
// function func(a: number): void;
// function func(a: number, b: number, c: number): void;


// // 실제 함수 선언부
// function func(a: number, b?: number, c?: number) {
//   if(typeof b === "number" && typeof c === "number") {
//     console.log(a + b + c);
//   } else {
//     console.log(a * 20);
//   }
// };

// // 함수실행 & 호출
// func(1);
// // func(1, 2);  // 함수오버로딩되지 않았기 때문에 실행불가
// func(1, 2, 3);


type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

const warning = (animal: Animal) => {
  if("isBark" in animal) {
    console.log(animal.isBark ? "짖습니다!" : "안 짖어요!");
  } else if ("isScratch" in animal) {
    console.log(animal.isScratch ? "할큅니다!" : "안 할큅니다!");
  }
};



// is : retrun값이 true인 경우 값을 확정짓는 키워드
// 함수의 반환값을 fix
const isDog = (animal: Animal): animal is Dog => {
  return (animal as Dog).isBark !== undefined;
};

const warning2 = (animal: Animal) => {
  if(isDog(animal)) {
    console.log(animal.isBark ? "짖습니다!" : "안짖어요!");
  } else {
    console.log(animal.isScratch ? "할큅니다!" : "안 할큅니다!");
  }
}