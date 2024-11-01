import { atom, selector } from "recoil";

export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TODO,
})

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
})

// selector : 배열의 값이 변경되었을 때, 값을 전달하기 전에 모체 자체의 값을 업데이트시켜 변환시켜주는 함수
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({get}) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  }
})