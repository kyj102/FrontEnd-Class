// const str = "Hello Sir";
// const arr = ["today", "first", "theday"];

// console.log(str.length);
// // console.log(arr.length);

// 1) 특정 위치의 문자에 접근하고자 할 때 : charAt
// 배열의 index와 비슷한 느낌 : 0으로 시작한다.
console.log(str.charAt(4));

const counting = (string, word) => {
  let count = 0;
  for(let i = 0; i < string.length; i++) {
    if(string[i] === word) count += 1;
  }
  return count;
};

const string = prompt("원하시는 문자열을 입력하세요!");
const word = prompt("그 중 찾고싶은 문자열은 무엇인가요?");

const result = counting(string, word);

document.write(`${string}에는 ${word}이라는 알파벳이 ${result}번 사용되었습니다!`);

// const str1 = "Good morning, everyone. Beautiful morning. Nice morning";
// console.log(str1.indexOf("morning"));
// // console.log(str1.indexOf("eveing"));

// // 한 문장에서 중복된 단어 중 나중 단어를 찾아오고 싶을 때
// // 앞서 정의된 인덱스값을 찾아와서 +1 을 시켜준다.
// let firstIndex = str1.indexOf("morning");
// let secondIndex = str1.indexOf("morning", firstIndex + 1);
// let thirdIndex = str1.indexOf("morning", secondIndex + 1);
// console.log(thirdIndex);

// // 3) 특정 문자열로 시작하거나 끝나거나 혹은 포함하고 있거나
// const str2 = "Hello, everyone.";
// console.log(str2.startsWith("Hello"));  // ture
// console.log(str2.startsWith("hello"));  // false
// console.log(str2.startsWith("He"));  // ture
// console.log(str2.startsWith("Hello, ev"));  // ture

// // 첫번째 인자값이 인덱스값에 존재하는지
// console.log(str2.startsWith("el", 1))  //true
// console.log(str2.startsWith("o", 4))  //true

// console.log(str2.endsWith("everyone."));  // true
// console.log(str2.endsWith("Everyone."));  // false
// console.log(str2.endsWith("one."));  // false

// // ES6 이전문법
// console.log(str2.indexOf("every") === 5);
// console.log(str2.includes("every"));  // 신문법

// let str3 = " ab cd ef ";

// console.log(str3.trim());
// console.log(str3.trimStart());
// console.log(str3.trimEnd()); 
// // 회원가입 시 휴대폰번호 입력
// // input:ext => 010-1234-5678  ||  01012345678  || 010-12345678


// // const str2 = "Hello, everyone.";
// console.log(str2.toUpperCase());
// console.log(str2.toLowerCase());


// // 문자열에서 특정 문자 추출
// // substring = 인자값 2개 받을 수 있음
// const str2 = "Good morning.";
// // 첫번째 인자값에서 시작하는 문자열을 찾아온다.
// console.log(str2.substring(5));    // morning
// // 0부터 시작해서, 두번째 인덱스값 앞까지
// console.log(str2.substring(0, 4));   // Good

// // console.log(str2);
// console.log(str2.slice(0, 4));
// console.log(str2);

// slice() : 음수값 사용가능 > slice만 사용가능한 문법
// 인덱스값을 셀 때 .부터 시작한다.
// console.log(str2.slice(-5, 12));  // -5 : 맨 왼쪽의 .부터 시작해서 5만큼 왼쪽으로 간 문자열의 값을 추출해서 ning이라는 결과값이 나온다.

const str5 = "Hello everyone";

console.log(str5.split(" "));  // 한 칸 띄어진 빈 문자열을 기준으로 ['Hello', 'everyone']
console.log(str5.split(""));  // 문자 그 자체들을 기준으로 ['H', 'e', 'l', 'l', 'o', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']