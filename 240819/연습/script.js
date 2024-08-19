// let num1 = 10;
// let num2 = 5;
// let result = 0;

// // result = num1++ + --num2;

// // result = --num1 - num2++;

// result = num1++ * num2++;

// console.log(num1, num2, result)

// ===============================

let num1 = 30;
let num2 = 6;
let num3 = 11;
let result = 0;

result = ++num1 + num2++ * num3--;
console.log(`num1= ${num1}, num2=${num2}, num3=${num3}, result=${result}`);

num1 -= 7;
result = (num1-- / --num2) * ++num3;
console.log(`num1= ${num1}, num2=${num2}, num3=${num3}, result=${result}`);

num1 += num2++ * --num3;
console.log(`num1= ${num1}, num2=${num2}, num3=${num3}, result=${result}`);







