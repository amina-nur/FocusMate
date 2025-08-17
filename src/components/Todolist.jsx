import {react} from 'react';
import {TodoItem} from './components/TodoItem';

function TodoList(){
    return (
        <div>
            <h1> Your To do list</h1>
            <TodoItem />
        </div>
    )
}
export default TodoList;