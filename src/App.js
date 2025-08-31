import {useState} from "react";
import logo from "./assets/focusMate.png";
import "./App.css";

// Importing components
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import PlantVisualizer from "./components/PlantVisualizer";
import MotivationalQuote from "./components/MotivationalQuote";
import PomodoroTimer from "./components/PomodoroTimer";

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/focusMate.png" alt="FocusMate Logo" />
        <h1>FocusMate</h1>
      </header>
      <main>
        <MotivationalQuote />
        <AddTask addTask={addTask} />
        <TodoList tasks={tasks} removeTask={removeTask} />
        <PlantVisualizer tasks={tasks} />
        <PomodoroTimer />
      </main>
      <footer>
        <p>&copy; 2025 FocusMate. All rights reserved.</p>
      </footer>
    </div>
  );

}

export default App;
