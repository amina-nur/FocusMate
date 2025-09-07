import { useState } from 'react';

function AddTaskForm() {
   const [text, setText] = useState("");
    
   const handleSubmit = (e) => { e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText(""); }  

  
  return (
    <form onSubmit={handleSubmit} className='flex justify-center gap-2 mb-4'>
      <input className='border border-gray-300 rounded px-2 py-1 w-64'
      type="text" 
      placeholder="Add a new task" 
      onChange={(e) => setText(e.target.value)}/>
      <button className="bg-blue-500 text-white px-4 py-1 rounded"
      type="submit">Add</button>
    </form>
  );
}

export default AddTaskForm;