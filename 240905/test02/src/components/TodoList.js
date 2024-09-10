import React, {useState, useMemo, useContext} from 'react';
import "./TodoList.css";
import TodoItem from './TodoItem';
import { TodoContext } from '../App';

const TodoList = () => {
  const {todo = []} = useContext(TodoContext);
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === "" 
    ? todo 
    : todo.filter((item) => item.content.toLowerCase().includes(search.toLowerCase()));
  };

  // 현재 완료된 일, 헤야할 일 등을 체크해주는 함수
  const analyzeTodo = useMemo(
    () => {
      const totalCount = todo.length;
      const doneCount = todo.filter((item) => item.isDone).length;
      const notDoneCount = totalCount - doneCount;
      return {
        totalCount, 
        doneCount,
        notDoneCount,
      };
    }, [todo]
  );

  const {totalCount, doneCount, notDoneCount} = analyzeTodo;

  return (
    <div className='TodoList'>
      <h4>Todo List👩🏻‍💻</h4>
      <div>
        <div>총 개수: {totalCount} </div>
        <div>완료된 할 일: {doneCount} </div>
        <div>완료하지 못한 일: {notDoneCount} </div>
      </div>
      <input
      value={search} 
      onChange={onChangeSearch} 
      className='searchBar' 
      placeholder='검색어를 입력하세요'
      />
      <div className='list_wrapper'>
        {/* {todo.map((item) => (
          // 여러개의 객체를 하나로 묶어서 보낼때: ... 전개연산자 구문 사용
          <TodoItem key={item.id} {...item}/>
        ))} */}
        {getSearchResult().map((item) => (
            <TodoItem 
            key={item.id} {...item} 
            />
          ))}
      </div>
    </div>
  );
};

// TodoList.defaultProps = {
//   todo: [],
// };

export default TodoList;