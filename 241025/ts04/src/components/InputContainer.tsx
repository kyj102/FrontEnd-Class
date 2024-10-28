import React, {useState} from 'react'
import ToDoInput from './ToDoInput';
import ShowInputButton from './ShowInputButton';

const InputContainer = () => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onClose = () => {
    // onAdd(todo);
    setShowToDoInput(false); // 할일을 추가하면 자동으로 창이 닫히게 하는 기능을 실행시키기 위해 OnAdd라는 함수를 OnClose로 변환
  };

  return (
    <>
    {showToDoInput && <ToDoInput onClose={onClose} />}
    <ShowInputButton 
    show={showToDoInput} 
    onClick={() => setShowToDoInput(!showToDoInput)} />
    </>
  )
}

export default InputContainer
