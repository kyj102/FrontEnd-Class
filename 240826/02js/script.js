const form = document.querySelector("form");
const todoItem = document.querySelector("#todoItem");
const todos = document.querySelector(".todos");

// 로컬스토리지의 데이터값을 자동으로 읽어오도록
const getLocal = () => {
  let todosContainer;

  if(localStorage.getItem("todos") === null) todosContainer = [];
  else todosContainer = JSON.parse(localStorage.getItem("todos"));

    todosContainer.forEach((todo) => {
    const newLi = document.createElement("li");
    newLi.className = "todo";     // newLi에 클래스값 부여하기
    const newSpan = document.createElement("span");
    newSpan.className = "todoContent";
    newSpan.innerText = todo;
  
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "완료";
    completeBtn.className = "completeBtn";
  
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "삭제";
    deleteBtn.className = "deleteBtn";
  
    newLi.append(newSpan, completeBtn, deleteBtn);
    todos.appendChild(newLi);
    todoItem.value = "";    // 값 입력시 위의 인풋박스 빈칸으로 만들기
  });
};

// 웹브라우저의 컨텐츠가 모두 로딩되면 다음과 같은 함수를 실행시켜라
document.addEventListener("DOMContentLoaded", getLocal);

// 사용자가 입력한 값을 컬스토리지에 인자값 데이터 저장하기
const saveLocal = (todo) => {
  let todos;

  if(localStorage.getItem("todos") === null) todos = [];
  else todos = JSON.parse(localStorage.getItem("todos"));

  // todos의 자료형태를 배열로 만들어서 브라우저가 인식할 수 있는 형태로 가져오기
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

// ui영역에서 데이터가 추가되도록 하는 함수
const addTodo = (e) => {
  e.preventDefault();

  if (todoItem.value !== "") {
    const newLi = document.createElement("li");
      newLi.className = "todo";     // newLi에 클래스값 부여하기
    
      const newSpan = document.createElement("span");
      newSpan.className = "todoContent";
      newSpan.innerText = todos;
    
      const completeBtn = document.createElement("button");
      completeBtn.className = "completeBtn";
      completeBtn.innerText = "완료";
    
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "deleteBtn";
      deleteBtn.innerText = "삭제";
    
      newLi.append(newSpan, completeBtn, deleteBtn);
      saveLocal(todoItem.value);
      todos.appendChild(newLi);
      todoItem.value = "";    // 값 입력시 위의 인풋박스 빈칸으로 만들기
  }
};


// 삭제버튼을 눌렀을때 실행될 이벤트함수 부여
const removeLocal = (todo) => {
  let todosItem;
  if(localStorage.getItem("todos") === null) todosItem = [];
  else todosItem = JSON.parse(localStorage.getItem("todos"));

  const index = todosItem.indexOf(todo.children[0].innerText);
  todosItem.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todosItem));
};

// 완료버튼, 삭제버튼을 눌렀을때 실행될 이벤트함수 부여
const manageTodo = (e) => {
  const whichButton = e.target.classList[0];   // [0] = 텍스트
  if(whichButton === "completeBtn") {
    // 선택한 버튼의 부모요소 찾아오기
    const todoItem = e.target.parentElement;
    // 해당 요소의 자식요소를 인덱스값으로 찾아오게끔 해주는 속성
    todoItem.children[0].classList.toggle("completed");
  } else if(whichButton === "deleteBtn") {
    const todoItem = e.target.parentElement;
    removeLocal(todoItem);
    todoItem.remove();
  }
};

todos.addEventListener("click", manageTodo);
form.addEventListener("submit", addTodo);

const item = {
  text: todos.value,
  id: Date.now(),
  completed: false,
};