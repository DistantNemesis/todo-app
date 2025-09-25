import { useState } from 'react'

import './App.css'
import TaskList from './components/TaskList/TaskList.jsx'
function App() {

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
