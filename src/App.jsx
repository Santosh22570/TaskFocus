
import Taskform from "./Components/Taskform";
import TaskList from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";
import "./Style.css";


export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => { 
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
  if (!task.text || !task.text.trim()) {
    alert("Please enter a task");
    return; // ✅ IMPORTANT (stop execution)
  }

  setTasks([...tasks, task]);
};

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask); // sretTasks is used to give newtask to tasks
  }

  const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i != index));
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return(
    <div className="App">
      <header>
      <h1 className="title">Task Focus</h1>
      <p className="tagline">Friendly TaskManager</p>
      </header>
      <Taskform addTask = {addTask}/>
      <TaskList tasks = {tasks} 
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>

      {tasks.length>0 && 
      (<button onClick={clearTasks} className="clear-btn">Clear all tasks</button>)}
      
    </div>
  )
}

