import { atom } from "recoil";

interface ToDoState {
  [key: string]: string[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    ToDo: ["a", "b"],
    Doing: ["c", "d", "e"],
    Done: ["F"],
  }
});