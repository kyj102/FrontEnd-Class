import { createContext } from "react";
import { useState } from "react";

// 보내줄 값에 대한 타입정의
interface Context {
  toDoList: string[];
  onAdd: (todo: string) => void;
  onDelete: (todo: string) => void;
}
// 자식요소들에게 보내줄 값에 대한 정의 역할
const ToDoListContext = createContext<Context> ({
  toDoList: [],
  onAdd: (): void => {},
  onDelete: (): void => {},
})

// 실제 자식요소들에게 값을 전달할 역할을 할 컴포넌트 함수정의
interface Props {
  children: JSX.Element | JSX.Element[];
}

const ToDoListContextProvider = ({children}: Props) => {
  const [toDoList, setToDoList] = useState([
    "TypeScript 복습하기",
    "Next.js 예습하기", 
    "Node.js 공부하기",
  ]);

  const onAdd = (todo: string) => {
    setToDoList([todo, ...toDoList]);
  };

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  return (
    <ToDoListContext.Provider value={{toDoList, onAdd, onDelete}}>
      {children}
    </ToDoListContext.Provider>
  )
};

export {ToDoListContext, ToDoListContextProvider};