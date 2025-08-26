import "@/styles/globals.css";
import { TodoProvider } from "@/contexts/TodoContext";
import Page from "./Page";


export default function App() {
  return (
    <TodoProvider>
      <Page />
    </TodoProvider>
  );
}
