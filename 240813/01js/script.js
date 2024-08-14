// ----------------------DOM--------------------------
// 1.사용자로부터 input태그를 통해 입력값을 받는다.

// 2. 입력값이 확인되면, ul태그 자식요소로 하나씩 추가해준다.

// 3. ul태그 자식요소 중 삭제버튼을 클릭했을 때, 버튼을 포함하고 있는 li 부모요소를 확인 후 같이 삭제해준다.

// ----------------------로컬스토리지--------------------------
// 4. 사용자가 입력한 값이 영구적으로 보관될 수 있도록 localstorage를 활용해서 값을 저장시킨다.

// 5. 사용자가 값을 입력하면 다이렉트로 UI화면에 출력되는 것이 아니라, 이제부터는 localstorage 안에 저장된 값을 찾아와서 UI화면애 출력시키도록 한다.

// 6. 삭제버튼을 클릭한다면, 직접적으로 UI화면 내 값을 삭제해주는 것이 아니라, localstorage값을 먼저 삭제 후 업데이트된 값을 UI화면에 출력시켜준다.

const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const ul = document.querySelector("ul");

// 빈 배열의 형태 : 최초의 값이 아무것도 없는 상태에서 시작하기 위함
let todos = [];

const save = () => {
  // JSON의 문자열데이터를 개발자도구에 텍스트객체로 변환시켜주는것
  localStorage.setItem(`todos`, JSON.stringify(todos));
};

const delItem = (e) => {
  const target = e.target.parentElement;
  // 배열 안의 특정 데이터 제거 (filter) : 가장 쉽고 보편화된 방법
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
};

const addItem = (todo) => {
  if(todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span")
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = `삭제`;
    button.addEventListener("click", delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

const handler = (e) => {
  e.preventDefault();

  const todo = {
    id: Date.now(),
    text: input.value,
  };

  todos.push(todo);
  addItem(todo);
  save();
  input.value = "";
};

// 초기화 함수 : 로컬스토리지에 값이 존재한다면 그 값을 일단 출력시킨 후 시작해라.
const init = () => {
  // JSON데이터를 객체로 가져오기 위함(키값이 필요)
  const userTodos = JSON.parse(localStorage.getItem(`todos`));
  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
  }

  todos = userTodos;
};

init();

form.addEventListener("submit", handler);

// // 로컬스토리지에 데이터를 저장하고 가져오는 방법
// localStorage.setItem("Hello", "World");
// const myData = localStorage.getItem("Hello");
// console.log(myData);