function TaskList({ tasks, deleteTask, updateTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <div className="empty-state">No tasks match this view yet.</div>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="task-item">
            <div className="task-title">{task.title}</div>

            <div className="task-actions">
              <button
                className="icon-button"
                onClick={() => {
                  const newTitle = prompt("Edit task", task.title);

                  if (newTitle && newTitle.trim()) {
                    updateTask(task.id, newTitle.trim());
                  }
                }}
              >
                ✎
              </button>

              <button className="icon-button danger" onClick={() => deleteTask(task.id)}>
                ✕
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;