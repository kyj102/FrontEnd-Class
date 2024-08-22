// // // const regExp = /\d{3}/;   // d 정수(숫자) 세자리로 이루어진 직접적인 패턴 정의
// // // const regExp2 = new RegExp(/\d{3}/);   // new예약어를 활용한 프로토타입 객체생성

// // // // test() > test함수가 정규식 객체의 패턴을 잘 따르고있는지 t/f값으로 반환해서 정의해주는 메서드함수
// // // console.log(regExp.test("Hello"));   // false
// // // console.log(regExp.test("123"));    // true

// // // //  정규표현식에 매칭되는 문자열이 있으면 해당 결과값을 배열의 자료형태로 반환, 그렇지 않은경우 null 반환
// // // console.log(regExp.exec("123"));    // ['123', index: 0, input: '123', groups: undefined]



// // const str = "ES202456789 is powerful";

// // // // 패턴에 일치하는 문자열을 찾아온다.
// // // console.log(str.match(/ES2024/));
// // // // 첫번째 인자값을 두번째 인자값으로 교체한다.
// // // console.log(str.replace(/ES2024/, "Javascript"));




// // // const regExp = /es/i; 
// // // // i를 주지 않았을때 > false, i플래그를 주었을때 > 대소문자를 구별하지 않고 es가 연달아 나오는 문자열을 찾았기 때문에 true값 반환

// // // console.log(regExp.test(str));


// // console.log(str.match(/ES\d*7/)); // ES의 문자열의 패턴을 찾아오되, \d라는 숫자클래스를 부여해서 문자열 뒤의 숫자에 기원하는  정수값을 찾아오도록 한다.

// // const hello = "Hello, everyone.";

// // console.log(/^H/.test(hello)); // 해당 문자열이 반드시 대문자 H로 시작해야한다.
// // console.log(/^h/i.test(hello)); // 소문자 h로 시작하는 문자열을 찾아오지만 i라는 플래그를 부여했기 때문에 대문자로 시작하는 문자열이 없어도 true값을 반환한다.

// // console.log(/one.$/.test(hello));   // T
// // console.log(/e.$/.test(hello));    // T
// // console.log(/one$/.test(hello));   // F



// // const str = "ES2024";
// // console.log(str.match(/[^0-9]/g));   
// // // [] : 어떠한 범위를 지정하고 싶을때, 0~9까지의 숫자를 가지고있는 패턴
// // // : g플래그 적용 > 문자열에서 매칭된 결괏값을 배열값으로 반환시킨다.   // 2,0,2,4
// // // [^] > 캐럿이 대괄호 안에 사용되었기 때문에 숫자를 제외한 모든 문자열을 찾아온다   // E, S



// const str = "Oooops";

// // {} : 반복되는 패턴을 정의하고 싶을 때 
// console.log(str.match(/o{2}/));  // 명확하게 두번 반복되는 요소를 찾아와라
// console.log(str.match(/o{2,}/));  // 최소 두번이상 반복되어지는 요소가 있으면 찾아와라
// console.log(str.match(/o{2,4}/));  // 최소 두번이상, 최대 네번까지 반복되어지는 요소가 있으면 찾아와라



// const str2 = "ES2024(ES8) is powerful";
// const regExp2 = /ES2024|ES8/;   // 둘 중 하나의 패턴만 일치해도 true값을 반환한다. // 반드시 띄어쓰기 X // 띄어쓰기 > 빈 문자
// console.log(regExp2.test(str2));

// 1) 숫자만 가능한 정규표현식 패턴
const regExp = /^[0-9]+$/;

// 2) 양의 정수만 가능한 정규표현식 패턴
const regExp1 = /^[1-9]\d*$/;

// 3) 음의 정수만 가능한 정규표현식 패턴
const regExp2 = /^\-[1-9]\d*$/;     // 마이너스가 특수문자로 기능할 수 있게 역슬래시를 붙여준다.

// 4) 영문자만 찾아오도록 하는 정규표현식 패턴
const regExp3 = /^[a-zA-z]+$/;

// 5) 숫자와 영문자를 찾아오도록 하는 정규표현식 패턴
const regExp4 = /^[a-zA-z0-9]+$/;

// 6) 한글만 찾아오도록 하는 정규표현식 패턴
const regExp5 = /^가-힣]+$/;

// 7) 한글과 영문자만 가능한 정규표현식 패턴
const regExp6 = /^[가-힣a-zA-z]+$/;

// 8) ex) 문자열의 길이가 5~10개의 패턴
const regExp7 = /^.{5,10}$/;