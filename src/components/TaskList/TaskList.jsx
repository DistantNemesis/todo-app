import { BsThreeDots } from "react-icons/bs";

function TaskList({tasks, setTasks, filter}) {

  if (tasks.length === 0) {
    console.log("No tasks found");
    return <p>No tasks are in your to-do list &#128077;</p>
  }
  
  else {
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
              <input className ="completion-checkbox" type="checkbox" checked={task.taskCompleted} onChange={() => toggleTaskCompletion(task.taskID, setTasks)}/>
              <div>
                <p>Task: {task.taskName}</p>
              </div>
              <div>
                <p>Due Date: {task.taskDueDate}</p>
              </div>
              <button className="task-options-button"><BsThreeDots /></button>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  function toggleTaskCompletion(id) {
    const filteredTasks = tasks.map(task => task.taskID === id ? {...task, taskCompleted: !task.taskCompleted} : task);
    console.log("toggling:", id);
    setTasks(filteredTasks);
  }
}
export default TaskList
