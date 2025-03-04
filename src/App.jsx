import "./App.css";
import { Button } from "react-bootstrap";
import TodoList from "./components/TodoList.jsx";
import { defaultTodos } from "./data";

function App() {
  console.log(defaultTodos);

  return (
    <div className="container">
      <h1>Todo App Example</h1>
      <Button className="mt-2 mb-2">Add Todo</Button>
      <TodoList todos={defaultTodos} />
    </div>
  );
}
//notes
export default App;
