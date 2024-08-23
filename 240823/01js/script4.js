const order = new Promise((resolve, reject) => {
const coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
const result = document.querySelector("#result");

  //예외조항처리
  if(coffee != null && coffee != "") {
    result.innerText = `${coffee} 주문접수!`;
    setTimeout(() => {
      resolve(coffee);  // 인자값이 정상적으로 입력되었을때 실행되는 resolve함수
    }, 3000);
  } else {
    reject("커피를 주문하지 않았습니다!");  // 인자값이 정상적으로 입력되지 않았을때 실행되는 reject함수
  }
});

const display = (coffee) => {
  const end = document.querySelector("#end");
  end.innerText = `${coffee} 준비완료!`;
  end.classList.add("active");
  result.classList.add("done");
};

const showErr = (err) => {
  console.log(err);
};

order.then(display).catch(showErr);

console.log(order)
