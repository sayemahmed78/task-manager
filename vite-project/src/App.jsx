import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Login from "./Login";
import Dashboard from "./Dashboard";
// import TaskForm from "./TaskForm";
// import TaskList from "./TaskList";
// import SearchBar from "./SearchBar";

function App() {
const [count, setCount] = useState(0)

const [isLoggedIn, setIsLoggedIn] = useState(false);
const [search, setSearch] = useState("");


const [tasks, setTasks] = useState([
  
    
  ]);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  
  
  // CREATE
  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title
    };

    setTasks([...tasks, newTask]);
  }

  // DELETE
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  // UPDATE
  function updateTask(id, newTitle) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, title: newTitle }
          : task
      )
    );
  }
  
  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
  };

  return (
    <div style={styles.main}>

   <div>

      <h1>Task Manager</h1>

      {/* <TaskForm addTask={addTask} />

       <SearchBar
        search={search}
        setSearch={setSearch}
      />

     

       <TaskList
        tasks={filteredTasks}
      /> */}

    </div>



    {
        isLoggedIn ?

        <Dashboard />

        :

        <Login
          onLogin={setIsLoggedIn}
        />

      }




      
    </div>
  )
}

export default App
