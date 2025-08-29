"use react";
import { Sun } from "lucide-react";
import { DateTime } from "./components/DateTime";
import { InputTodo } from "./components/Input";
import { TodoList } from "./components/TodoList";
import { ThemeSwitch } from "./components/ThemeSwitch";

export const Page = () => {
  return (
    <div className="flex max-w-screen min-h-screen justify-center bg-neutral-300 dark:bg-[#0D1117] ">
      <div className="mt-10 mb-10 w-full max-w-md flex flex-col gap-4 items-center rounded-2xl bg-neutral-200 dark:bg-[#161B22] p-15 shadow-lg">
        <h1 className="text-black dark:text-[#C9D1D9] text-center text-3xl ">
          Os Trampos de hoje!
        </h1>
        <DateTime />
        {/* SWITCH DO TEMA */}
        <ThemeSwitch />
        {/* INPUT DE ADICIONAR TODOS */}
        <InputTodo />
        {/* LISTA DE TODOS */}
        <TodoList />
      </div>
    </div>
  );
};

export default Page;
