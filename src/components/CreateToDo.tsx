import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IFormData {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IFormData>();

  const HandleValid = ({ toDo }: IFormData) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");

    useEffect(() => {
      localStorage.setItem("toDos", JSON.stringify(toDo));
    });
  };
  return (
    <form onSubmit={handleSubmit(HandleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a TO DO",
        })}
        placeholder="Write a to do"
      />

      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
