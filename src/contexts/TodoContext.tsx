import { todoReducer, TodosActions } from "@/reduces/todoReducer";
import { Todo } from "@/types/Todo";
import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";

type TodoContextType = {
  todos: Todo[];
  dispatch: Dispatch<TodosActions>;
  theme: string;
  setTheme: (newTheme: string) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === 'dark') {
        document.documentElement.classList.add("dark");
    } else {
       document.documentElement.classList.remove("dark")
    }
  },[theme])
  return (
    <TodoContext.Provider value={{ todos, dispatch,setTheme,theme }}>
      {children}
    </TodoContext.Provider>
  );
};
