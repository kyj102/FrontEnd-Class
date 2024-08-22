const form = document.querySelector("form");
const input = document.querySelector("#userNumber");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let value = input.value;

  try {
    if(value === "" || isNaN(value)) throw "숫자를 입력하세요!";

    // 사용자의 입력값을 숫자로 형변환
    value = Number(value);

    if(value <= 10) document.querySelector("#result").innerText = value;


    // err 매개변수의 공간 : throw가 던지는 값을 인자값으로 받아온다.
    if(value > 10) throw "10보다 작은 수를 입력하세요!";
  } catch(err) {
    alert(err);
    // input의 value값을 리셋시키는 명령어 : 알림창의 확인을 누르면 알림창을 없애줌
  } finally {
    input.value = "";
  }
})