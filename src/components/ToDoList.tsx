import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

interface ICateData {
  newCategory: string;
}

function ToDoList() {
  const setCategories = useSetRecoilState(toDoState);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  const { register, handleSubmit, setValue } = useForm<ICateData>();
  const OnValid = ({ newCategory }: ICateData) => {
    setCategories((prev) => {
      return {
        ...prev,
        [newCategory]: [],
      };
    });
    setValue("newCategory", "");
    useEffect(() => {
      localStorage.setItem("category", JSON.stringify(newCategory));
    });
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <form onSubmit={handleSubmit(OnValid)}>
        <input
          {...(register("newCategory"), { required: true })}
          id="newCategory"
          type="text"
        ></input>
        <button>만들기</button>
      </form>
      <CreateToDo></CreateToDo>
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
