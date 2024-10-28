// Keyof 연산자
// 객체타입으로부터 모든 속성의 키 타입을 유니온형식으로 추출해주는 연산자

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

const person = {
  name: "YEJI",
  age: 20,
};

const getProperty = (person: Person, key: keyof typeof person) => {
  return person[key];
};