import React from 'react'
import { NavLink } from 'react-router-dom'

function nav() {
  return (
    <>
    <nav className='mt-4'>

              <ul className="nav justify-content-center">
                  <li className="nav-item">
                      <NavLink className="nav-link active" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link active" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link active" to="/">home</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link active" to="/">home</NavLink>
                  </li>
              </ul>

           

            
    </nav>
 
    
    </>
  )
}

export default nav