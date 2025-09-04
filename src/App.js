import {useState} from "react";
import { useEffect } from "react";
import "./App.css";

// Importing components
import AddTaskForm from "./components/AddTaskForm";
import Todolist from "./components/Todolist";
import PlantVisualizer from "./components/PlantVisualizer";
import MotivationalQuote from "./components/MotivationalQuote";
import PomodoroTimer from "./components/PomodoroTimer";

function App() {
  const [todo, setTodos] = useState([]);
  
  const addTodo = (task) => {
    const newTodo = { id: Date.now(), text: task, completed: false };
    setTodos([...todo, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todo.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  // Load saved todos on first render
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  // Save todos whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);


  return (
    <div className="App">
      <header className="App-header">
        <img src="/focusMate.png" alt="focusMate Logo" />
        <h1>FocusMate</h1>
      </header>
      <main>
        <MotivationalQuote />
        <AddTaskForm addTask={addTask} />
        <Todolist todos= {todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        <PlantVisualizer task={todo} />
        <PomodoroTimer />
      </main>
      <footer>
        <p>&copy; 2025 FocusMate. All rights reserved.</p>
      </footer>
    </div>
  );

}

export default App;
