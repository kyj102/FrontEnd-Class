const userId = document.querySelector("#userId");
const result = document.querySelector("#result");

const userDataList = [
  {id : 123, name: "곰"},
  {id : 1021, name: "사자"},
  {id : 6021, name: "여우"},
];

// 사용자가 입력한 아이디값을 매개변수로 받아온다.
// find() : 앞에 붙은 배열 객체의 아이템 가운데 특정 요소를 찾아 해당 요소의 값이 있는것만 찾아서 새로운 배열로 가져올 수 있도록 해주는 함수
const findUser = (searchId) => {
  const targetData = userDataList.find((data) => data.id === searchId);

  // 예외조항처리2 : 숫자나 문자 상관없이 존재하지 않는 값이 나올 시 "유저 검색결과 없음" > 더 상위개념의 예외조항처리
  if(targetData === undefined || targetData === null) {
    result.innerText = "유저 검색결과 없음";
  }

    result.innerText = targetData.name;

};

userId.addEventListener("keyup", (e) => {
  const searchId = parseInt(e.target.value);

  // // 예외조항처리1 : 숫자가 아닌 값을 입력했을 때 "숫자가 아닙니다"
  // if(isNaN(searchId)) result.innerText = "숫자가 아닙니다!";

  findUser(searchId);
});

// 어떻게 자료구조를 만들고 갈 것인가?
// 이벤트가 시작된 이후에 어떤 값을 생성하고 처리할 것인가?
// 어떻게 자료구조를 만들고 갈 것인가?
// > 문법 (*메서드, 속성 등)