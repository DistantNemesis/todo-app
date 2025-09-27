import { useState } from 'react'
import AddTask from './AddTask.jsx'


function TaskList() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  
  return (
    <>
      {showForm ? (
        <AddTask setTasks={setTasks} tasks={tasks} setShowForm={setShowForm} />
      ) : (
        <>
              {tasks.length === 0 ? (
                <p>No tasks are in your to-do list &#128077;</p>
              ) : (
              <Filter filter={filter} tasks={tasks} />
              )}
            <div>
                <button className="click-button" onClick={addTask}>Add Task</button>
                <select id="select-task" className="select-task-button" onChange={handleFilterChange}>
                  <option value="all"> View All Tasks</option>
                  <option value="completed"> View Completed Tasks</option>
                  <option value="active"> View Active Tasks</option>
                </select>
            </div>
        </>
      )}
    </>
  )
  function addTask() {
    setShowForm(true);
  }

  function handleFilterChange() {
    setFilter(document.getElementById("select-task").value);
  }
  function Filter({filter}) {
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
            <div className="task-item" >
              <input type="checkbox" checked={task.taskCompleted} onChange={() => toggleTaskCompletion(task.taskID, setTasks)}/>
              <div>
                <p>Task: {task.taskName}</p>
              </div>
              <div>
                <p>Due Date: {task.taskDueDate}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
    function toggleTaskCompletion(id) {
      const filteredTasks = tasks.map(task => task.taskID === id ? {...task, taskCompleted: !task.taskCompleted} : task);
      console.log("toggling:", id);
      setTasks(filteredTasks);
    }
  }
}
export default TaskList
