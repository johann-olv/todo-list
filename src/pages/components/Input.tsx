import { TodoContext } from "@/contexts/TodoContext";
import { Plus } from "lucide-react";
import { useContext, useState } from "react";

export const InputTodo = () => {
  const todoCtx = useContext(TodoContext);
  const [inputTask, setInputTask] = useState("");

  const handleAddTask = () => {
    if (!inputTask.trim()) return;
    todoCtx?.dispatch({
      type: "add",
      payload: {
        id: Date.now(),
        text: inputTask,
        completed: false,
      },
    });
    setInputTask("");
  };
  return (
    <div className="w-full flex justify-between gap-5">
      <input
        type="text"
        className="rounded-2xl bg-white-100 dark:bg-[#21262D] text-black dark:text-white-100 p-4"
        placeholder="Escreva sua tarefa"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
      />
      <button
        onClick={handleAddTask}
        disabled={inputTask.trim() === ""}
        className={`p-3 rounded-xl text-white transition 
            ${
              inputTask.trim() === ""
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gray-700 hover:bg-gray-800"
            }`}
      >
        <Plus size={30} />
      </button>
    </div>
  );
};
