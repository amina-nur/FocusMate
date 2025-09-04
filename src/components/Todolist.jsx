import AddTaskForm from "./AddTaskForm";
import TodoItem from "./TodoItem";
import { useState } from "react";


function TodoList(){
  const [todo, setTodos] = useState([
    ]);

  const addTodo = (task) => {
    const newTodo = { 
      id: Date.now(),
       text: task,
        completed: false };
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

    return (
        <div>
            <h1> Your To do list</h1>
              <AddTaskForm addTask={addTask} />
              {todo.length === 0 && <p>No tasks added yet!</p>}
              
              <ul>
              {todo.map((t) => (
              <TodoItem key ={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
               />
              ))}
              </ul>
        </div>
    )
}
export default TodoList;