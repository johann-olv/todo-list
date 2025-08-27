"use react";
import { TodoContext, TodoProvider } from "@/contexts/TodoContext";
import { Trash2, Square, SquareCheck, CirclePlus, Moon,Sun } from "lucide-react";
import { useContext, useState } from "react";
type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export const Page = () => {
  const todoCtx = useContext(TodoContext);

  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

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

  const handleRemoveTask = (id: number) => {
    todoCtx?.dispatch({
      type: "remove",
      payload: {
        id,
      },
    });
  };
  const handleToggleTask = (id: number) => {
    todoCtx?.dispatch({
      type: "toggle",
      payload: {
        id,
      },
    });
    console.log(todoCtx?.todos);
  };

  return (
    <div className="flex max-w-screen min-h-screen justify-center bg-[#0D1117]">
      <div className="mt-10 mb-10 w-full max-w-md flex flex-col gap-4 items-center rounded-2xl bg-[#161B22] p-15 shadow-lg">
        <h1 className="text-[#C9D1D9] text-3xl ">Os Trampos de hoje!</h1>
        <p className="text-gray-400 italic mb-1">25 novembro de 2025 - 18:33</p>
        {/* INPUT DE ADICIONAR TODOS */}
        <div className="w-full flex justify-between gap-5">
          <input
            type="text"
            className="rounded-2xl bg-[#21262D] text-white-100 p-4"
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
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            <CirclePlus size={30} />
          </button>
        </div>
        {/* LISTA DE TODOS */}
        {todoCtx?.todos.length === 0 ? (
          <p className="text-gray-400 italic">Nenhuma tarefa ainda!</p>
        ) : (
          <>
            {todoCtx?.todos.map((item) => (
              <div
                key={item.id}
                className="bg-[#21262D] w-full p-4 rounded-2xl "
              >
                <div className="flex items-center justify-between gap-10 text-black">
                  <div
                    onClick={() => handleToggleTask(item.id)}
                    className="flex items-center gap-2 text-lg "
                  >
                    {item.completed ? (
                      <>
                        <SquareCheck
                          className="cursor-pointer flex-shrink-0"
                          color="#57cc99"
                          size={30}
                        />
                        <h1 className="break-all line-through text-white-100">
                          {item.text}
                        </h1>
                      </>
                    ) : (
                      <>
                        <Square
                          className="cursor-pointer flex-shrink-0"
                          color="#FAF9F6"
                          size={30}
                        />
                        <h1 className="break-all text-white-100">
                          {item.text}
                        </h1>
                      </>
                    )}
                  </div>
                  <button
                    onClick={() => handleRemoveTask(item.id)}
                    className="cursor-pointer"
                  >
                    <Trash2 color="#F85149" size={30} />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
