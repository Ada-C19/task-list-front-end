import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from "react";

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  // const newTasks = tasks.map((task) => {
  //   if (task.id === id) {
  //     const updateTask = {...task};
  //   }
  //   return updateTask
  // })
  const handleToggleComplete = (taskId) => {
    const newTasks = tasks.map((task) => {
      return (task.id === taskId) ? {...task, isComplete: !task.isComplete} : task;
    });
    setTasks(newTasks);
    console.log(newTasks);
};

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter(
      (task) => task.id !== taskId
    );
    setTasks(newTasks);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={tasks}
        handleToggleComplete ={handleToggleComplete}
        handleDeleteTask={handleDeleteTask}
        />
        </div>
      </main>
    </div>
  );
};

export default App;
