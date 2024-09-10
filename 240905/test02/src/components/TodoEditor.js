import React, {useState, useRef, useContext} from 'react';
import "./TodoEditor.css";
import { TodoContext } from '../App';

const TodoEditor = () => {
  const {onCreate} = useContext(TodoContext);
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    // keycode = enter의 키코드가 13
    // 굳이 미우스로 버튼을 누르지 않아도 엔터키만 눌려도 값이 반영되도록
    if (e.keyCode === 13) onSubmit();
  };

  const onSubmit = () => {
    // 값이 들어오지 않은 상태에서 추가버튼이 눌려도 커서의 포커스가 계속 그자리에 머무르도록
    if(!content) {
      inputRef.current.focus();
      return;
    } 
    onCreate(content);
    setContent("");
  };
  
  return (
    <div className='TodoEditor'>
      <h4>새로운 ToDo 작성하기📝</h4>
      <div className='editor_wrapper'>
        <input ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown} 
        placeholder='새로운 ToDo...'
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;