import React, { useRef } from 'react'

import { useEffect } from 'react';
import { useState } from 'react';
import { RiFileEditFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";

import "../assets/css/home.css"
function todo() {
 

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [show, setshow] = useState(false)

  const didmnt = useRef(false)  //ref is used as a variable who's value is false



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


  }

  function handleEdit(e) {
    const id = e.target.id;

    settodo(todos[id].todo)

    const newTodos = todos.filter((item, index) => {
      return index != id
    })

    settodos(newTodos)



  }

  function handleDelete(e) {

    const id = e.target.id;
    console.log(id);

    const newTodos = todos.filter((item, index) => {
      return index != id
    })
    settodos(newTodos)



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



  }
  function handleShowDone() {
    setshow(!show)
  }


  useEffect(() => {

    if (didmnt.current) {   //here the value of ref is false and the code block is not exicute for the time where todos is created

      localStorage.setItem("todos", JSON.stringify(todos))
      console.log(todos);
      console.log("good")
    }
    else {
      didmnt.current = true
    }

  }, [todos])



  return (
    <>
      <div className="container mt-5  pt-5" style={{ width: 1060 }}>
        <div className="card" style={{ width: 1060 }}>


          <div className="card-header fw-bolder fs-5 text-center text-light VC">
            TODO
          </div>


          <div className="add mx-auto my-3">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Add a Daily Task" value={todo} onChange={handleChange} />

              <button className="btn addbtn text-white" type="button" onClick={handleAdd}>ADD</button>
            </div>
            <input className='me-2' type="checkbox" name="" id="" checked={show} onChange={handleShowDone} />See Your completed Work


          </div>


          <ul className="list-group list-group-flush ">
            {
              todos.map((item, index) => (

                <div key={index}>

                  {(show || !item.complete) &&

                    <li className={item.complete ? "text-decoration-line-through list-group-item d-flex  justify-content-between align-items-center " : " list-group-item d-flex  justify-content-between align-items-center"}>
                      <span >
                        <input className='me-3' type="checkbox" name=""
                          checked={item.complete}
                          id={index} onChange={handleCheck} />


                        {item.todo}
                      </span>
                      <span>
                        <button className="btn addbtn text-white me-2" type="button"
                          id={index} onClick={handleEdit} ><RiFileEditFill /></button>

                        <button className="btn addbtn text-white" type="button"
                          onClick={handleDelete} id={index}
                        ><AiFillDelete /></button>

                      </span>
                    </li>

                  }


                </div>

              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default todo