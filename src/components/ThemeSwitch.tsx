import { TodoContext } from "@/contexts/TodoContext";
import { Moon, Sun } from "lucide-react";
import { useContext } from "react";

export const ThemeSwitch = () => {
  const todoCtx = useContext(TodoContext);
  const handleThemeToggle = () => {
    if (todoCtx?.setTheme) {
      todoCtx.setTheme(todoCtx.theme === "dark" ? "light" : "dark");
    }
  };
  return (
    <div
      className="fixed top-0 right-0 p-3 text-center cursor-pointer"
      onClick={handleThemeToggle}
    >
      {todoCtx?.theme === "dark" && <Sun size={30} />}
      {todoCtx?.theme === "light" && <Moon color="black" size={30} />}
    </div>
  );
};
