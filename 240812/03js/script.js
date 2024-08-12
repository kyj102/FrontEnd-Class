// // 전체 인원과 뽑을 인원을 체크한다.
// // 랜덤함수, 반복문
// // 당첨 인원에서 동일한 값이 들어오지 못하게 한다.

// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
  
//   const number01 = document.querySelector("#number");
//   const number02 = document.querySelector("number02");
//   const result = document.querySelector("#result");

//   // 배열에 넣어서 인덱스값을 찾아올 것이기 때문에 0
//   let winner = "";
//   let pickedNumbers = [];
//   for(let i = 0; i < number02.value; i++) {
//     // 재할당
//     let picked;

//     // 당첨인원에서 중복값이 나오지 않도록 하는 함수 = do, while
//     // number01에 넣은값이 중복되면 while문이 실행된다.
//     // 중복되지않으면 그대로 picked값에 출력된다.
//     do {
//       picked = Math.floor(Math.random() * number01.value + 1);
//     } while (pickedNumbers.includes(picked));

//     pickedNumbers.push(picked);
//     winner += `${picked}번`;
//   }

//   result.innerText = `당첨자: ${winner}`;
// });

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const number01 = form.number01.value;
  const number02 = form.number02.value;
  const result = document.querySelector("#result");

  let winner = "";
  let pickedNumbers = [];

  for (let i = 0; i < number02; i++) {
    //let picked = Math.ceil(Math.random() * number01); 라고 해도 됨
    let picked;

    // 중복제거 값이 같으면 계속 picked을 만들어라
    do {
      picked = Math.floor(Math.random() * number01 + 1);
    } while (pickedNumbers.includes(picked));

    pickedNumbers.push(picked);
    winner += `${picked}번 `;
  }

  result.innerText = `${winner}`;
});
