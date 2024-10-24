// 제네릭이 필요한 이유

// <T> => 제네릭 형식을 쓰면 타입변수로써의 T
const func = <T>(value: T): T => {
  return value;
}


// 제네릭타입의 응용형태 01
const swap = <T, U>(a: T, b: U) => {
  return [b, a];
}

const [] = swap("1", 2);


const funcArray = <T>(data: T[]): T => {
  return data[0];
};

let num = funcArray([0, 1, 2]);
console.log(num);

let str = funcArray([1, "Hello", "World"]);
console.log(str);


// 제네릭타입의 응용형태 02
const returnFirst = <T>(data: [T, ...unknown[]]): T => {
  return data[0];
};

const str1 = returnFirst([1, "hello", "world"]);
console.log(str1);


// 제네릭타입 응용형태 03
const func4 = <T extends {length: number}>(data: T): number => {
  return data.length;
};
console.log(func4("123"));
console.log(func4([1, 2, 3]));
console.log(func4({length: 1}));