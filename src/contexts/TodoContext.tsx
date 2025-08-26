import { todoReducer, TodosActions } from "@/reduces/todoReducer";
import { Todo } from "@/types/Todo";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";

type TodoContextType = {
  todos: Todo[];
  dispatch: Dispatch<TodosActions>;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
