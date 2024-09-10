import React, { useContext } from 'react';
import "./TodoItem.css";
import { TodoContext } from '../App';

const TodoItem = ({id, isDone, content, createdDate}) => {
  // console.log(`${id}TodoItem 업데이트`)
  const {onUpdate, onDelete} = useContext(TodoContext);
  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <div className='TodoItem'>
      <div className='checkBox_col'>
        <input checked={isDone} type='checkbox' onChange={onChangeCheckBox}/>
      </div>
      <div className='title_col'>{content}</div>
      <div className='date_col'>{new Date(createdDate).toLocaleDateString()}</div>
      <div className='btn_col'>
        <button onClick={onClickDelete}>삭제</button>
        </div>
    </div>
  );
};

export default React.memo(TodoItem);