import React from 'react'

const TdoList = ({ todos, setTodos }) => {

    const handleDelete = (id) => {
        setTodos(todos.filter((item) => item.id !== id))
    }

    const isChecked = (id, iscomplete) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, checked: iscomplete } : todo))
    }

    return (
        <div className=" container mt-4 border-top ">
            <div className='w-50 d-flex flex-column  m-auto   '>
                {
                    todos.map((item) => {
                        return (
                            <div key={item.id} className={`fw-bold text-wrap p-2 text-uppercase d-flex justify-content-between  align-items-center mt-2 bg-info border rounded-3 ${(item.checked ? 'text-decoration-line-through done' : undefined)}`} style={{width: "100%"}}>
                                <input onClick={(e) => isChecked(item.id, e.target.checked)} type="checkbox" name="" id={item.id} />
                                <div className='mt-2' >
                                    <p>{item.text}</p>
                                </div>
                                <span onClick={() => handleDelete(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="red" className="bi bi-trash" viewBox="0 0 16 16" role="button">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                    </svg>
                                </span>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    )
}

export default TdoList