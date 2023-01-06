import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./components/CreateToDo";
import ToDo from "./components/ToDo";
import { Categories, categoryState, toDoSelector } from "./components/atoms";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>ToDos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      <ul>
        {toDos?.map((toDo) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default ToDoList;
