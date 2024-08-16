// 현재 i:2, j:11
// 두수를 더한 결과를 j에 넣으면 j의 값은 13 입니다.
// 현재 i:2, j:13
// 두수를 뺀 결과를 j에 넣으면 j의 값은 11 입니다.
// 현재 i:2, j:11
// 두수를 곱한 결과를 j에 넣으면 j의 값은 22 입니다.
// 현재 i:2, j:22
// 두수를 나눈 결과를 j에 넣으면 j의 값은 11 입니다.
// 현재 i:2, j:11
// 두수를 나눈 나머지의 결과를 j에 넣으면 j의 값은 1 입니다.

const i = Number(prompt("첫번째 값을 입력하세요."));
let j = Number(prompt("두번째 값을 입력해주세요!"));
console.log(`현재 i:${i}, j:${j}`);

j += i;
const result = 
(`두 수를 더한 결과를 j에 넣으면 j의 값은 ${j}입니다.`);
console.log(result);

console.log(`현재 i:${i}, j:${j}`);
j -= i;
const result2 = 
(`두 수를 뺀 결과를 j에 넣으면 j의 값은 ${j}입니다.`);
console.log(result2);

console.log(`현재 i:${i}, j:${j}`);
j *= i;
const result3 = 
(`두 수를 곱한 결과를 j에 넣으면 j의 값은 ${j}입니다.`);
console.log(result3);

console.log(`현재 i:${i}, j:${j}`);
j /= i;
const result4 = 
(`두 수를 나눈 결과를 j에 넣으면 j의 값은 ${j}입니다.`);
console.log(result4);

console.log(`현재 i:${i}, j:${j}`);
j %= i;
const result5 = 
(`두 수를 나눈 나머지의 결과를 j에 넣으면 j의 값은 ${j}입니다.`);
console.log(result5);