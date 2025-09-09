import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

// Importing components
import TodoList from "./components/TodoList";
import PlantVisualizer from "./components/PlantVisualizer";
import PomodoroTimer from "./components/PomodoroTimer";
import MotivationalQuote from "./components/MotivationalQuote";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [tasks, setTasks] = useState([]);

  //Todo handlers
  const addTodo = (task) => {
    const newTodo = { id: Date.now(), text: task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // task handlers
  const addTask = (task) => {
    const newTask = { id: Date.now(), text: task };
    setTasks([...tasks, newTask]);
  };

  // Local storage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <header className="App-header">
        <img src="/focusMate.png" alt="focusMate Logo" />
        <h1>FocusMate</h1>
        <p>Your companion for focused work and growth</p>
      </header>
      {/* Navbar */}
      <nav className="flex gap-6 p-4 bg-gray-200">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/timer">Pomodoro</Link>
        <Link to="/visualizer">Plant Visualizer</Link>
      </nav>

      {/* Routes */}
      <Routes>
        {/* Home page */}
        <Route path="/" element={<h1>Welcome to FocusMate!</h1>} />

        {/* Task list page (with quote and form) */}
        <Route
          path="/tasks"
          element={
            <div>
              <MotivationalQuote />
              <AddTaskForm onAdd={addTask} />
              <TodoList tasks={tasks} setTasks={setTasks} />
            </div>
          }
        />

        {/* Pomodoro timer page */}
        <Route path="/timer" element={<PomodoroTimer />} />

        {/* Plant visualizer page */}
        <Route path="/visualizer" element={<PlantVisualizer todos={todos} />} />
      </Routes>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 FocusMate. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;

