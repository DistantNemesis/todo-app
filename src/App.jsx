import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './components/TaskList/TaskList.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
        My To Do List
    </header>

    <main>
      <TaskList />
    </main>
    </>
  )
}

export default App
