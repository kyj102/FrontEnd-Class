// 타입별칭 + 인덱스타입 + 제네릭

type Map2<T> = {
  [key: string] : T;
};

const stringMap2: Map2<string> = {
  name: "Wonbin",
  nickName: "blackCat",
};

const stringMap3: Map2<number> = {
  age: 23,
  birthYear: 2002,
};


// 제네릭 + 인터페이스
interface KeyPair<T, U> {
  key: T;
  value: U;
}

const keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

const keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
}