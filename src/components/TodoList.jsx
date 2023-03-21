import { useState } from "react"

const TodoList = () => {

    const initialForm = ''

    const [tasks, setTasks] = useState([]);
    const [form, setForm] = useState(initialForm);

    const handleDeleteTask = (index) => {
        setTasks(prev => {
            const newTasks = prev.filter((elem, i) => i !== index);
            return newTasks;
        })
    }

    const handleComplete = (index) => {
        const newArr = [...tasks];
        if (newArr[index].completed) {
            newArr[index].completed = false;
        } else {
            newArr[index].completed = true;
        }
        setTasks(newArr);
    }

    const handleSetForm = (e) => {
        setForm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let taskArr = [...tasks];
        taskArr.push({todo: form, completed: false});
        setTasks(taskArr);
        setForm(initialForm);
    }

    return (
        <div>
            {tasks.map((elem, i) => {
                return (
                    <div key={i} className="task">
                        <p>{elem.todo}</p>
                        <button className={`${elem.completed ? "green" : "red"}`} onClick={() => handleComplete(i)}>Completed</button>
                        <button onClick={() => handleDeleteTask(i)}>Delete</button>
                    </div>
                )
            })}
            <form>
                <label>Add task:</label>
                <input type="text" value={form} onChange={handleSetForm}/>
                <button onClick={handleSubmit}>Create</button>
            </form>
        </div>
    )
};

export default TodoList;