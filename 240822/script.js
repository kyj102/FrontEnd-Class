// JSON 데이터통신의 기원
const xhr = new XMLHttpRequest();

xhr.open("GET", "student.json");
xhr.send();

// 레디스테이트값이 변경되고 특정 값이 될 때, 해당 이벤트를 실행시켜주도록 하는 이벤트핸들러 함수
// 서버가 제공해주는 데이터값이 정상적으로 로딩된다는 조건이 만족될 때, studentJSON의 데이터값을 parse함수로 변환한 다음 innerText값으로 출력시켜라
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    const result = document.querySelector("#result");
    result.innerText = `${students.name}은 ${students.major}학과의 ${students.grade}학년 입니다!`
    console.log(result)
  }
};