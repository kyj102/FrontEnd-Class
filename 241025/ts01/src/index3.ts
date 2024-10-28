class List<T> {
  constructor(public list: T[]) {}

  push(data: T) {    // 넘버리스트라는 클래스를 생성할 때 임의로 생성한 함수
    this.list.push(data); // 실제 배열이라는 자료구조의 메서드함수
  }
  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
};


const numberList = new List([1, 2, 3]);
console.log(numberList);
