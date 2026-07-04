import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "") return;

    addTask(title);
    setTitle("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Enter a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit" className="button button-secondary">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;