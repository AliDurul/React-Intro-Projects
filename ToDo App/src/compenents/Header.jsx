import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Header = ({ setTodos, todos }) => {

    const [task, setTask] = useState({
        id: "",
        text: "",
        
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, task])
        setTask({
            id: "",
            text: "",
            
        })
    }

    const handleInput = (e) => {
        setTask({
            id: uuidv4(),
            text: e.target.value,
            checked:false
        })
    }
    return (
        <div className='container text-center'>
            <h1 className='text-danger'>Todo App</h1>
            <div className="row justify-content-center mt-5">
                <form onSubmit={handleSubmit} action="#" className='d-flex w-50 '>
                    <input onChange={handleInput} type="text" className='form-control' value={task.text} />
                    <button type="submit" className='btn btn-primary'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default Header