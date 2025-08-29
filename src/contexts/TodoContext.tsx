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
const STORAGE_KEY = "todoContextKey";
export const TodoContext = createContext<TodoContextType | null>(null);


export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
   const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === 'dark') {
        document.documentElement.classList.add("dark");
    } else {
       document.documentElement.classList.remove("dark")
    }
  },[theme])

   useEffect(() => {
    const storedTodo = localStorage.getItem(STORAGE_KEY);
    if (storedTodo) {
      const parsed: Todo[] = JSON.parse(storedTodo);
      dispatch({ type: "setAll", payload: parsed });
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, isMounted]);
  
  return (
    <TodoContext.Provider value={{ todos, dispatch,setTheme,theme }}>
      {children}
    </TodoContext.Provider>
  );
};
