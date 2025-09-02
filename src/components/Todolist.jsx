import React from 'react';
import TodoItem from './TodoItem';
import {useState} from "react";

function TodoList(){
    const [tasks, setTasks] = useState([]);
      
      const addTask = (task) => {
        setTasks([...tasks, task]);
      };
    
      const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
      };

    return (
        <div>
            <h1> Your To do list</h1>
            <TodoItem />
        </div>
    )
}
export default TodoList;