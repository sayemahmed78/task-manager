import { useState } from 'react'
import './App.css'

import Login from "./Login";
import Dashboard from "./Dashboard";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import SearchBar from "./SearchBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Build Task Manager" }
  ]);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title.trim()
    };

    setTasks(prev => [...prev, newTask]);
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  function updateTask(id, newTitle) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  }

  return (
    <div className="app-shell">
      <div className="app-card">
        {isLoggedIn ? (
          <div className="dashboard-panel">
            <Dashboard tasksCount={tasks.length} filteredCount={filteredTasks.length} />

            <div className="task-board">
              <div className="task-board-header">
                <div>
                  <p className="eyebrow">Productivity</p>
                  <h2>Today's focus</h2>
                </div>
                <div className="task-board-pill">{filteredTasks.length} visible</div>
              </div>

              <TaskForm addTask={addTask} />
              <SearchBar search={search} setSearch={setSearch} />
              <TaskList
                tasks={filteredTasks}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            </div>
          </div>
        ) : (
          <Login onLogin={setIsLoggedIn} />
        )}
      </div>
    </div>
  )
}

export default App
