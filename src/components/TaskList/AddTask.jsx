import { useState } from 'react'

function AddTask({setTasks, tasks, setShowForm}) {
    return (
        <>
            <form className="add-task-form" onSubmit={onSubmit}>
                <label htmlFor="task-name">Task Name</label>
                <input id="task-name" required type="text" placeholder="Task Name" />
                <label htmlFor="task-description">Task Description</label>
                <textarea id="task-description" style={{ resize: 'none' }} required cols={70} rows={20} placeholder="Task Description" />
                <label htmlFor="due-date">Due Date</label>
                <input id="due-date" required type="date" />
                <input type="submit" value="Add Task" />
            </form>
        </>
    )
    function onSubmit(event) {
        var newTask = document.getElementById("task-name").value;
        event.preventDefault();
        setTasks([...tasks, newTask]);
        setShowForm(false);
    }
}




export default AddTask