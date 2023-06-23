import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];
const API = 'https://task-list-api-c17.onrender.com/tasks';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const handlePostTask = () => {
    axios
    .post(`${API}`,{title: 'sleep deep',
    description: 'desc',})
    .then((result) => {
      console.log(result.data);
      axios.get(API)
          .then((result) => {
            setTasks(result.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
    });

  };

  useEffect(() => {
    axios.get(API)
      .then((result) => {
        setTasks(result.data);
        handlePostTask();
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);
  
  // const newTasks = tasks.map((task) => {
  //   if (task.id === id) {
  //     const updateTask = {...task};
  //   }
  //   return updateTask
  // })

  const handleToggleComplete = (taskId, task) => {
    let type = '';
    if (task.isComplete) {
      type = 'mark_incomplete';
    } else {
      type = 'mark_complete';
    }
    axios
      .patch(`${API}/${taskId}/${type}`)
      .then((result) => {
        console.log(result.data);
        axios
          .get(API)
          .then((result) => {
            setTasks(result.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('handleToddleComplete called');};
    // const newTasks = tasks.map((task) => {
    //   return (task.id === taskId) ? {...task, isComplete: !task.isComplete} : task;
    // });

    // setTasks(newTasks);
    // console.log(newTasks);
// };

  const handleDeleteTask = (taskId) => {
    axios.delete(`${API}/${taskId}`)
    .then((result) => {
      console.log(result.data);
      const newTasks = [];
      for (let task of tasks) {
        if (task.id !== taskId){
          newTasks.push(task);
        }
      }
      setTasks(newTasks);
    })
    .catch((err) => {
      console.log(err);
  });
  };
  //   const newTasks = tasks.filter(
  //     (task) => task.id !== taskId
  //   );
  //   setTasks(newTasks);
  // };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={tasks}
        handleToggleComplete ={handleToggleComplete}
        handleDeleteTask={handleDeleteTask}
        handlePostTask={handlePostTask}
        />
        </div>
      </main>
    </div>
  );};
export default App;
