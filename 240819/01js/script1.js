const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let numbers = [2, 4, 6, 8, 10];
const tail = (arr) => {
  return arr.length > 1 ? arr.slice(1) : arr;
};

origin.innerText = numbers;
result.innerText = tail(numbers);

// 매개변수 : 함수를 선언할 때 인자값으로 들어올 값의 위치에 선언해주는 변수를 지칭할 때(arr이 있는 공간)
// 참조변수 : 매개변수라는 물리적 공간에 선언된 값(arr)
// 인자값 : 함수를 호출할 때 입력하는 값(numbers)