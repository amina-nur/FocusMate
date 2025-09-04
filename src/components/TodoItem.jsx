function TodoItem({todo, onToggle, onDelete}) { 
    return (
        <div>
            <li>
            <input type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            />
            {todo.text}
            <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
            onClick={() => onDelete(todo.id)}>Delete</button>
            </li>
            </div>
    );
}

export default TodoItem;
