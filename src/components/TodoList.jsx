import AddTaskForm from "./AddTaskForm";
import TodoItem from "./TodoItem";
import './App.css';
import { useState } from "react";


function TodoList({tasks, setTasks}) {
  const [todo, setTodos] = useState([]);


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

    return (
      <ul className="todo-list">
  {tasks.map((task) => (
    <li key={task.id} className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTodo(task.id)}
      />
      <span className={task.completed ? "completed" : ""}>{task.text}</span>
      <button onClick={() => deleteTodo(task.id)}>Delete</button>
    </li>
  ))}
</ul>
    );
  }
export default TodoList;