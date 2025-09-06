import { useState } from 'react'

function TaskList() {
  const [tasks, setTasks] = useState([])

  return (
    <>
        {tasks.length === 0 ? (
            <p>No tasks are in your to-do list &#128077;</p>
        ) : (
            <p></p>
        )
        }
    </>
  )
}

export default TaskList
