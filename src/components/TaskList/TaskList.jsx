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
                  tasks.map((task, index) => (
                    <li className="task-item" key={index}>
                      <p>{task}</p>
                    </li>
                  ))
                )}
              <div className="buttons">
                  <button className="add-task-button" onClick={addTask}>Add Task</button>
                  <select className="select-task-button" name="Change View">
                    <option> View All Tasks</option>
                    <option> View Completed Tasks</option>
                    <option> View Active Tasks</option>
                  </select>
                </div>
          </>
        )}
    </>
  )
  function addTask() {
      setShowForm(true);
  }


}

export default TaskList
