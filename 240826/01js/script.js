// setItem (key, value)
// > 해당 키에 매칭되는 value값을 찾아온다

// getItem(key)
// > 해당 키에 매칭되는 값을 찾아온다

// removeItem(key)
// > 해당 키에 매칭되는 값을 삭제한다

// clear( )
// > 모든 키를 리셋시킨다

let students = ["Kim", "Lee", "Park"];
localStorage.setItem("students", JSON.stringify(students)); //["Kim","Lee","Park"] < 문자열이 JSON의 형태인 배열값으로 변환되어 로컬스토리지에 저장된다.
let localData;
// 최초의 값이 아무것도 없을때 로컬데이터에는 일단 배열로 저장시킨다는 예외조항처리
if(localStorage.getItem("students") === null)  localData = [];
// 최초의 값이 인식된다면 키값에 맞는 로컬스토리지 안의 데이터를 찾아온다.
else localData = JSON.parse(localStorage.getItem("students"));

// 기존의 로컬데이터에 추가시키는 함수 push()
localData.push("Choi");

console.log(localData)