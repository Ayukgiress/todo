import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleTaskClick = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, { name: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleCheckboxChange = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <>
            <h1>Todo App</h1>
            <div className="container">
                <div className="inputBox">
                    <input type="text" placeholder="Enter your task" className="input" value={inputValue} onChange={handleInputChange} />
                    <button className="button" onClick={handleTaskClick}>add</button>
                </div>
                <div className="task">
                    {tasks.map((task, index) => (
                        <div key={index} className="task-item">
                            <input type="checkbox" checked={task.completed} onChange={() => handleCheckboxChange(index)} />
                            <h3 className={task.completed ? 'completed' : ''}>{task.name}</h3>
                            <button onClick={() => handleDeleteTask(index)} className='del'>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default TodoList;