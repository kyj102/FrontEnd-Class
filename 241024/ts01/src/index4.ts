type Type1 = number | string;
type Type2 = number & string;

interface Person {
  name: string;
  age: number;
};

type Type3 = number | string | Person;

const person: Type3 = {
  name: "WONBIN",
  age: 20,
}



// interface Animal {
//   name: string;
//   age: number;
// }

// interface Dog {
//   name: string;
//   age: number;
//   isBark: Boolean;
// }

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: Boolean;
// }

// interface Chicken {
//   name: string;
//   age: number;
//   isFly: Boolean;
// }


// 위 코드의 확장적 개념(extends)
type Animal = {
  name: string;
  age: number;
}

interface Dog extends Animal {
  isBark: Boolean;
}

interface Cat extends Animal {
  isScratch: Boolean;
}

interface Chicken extends Animal {
  isFly: Boolean;
}


// 인터페이스 다중확장
interface DogCat extends Dog, Cat {
  breed: string;
};


const dog: Dog = {
  name: "뽀삐",
  age: 5,
  isBark: true,
}