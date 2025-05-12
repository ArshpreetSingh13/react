import React from 'react'
import "../style/page.css"
import { useEffect } from 'react';
import { useState } from 'react';
function page() {

    const [todo, settodo] = useState("")
    const [todos, settodos] = useState([])



    useEffect(() => {
        const todostring = localStorage.getItem("todos")
        if (todostring) {
            const Todos = JSON.parse(localStorage.getItem("todos"))
            settodos(Todos)
        }
    }, [])


    function handleAdd() {
        settodos([...todos, { todo, complete: false }])
        settodo("")
        saveToLocal()

    }

    function handleEdit(e) {
        const id = e.target.id;

        settodo(todos[id].todo)

        const newTodos = todos.filter((item, index) => {
            return index != id
        })

        settodos(newTodos)
        saveToLocal()


    }

    function handleDelete(e) {

        const id = e.target.id;
        console.log(id);

        const newTodos = todos.filter((item, index) => {
            return index != id
        })

        settodos(newTodos)

        saveToLocal()




    }

    function handleChange(e) {
        settodo(e.target.value)
    }
    function handleCheck(e) {
        const id = e.target.id
        const newTodos = [...todos];
        newTodos[id].complete = !newTodos[id].complete
        settodos(newTodos)
        console.log(todos[id].complete)
        saveToLocal()


    }

    function saveToLocal() {
        localStorage.setItem("todos", JSON.stringify(todos))
        console.log("complete");
        
    }
    return (
        <>
            <div className="container mt-5 pt-5">
                <div className="card" style={{ width: 1060 }}>
                    <div className="card-header fw-bolder fs-5 text-center text-light VC">
                        TODO
                    </div>
                    <div className="add mx-auto my-3">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Add a Daily Task" value={todo} onChange={handleChange} />

                            <button className="btn addbtn text-white" type="button" onClick={handleAdd}>ADD</button>
                        </div>

                        
                    </div>
                    <ul className="list-group list-group-flush ">
                        {
                            todos.map((item, index) => (

                                <div key={index}>


                                    <li className={item.complete ? "text-decoration-line-through list-group-item d-flex  justify-content-between align-items-center " : " list-group-item d-flex  justify-content-between align-items-center"}>
                                        <span >
                                            <input className='me-3' type="checkbox" name="" 
                                            checked={item.complete}
                                                id={index} onChange={handleCheck} />


                                            {item.todo}
                                        </span>
                                        <span>
                                            <button className="btn addbtn text-white me-2" type="button"
                                                id={index} onClick={handleEdit} >EDIT</button>

                                            <button className="btn addbtn text-white" type="button"
                                                onClick={handleDelete} id={index}
                                            >DELETE</button>

                                        </span>
                                    </li>
                                </div>

                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default page