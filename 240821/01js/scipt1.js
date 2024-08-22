const phoneNumber = document.querySelector("input[type='text']");
console.log(phoneNumber)
const warningMessage = document.querySelector("#warningMessage");

phoneNumber.addEventListener("keyup", function() {
  const numberValue = this.value;
  const trimNumber = numberValue.replace(/-/g, "");
  
  // 패턴정의
  // 시작은 반드시 0부터, 끝은 0부터 9까지

  // 11자리 or 10자리 수의 번호
  const regExp = /^[0][0-9]{9,10}$/.test(trimNumber);

  if(regExp === false) warningMessage.innerText = "전화번호의 형식에 맞춰 입력해주세요!";
  else warningMessage.innerText = "";
});