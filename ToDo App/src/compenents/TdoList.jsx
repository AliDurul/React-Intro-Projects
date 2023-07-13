import React from 'react'

const TdoList = ({ todos, setTodos }) => {

    const handleDelete = (id) => {
        setTodos(todos.filter((item) => item.id !== id))
    }

    


    return (
        <div className=" container mt-4 border-top ">
            <div className='w-50 d-flex flex-column  m-auto   '>
                {
                    todos.map((item) => {
                        return (
                            <div key={item.id} className="d-flex justify-content-between  align-items-center mt-2 bg-info border rounded-3">
                                <input onClick={(e)=>console.log(e.target.checked)} type="checkbox" name="" id={item.id} />
                                <div className='mt-2' >
                                    <p>{item.text}</p>
                                </div>
                                <span onClick={() => handleDelete(item.id)}>🍗</span>
                            </div>
                        )
                    })
                }


            </div>
        </div>

    )
}

export default TdoList