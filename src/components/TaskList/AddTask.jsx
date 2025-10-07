import { useState } from 'react'

function AddTask({setTasks, tasks, setShowForm}) {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDueDate, setTaskDueDate] = useState('');

    return (
        <>
            <form className="add-task-form" onSubmit={onSubmit}>
                <label htmlFor="task-name">Task Name</label>
                <input id="task-name" required type="text" placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} />

                <label htmlFor="task-description">Task Description</label>
                <textarea id="task-description" style={{ resize: 'none' }} required cols={70} rows={10} placeholder="Task Description" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />

                <label htmlFor="due-date">Due Date</label>
                <input id="due-date" required type="date" value={taskDueDate} onChange={(e) => setTaskDueDate(e.target.value)} />

                <div className="add-task-form-buttons">
                    <button className="click-button" type="submit">Add Task</button>
                    <button id="cancel-button" type="button" className="click-button" onClick={() => setShowForm(false)}>Cancel</button>
                </div>
            </form>
        </>
    )
    function onSubmit(event) {
        event.preventDefault();
        const newTask = {
            taskName: taskName,
            taskDescription : taskDescription,
            taskCompleted: false,
            taskDueDate: taskDueDate,
            taskAddDate: new Date(),
            taskID: crypto.randomUUID()
        };
        setTasks([...tasks, newTask]);
        console.log("added task: ", newTask.taskName, newTask.taskID);
        setShowForm(false);
    }
}




export default AddTask