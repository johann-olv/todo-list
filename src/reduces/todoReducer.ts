import { Todo } from "@/types/Todo";

type AddAction = {
  type: "add";
  payload: {
    id: number;
    text: string;
    completed: boolean;
  };
};
type ToggleAction = {
  type: "toggle";
  payload: {
    id: number;
  };
};
type RemoveAction = {
  type: "remove";
  payload: {
    id: number;
  };
};

export type TodosActions = AddAction | ToggleAction | RemoveAction;

export const todoReducer = (todos: Todo[], action: TodosActions) => {
  switch (action.type) {
    case "add":
      return [
        ...todos,
        { id: action.payload.id, text: action.payload.text, completed: false },
      ];
    case "toggle":
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "remove":
      return todos.filter((todo) => todo.id !==  action.payload.id);
    default:
      return todos;
  }
};
