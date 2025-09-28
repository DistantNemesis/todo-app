import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList/TaskList.jsx'
import AddTask from './components/TaskList/AddTask.jsx'

function App() {
  const [tasks, setTasks] = useState([])
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('all');

  return (
    <>
      <header>
          My To Do List
      </header>

      <main>
        {showForm ? (
          <AddTask setTasks={setTasks} tasks={tasks} setShowForm={setShowForm} />
        ) : (
          <>
            <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />
            <div>
              <button className="click-button" onClick={(e) => setShowForm(true)}>Add Task</button>
              <select value={filter} id="select-task" className="select-task-button" onChange={(e) => setFilter(e.target.value)}>
                <option value="all"> View All Tasks</option>
                <option value="completed"> View Completed Tasks</option>
                <option value="active"> View Active Tasks</option>
              </select>
            </div>
          </>
        )}
      </main>
    </>
  )
}

export default App
