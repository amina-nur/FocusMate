import React from "react";

function AddTaskForm() {
  return (
    <form>
      <input type="text" placeholder="Add a new task" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTaskForm;