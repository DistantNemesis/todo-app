import { useState } from 'react'

function TaskList() {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <div class="task-list">
        {tasks.length === 0 ? (
            <p>No tasks are in your to-do list &#128077;</p>
          ) : (
              tasks.map((task, index) => (
                <li class="task-item" key={index}>
                  <p>{task}</p>
                </li>
              ))
          )
        }
      </div>
      <div class="buttons">
        <button class="add-task-button" onClick={addTask}>Add Task</button>
        <select class="select-task-button" name="Change View">
          <option> View All Tasks</option>
          <option> View Completed Tasks</option>
          <option> View Active Tasks</option>
        </select>
      </div>
    </>
  )

  function addTask() {
    
  }
}

export default TaskList
