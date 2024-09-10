import './App.css';
import React, { useRef, useReducer, useCallback} from 'react';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
// import TestComp from './components/TestComp';

export const TodoContext = React.createContext();

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Javascript 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "여행가기",
    createdDate: new Date().getTime(),
  },
];

const reducer = (state, action) => {
  switch(action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE" : {
      return state.map((item) => item.id === action.targetID ? 
      {...item, isDone: !item.isDone} : item)
    };
    case "DELETE" : {
      return state.filter((item) => item.id !== action.targetID);
    }
    default :
    return state;
  }
};

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  // 추가버튼이 눌러졌을때 실행될 함수
  const onCreate = useCallback(
        (content) => {
      dispatch({
        type: "CREATE",
        newItem: {
          id: idRef.current,
          isDone: false,
          content,
          createdDate: new Date().getTime(),
        },
      });
      // 전개연산자 구문을 이용해 기존값은 배열의 형태로 분리해서 유지시키고 새 값을 객체 형태로 추가시킨다.
      // setTodo([newItem, ...todo]);
      // 복합대입연산자 구문을 이용해 최초생성된 고정값은 유지시키고 그 후의 변경값도 반영한다.
      idRef.current += 1;
    }, []);

  const onUpdate = useCallback(
    (targetID) => {
      dispatch({
        type: "UPDATE",
        targetID, 
      });
    }, []);

  // filter => 배열아이템 => 필터링
  const onDelete = useCallback(
    (targetID) => {
      dispatch({
        type: "DELETE",
        targetID,
      });
    }, []);

  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      <TodoContext.Provider value={{todo, onCreate, onUpdate, onDelete}}>
      <TodoEditor/>
      <TodoList />
      </TodoContext.Provider>
    </div>
  );
};

export default App;