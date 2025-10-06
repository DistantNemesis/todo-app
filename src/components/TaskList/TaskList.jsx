import { useState, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";

function TaskList({tasks, setTasks, filter}) {

  const [openTaskMenuId, setOpenTaskMenuId] = useState(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (!event.target.closest(".task-options-button") && !event.target.closest(".task-options-content")) {
        setOpenTaskMenuId(null);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);


  if (tasks.length === 0) {
    console.log("No tasks found");
    return <p>No tasks are in your to-do list &#128077;</p>
  }
  
    let filteredTasks = [...tasks];
    if(filter === 'active') {
      filteredTasks = filteredTasks.filter(task => !task.taskCompleted);
      if(filteredTasks.length === 0) {
        console.log("No active tasks found");
        return <p>No active tasks remaining &#128077;</p>
      }
    }
    else if(filter === 'completed') {
      filteredTasks = filteredTasks.filter(task => task.taskCompleted);
      if(filteredTasks.length === 0) {
        console.log("No completed tasks found");
        return <p>No completed tasks yet &#128577;</p>
      }
    }
    filteredTasks.sort((a, b) => a.taskDueDate.localeCompare(b.taskDueDate));

    return (
      <ul className = "task-list">
        {filteredTasks.map((task) => (
          <li key={task.taskID}>
            <div className="task-item">
              <input className ="completion-checkbox" type="checkbox" checked={task.taskCompleted} onChange={() => toggleTaskCompletion(task.taskID, setTasks)}/>
              <div>
                <p className ={task.taskCompleted ? "completed-task-name" : "incomplete-task-name"} > Task: {task.taskName} </p>
              </div>
              <div>
                <p>Due Date: {task.taskDueDate}</p>
              </div>
              <div className="task-options-div">
                <button className="task-options-button" onClick={() => handleTaskMenuClick(task.taskID)}><BsThreeDots /></button>

                {openTaskMenuId === task.taskID && (
                  <div className="task-options-content">
                    <button onClick={() => handleEditTask(task.taskID)}> Edit </button>
                    <button onClick={() => handleDeleteTask(task.taskID)}> Delete </button>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    );

  function toggleTaskCompletion(id) {
    const filteredTasks = tasks.map(task => task.taskID === id ? {...task, taskCompleted: !task.taskCompleted} : task);
    console.log("toggling:", id);
    setTasks(filteredTasks);
  }

  function handleTaskMenuClick(id) {
    if (openTaskMenuId === id) {
      setOpenTaskMenuId(null);
      console.log("toggling off menu for task ", id);
    }

    else {
      setOpenTaskMenuId(id);
      console.log("toggling on menu for task ", id);
    }
  }

  function handleEditTask(id) {
    console.log("editing task ", id);
    // Implement edit functionality here
  }
  
  function handleDeleteTask(id) {
    console.log("deleting task ", id);
    const filteredTasks = tasks.filter(task => task.taskID !== id);
    setTasks(filteredTasks);
  }

}
export default TaskList
