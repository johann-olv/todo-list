import { TodoContext } from "@/contexts/TodoContext";
import { Square, SquareCheck, Trash2 } from "lucide-react";
import { useContext } from "react";

export const TodoList = () => {
  const todoCtx = useContext(TodoContext);
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
  };

  return (
    <>
      {todoCtx?.todos.length === 0 ? (
        <p className="text-gray-400 italic">Nenhum trampo ainda!</p>
      ) : (
        <>
          {todoCtx?.todos.map((item) => (
            <div
              key={item.id}
              className="bg-amber-50 dark:bg-[#21262D] w-full p-4 rounded-2xl "
            >
              <div className="flex items-center justify-between gap-10 text-white dark:text-black">
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
                      <h1 className="break-all line-through text-black dark:text-white-100">
                        {item.text}
                      </h1>
                    </>
                  ) : (
                    <>
                      {todoCtx?.theme === "dark" && (
                        <Square
                          className="cursor-pointer flex-shrink-0"
                          color="#FAF9F6"
                          size={30}
                        />
                      )}
                      {todoCtx?.theme === "light" && (
                        <Square
                          className="cursor-pointer flex-shrink-0"
                          color="#000000"
                          size={30}
                        />
                      )}

                      <h1 className="break-all text-black dark:text-white-100">
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
    </>
  );
};
