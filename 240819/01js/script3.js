// const numbers = [1, 2, 3, 4, 5];
// // const newNumbers = numbers.map((number) => number * 2);

// // console.log(newNumbers);
// // console.log(numbers);

// const newNumbers01 = numbers.map((number, index) => index + (number * 3));

// console.log(newNumbers01);

// const scores = [90, 35, 64, 88, 45, 92];

// const highScores = scores.filter((score) => score >= 85);
// console.log(highScores)
// console.log(scores);

const numbers = [1, 2, 3, 4, 5];

let result =  numbers.reduce((total, current) => total + current, 0);

console.log(result);

// total : 연산된 값을 누적 및 저장해놓는 변수의 역할