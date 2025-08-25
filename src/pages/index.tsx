"use react";
import { Trash2, Circle, CircleCheckBig, CirclePlus } from "lucide-react";
import { useState } from "react";
type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export const Page = () => {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = () => {
    if (!inputTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: inputTask, completed: false }]);
    setInputTask("");
    console.log(tasks);
  };

  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    console.log(tasks);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-900">
      <div className="w-full max-w-md flex flex-col gap-4 items-center rounded-2xl bg-neutral-800 p-15 shadow-lg">
        <h1 className="text-white text-2xl mb-1">Lista de Tarefas</h1>
        {/* INPUT DE ADICIONAR TUDOS */}
        <div className="flex justify-around gap-5">
          <input
            type="text"
            className="rounded-2xl bg-amber-100 text-black p-4"
            placeholder="Escreva sua tarefa"
            onChange={(e) => setInputTask(e.target.value)}
          />
          <button
            onClick={handleAddTask}
            className="cursor-pointer rounded-2xl bg-neutral-200 p-4 text-sm text-black shadow hover:bg-white"
          >
            <CirclePlus size={30} />
          </button>
        </div>
        {/* LISTA DE TODOS */}
        {tasks?.map((item) => (
          <div key={item.id} className="bg-neutral-200 w-full p-4 rounded-2xl ">
            <div className="flex items-center justify-between gap-10 text-black">
              <div
                onClick={() => handleToggleTask(item.id)}
                className="flex items-center gap-2 text-lg"
              >
                <CircleCheckBig
                  className="cursor-pointer"
                  color="#00FF00"
                  size={30}
                />
                <h1 className="break-all">{item.text}</h1>
              </div>
              <button
                onClick={() => handleRemoveTask(item.id)}
                className="cursor-pointer"
              >
                <Trash2 color="red" size={30} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
