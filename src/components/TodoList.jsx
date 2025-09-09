import MotivationalQuote from "./MotivationalQuote";
import { useState } from "react";
import "./App.css";


function TodoList({ tasks, deleteTask, toggleTask }) {
  const [tasks, setTasks] = useState([]);

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
    return (
    <div className="todo-container">
      <MotivationalQuote /> {/* Shows quote above the list */}
      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className="todo-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className={task.completed ? "completed" : ""}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;