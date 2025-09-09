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
  const [tasks, setTasks] = useState([]);

  // Task handlers
  const addTask = (text) => {
    const newTask = { id: Date.now(), text: text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };


  // Local storage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
   <header className="App-header">
  <div className="header-container">
    <img src="/focusMate.png" alt="FocusMate Logo" className="logo" />
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/timer">Pomodoro</Link>
      <Link to="/visualizer">Visualizer</Link>
    </nav>
  </div>
  </header>

    <Routes>
      <Route
      path="/"
      element={<div className="home-bg">
      <h1>Welcome to FocusMate!</h1>
    </div>
      }
        />

        {/* Todo list page (with quote and form) */}
        <Route
          path="/tasks"
          element={
            <div>
              <MotivationalQuote />
              <AddTaskForm onAdd={addTask} />
              <TodoList tasks={tasks} setTasks={setTasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
              </div>
            }
            />

        {/* Pomodoro timer page */}
        <Route path="/timer" element={<PomodoroTimer />} />

        {/* Plant visualizer page */}
        <Route path="/visualizer" element={<PlantVisualizer tasks={tasks} />} />
      </Routes>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 FocusMate. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;

