import { useState, useEffect } from 'react'
import Nav from './components/nav'

import './App.css'

function App() {
  
  const [count, setCount] = useState(0)
  const [colors, setColor] = useState("no Color")

  useEffect(() => {
    alert("I am Running On First Render")
  }, [])
  useEffect(() => {
    let color=prompt("enter any color");
    setColor(color)
    
    
    
  }, [count])
  


  

  return (
    <>
      <Nav ColorName={colors} />
      <p>{count}</p>
      

      <button onClick={()=>{setCount(count+1)
        
      }}>click me</button>
    </>
  )
}

export default App
