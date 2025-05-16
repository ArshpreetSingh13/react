import React from 'react'
import { NavLink } from 'react-router-dom'

function nav() {
  return (
    <>
    <nav className='mt-4'>

              <ul className="nav justify-content-center">
                  <li className="nav-item">
                      <NavLink className={(e) => { return e.isActive ? "nav-link bg-primary text-white" : "nav-link active" }}  to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className={(e) => { return e.isActive ? "nav-link bg-primary text-white" : "nav-link active" }}  to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className={(e) => { return e.isActive ? "nav-link bg-primary text-white" : "nav-link active" }} to="/todo">TODO list</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className={(e) => { return e.isActive ? "nav-link bg-primary text-white" : "nav-link active" }}  to="/content">Content</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className={(e) => { return e.isActive ? "nav-link bg-primary text-white" : "nav-link active" }}  to="/form">Form</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className={(e) => { return e.isActive ? "nav-link bg-primary text-white" : "nav-link active" }}  to="/profile/:id=20 :name ">Profile</NavLink>
                  </li>
              </ul>

           

            
    </nav>
 
    
    </>
  )
}

export default nav