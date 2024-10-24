const func = (a: number, b: number): number => {
  return a + b;
};


// 기본 매개변수 타입정의
// 매개변수에 값을 지정하지 않을 때 리터럴타입으로 확장적 추론
// 콘솔은 반환값이 아니기 때문에 void타입
const func1 = (name = "YEJI"): void => {
console.log(`name: ${name}`);
};

// 선택적 매개변수 타입정의
// 선택적 프로퍼티에 undefined가 유니온이 됨 => undefined가 됐을 때도 타입가드
const self =(name="사용자", tall?: number): void => {
  console.log(`${name}님 반갑습니다!`);
  // 선택적 프로퍼티에서의 타입가드
  if(typeof tall === "number") {
    console.log(`${name}님의 키는 ${tall}cm 입니다!`);
  }
};


// 전개연산자 = 들어올 값의 개수가 가변적인 경우
const getItem = (...rest: number[]): number => {
  let sum = 0;
  rest.forEach((item) => (sum += item));
  return sum;
};

type Add = (a: number, b: number) => number;

// 타입별칭 생성 후 함수시그니처 적용
const add: Add = (a, b) => a + b;