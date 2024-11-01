import React from 'react'
import styled from 'styled-components'
import { useRecoilValue , useRecoilState} from 'recoil';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import { toDoSelector, categoryState, Categories } from './atom';

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;

const Title = styled.h1`
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  }

  return (
    <Container>
      <Title>ToDo List</Title>
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>TODO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDoItem) => (
        <ToDo key={toDoItem.id} {...toDoItem} />
      ))}
    </Container>
  );}

export default ToDoList
